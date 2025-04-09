import { FC, PropsWithChildren } from "react"
import { BaseComponentProps } from "@/types/base-component-props"

interface ButtonProps extends PropsWithChildren, BaseComponentProps {
	actionType?: "button" | "submit" | "reset"
}

const Button: FC<ButtonProps> = ({ children, actionType="button" }) => {
	return (
		<button type={actionType}>{children}</button>
	)
}

export default Button