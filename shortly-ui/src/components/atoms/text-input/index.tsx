import { FC, Ref } from "react";
import { BaseComponentProps } from "@/types/base-component-props";

interface TextInputProps extends BaseComponentProps {
	ref?: Ref<HTMLInputElement>
	state: "default" | "error"
	label?: string
	validationMessage?: string
}

const TextInput: FC<TextInputProps> = ({ ref, label, state="default", validationMessage }) => {
	return (
		<div>
			<input ref={ref} />
			<div></div>
		</div>
	)
}

export default TextInput