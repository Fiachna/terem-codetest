import { FC } from "react";
import Card from "@/components/atoms/card";

import styles from './link-card.module.scss';
import CopyButton from "../copy-button";

interface LinkCardProps {
	originalUrl: string
	shortenedUrl: string
}

const LinkCard: FC<LinkCardProps> = ({ originalUrl, shortenedUrl }) => {
	return (
		<Card>
			<div className={styles.content}>
				<div className={styles.heading}>{originalUrl}</div>
				<div><a href={shortenedUrl}>{shortenedUrl}</a></div>
				<CopyButton />
			</div>
		</Card>
	)
}

export default LinkCard