import { FC, Ref } from "react";
import { BaseComponentProps } from "@/types/base-component-props";

import styles from './text-input.module.scss'

interface TextInputProps extends BaseComponentProps {
	state: "default" | "error"
	placeholder?: string
	name?: string
	validationMessage?: string
	pattern?: string
	required?: boolean
}

const TextInput: FC<TextInputProps> = ({ placeholder, state="default", validationMessage, className, name, ...props }) => {
	const combinedClasses = [className, styles["text-input"]].filter((c) => !!c)
	const errorClass = state === "error" ? styles["error"] : "";

	return (
		<div className={combinedClasses.join(" ")}>
			<input {...props} name={name} type="text" placeholder={placeholder} className={errorClass} />
			<div className={styles["error-wrapper"]}>
				<div className={styles.error}>{validationMessage}</div>
			</div>
		</div>
	)
}

export default TextInput