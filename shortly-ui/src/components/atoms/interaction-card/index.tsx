import { FC } from "react";
import { BaseComponentProps } from "@/types/base-component-props";
import Button from "@/components/atoms/button";
import TextInput from "@/components/atoms/text-input";

import styles from './interaction-card.module.scss'

const InteractionCard: FC<BaseComponentProps> = () => {
	return (
		<form className={styles.card}>
			<TextInput name="linkInput" state="error" placeholder="Shorten a link here..." validationMessage="Please add a link" className={styles.input}/>
			<Button actionType="submit">Shorten It!</Button>
		</form>
	)
}

export default InteractionCard