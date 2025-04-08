import { FC } from "react";

import styles from './link-button.module.scss'

interface LinkButtonProps {
	url: string
	label: string
}

const LinkButton: FC<LinkButtonProps> = ({ url, label }) => {
	return (
		<a className={styles.button} href={url}>{label}</a>
	)
}

export default LinkButton