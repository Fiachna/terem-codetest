import { FC } from "react";
import Button from "@/components/atoms/button";
import { BaseComponentProps } from "@/types/base-component-props";

import styles from './copy-button.module.scss'

interface CopyButtonProps extends BaseComponentProps {
	toCopy: string;
}

const CopyButton: FC<CopyButtonProps> = ({ toCopy }) => {
	const copyToClipboard = () => { navigator.clipboard.writeText(toCopy) }

	return (
		<Button data-testid="copy-button" onClick={copyToClipboard} className={styles["copy-button"]} ></Button>
	)
}

export default CopyButton