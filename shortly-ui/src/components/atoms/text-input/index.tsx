import { FC, Ref } from "react";
import { BaseComponentProps } from "@/types/base-component-props";

import styles from './text-input.module.scss'

interface TextInputProps extends BaseComponentProps {
	state: "default" | "error"
	placeholder?: string
	name?: string
	validationMessage?: string
}

const TextInput: FC<TextInputProps> = ({ placeholder, state="default", validationMessage, className, name }) => {
	const combinedClasses = [className, styles["text-input"]].filter((c) => !!c)
	const errorClass = state === "error" ? styles["error"] : "";

	return (
		<div className={combinedClasses.join(" ")}>
			<input name={name} type="text" placeholder={placeholder} className={errorClass} />
			<div className={styles["error-wrapper"]}>
				<div className={styles.error}>{validationMessage}</div>
			</div>
		</div>
	)
}

export default TextInput