import { createRef, FC, FormEvent, useContext, useState } from "react";
import { BaseComponentProps } from "@/types/base-component-props";
import { ValidityState } from "@/types/validity-state";
import Button from "@/components/atoms/button";
import TextInput from "@/components/atoms/text-input";

import styles from './interaction-card.module.scss'
import { ShortenUrlActionContext } from "@/components/context/shortened-urls";

const InteractionCard: FC<BaseComponentProps> = () => {
	const [validity, setValidity] = useState<ValidityState>({ isValid: true })
	const shortenUrlAction = useContext(ShortenUrlActionContext)
	const inputRef = createRef <HTMLInputElement>()

	const clearValidity = () => {
		setValidity({ isValid: true, invalidReason: "" })
	}

	const validateUrl = (urlToValidate?: string) => {
		const urlRegex = /^(https?:\/\/)?(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
		let isValid = false;

		// console.log("url", !!urlToValidate)

		if (urlToValidate && urlRegex.test(urlToValidate)) {
			isValid = true;
			clearValidity()
		} else if (urlToValidate) {
			setValidity({ isValid: false, invalidReason: "Please enter a valid link" })
		} else {
			setValidity({ isValid: false, invalidReason: "Please add a link" })
		}

		return isValid;
	}

	const onSubmit = (event: FormEvent) => {
		event.preventDefault();
		const urlToShorten = inputRef.current?.value

		if (validateUrl(urlToShorten)) {
			shortenUrlAction(urlToShorten!)
		}
	}

	return (
		<form className={styles.card} onSubmit={onSubmit}>
			<TextInput ref={inputRef} label="Link to shorten" name="linkInput" state={validity.isValid ? "default" : "error"} placeholder="Shorten a link here..." validationMessage={validity.invalidReason} className={styles.input} onChange={clearValidity} />
			<Button actionType="submit" data-testid="interaction-card-submit">Shorten It!</Button>
		</form>
	)
}

export default InteractionCard