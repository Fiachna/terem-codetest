import { FC, MouseEventHandler, PropsWithChildren } from "react"
import { BaseComponentProps } from "@/types/base-component-props"

import styles from './button.module.scss'

interface ButtonProps extends PropsWithChildren, BaseComponentProps {
	actionType?: "button" | "submit" | "reset"
	onClick?: MouseEventHandler
}

const Button: FC<ButtonProps> = ({ children, actionType="button", onClick, ...props }) => {
	return (
		<button {...props} className={styles.button} type={actionType} onClick={onClick}>{children}</button>
	)
}

export default Button