import { ChangeEventHandler, FC, Ref } from "react";
import { BaseComponentProps } from "@/types/base-component-props";

import styles from './text-input.module.scss'

interface TextInputProps extends BaseComponentProps {
	state: "default" | "error"
	placeholder?: string
	name?: string
	label: string
	validationMessage?: string
	ref: Ref<HTMLInputElement>
	onChange?: ChangeEventHandler
}

const TextInput: FC<TextInputProps> = ({ placeholder, state="default", validationMessage, className, name, label, ref, onChange }) => {
	const combinedClasses = [className, styles["text-input"]].filter((c) => !!c)
	const errorClass = state === "error" ? styles["error"] : "";

	return (
		<div className={combinedClasses.join(" ")}>
			<label htmlFor={name}>{label}</label>
			<input ref={ref} name={name} type="text" placeholder={placeholder} className={errorClass} data-testid={`${name}-text-input`} onChange={onChange} />
			{state === "error" && <div className={styles["error-wrapper"]} data-testid={`${name}-validation-message`}>
				<div className={styles.error}>{validationMessage}</div>
			</div>}
		</div>
	)
}

export default TextInput