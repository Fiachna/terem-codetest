import { FC, ReactElement } from "react";
import { BaseComponentProps } from "@/types/base-component-props";

import styles from "./icon-card.module.scss";

interface IconCardProps extends BaseComponentProps {
	icon: ReactElement;
	title: string;
	content: string;
}

const IconCard: FC<IconCardProps> = ({ icon, title, content }) => {
	return (
		<div className={styles.card}>
			<div className={styles.wrapper}>
				<div className={styles.icon}>
					{icon}
				</div>
			</div>
			<div className={styles.content}>
				<h3>{title}</h3>
				<div>{content}</div>
			</div>
		</div>
	)
}

export default IconCard