import { FC } from "react";
import Button from "@/components/atoms/button";
import { BaseComponentProps } from "@/types/base-component-props";

interface CopyButtonProps extends BaseComponentProps {
	toCopy: string;
}

const CopyButton: FC<CopyButtonProps> = ({ toCopy }) => {
	const copyToClipboard = () => { navigator.clipboard.writeText(toCopy) }

	return (
		<Button data-testid="copy-button" onClick={copyToClipboard}>Copy</Button>
	)
}

export default CopyButton