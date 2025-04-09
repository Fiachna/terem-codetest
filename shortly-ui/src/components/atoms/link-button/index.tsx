import { FC } from "react";
import { BaseComponentProps } from "@/types/base-component-props";

import styles from './link-button.module.scss'

interface LinkButtonProps extends BaseComponentProps {
	url: string
	label: string
}

const LinkButton: FC<LinkButtonProps> = ({ url, label }) => {
	return (
		<a className={styles.button} href={url}>{label}</a>
	)
}

export default LinkButton