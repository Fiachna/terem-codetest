import { FC } from "react";
import { BaseComponentProps } from "@/types/base-component-props";

import styles from './link-card.module.scss';
import CopyButton from "../copy-button";

interface LinkCardProps extends BaseComponentProps {
	originalUrl: string
	shortenedUrl: string
}

const LinkCard: FC<LinkCardProps> = ({ originalUrl, shortenedUrl }) => {
	return (
		<div className={styles.card}>
			<div className={styles.heading}>{originalUrl}</div>
			<div className={styles.content}>
				<div><a href={shortenedUrl}>{shortenedUrl}</a></div>
				<CopyButton toCopy={shortenedUrl} />
			</div>
		</div>
	)
}

export default LinkCard