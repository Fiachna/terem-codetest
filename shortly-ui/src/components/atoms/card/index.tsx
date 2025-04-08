import { FC, PropsWithChildren } from "react";

import styles from './card.module.scss';

interface CardProps extends PropsWithChildren {
	style?: "default" | "invisible"
}

const Card: FC<CardProps> = ({ children, style="default" }) => {
	const classNames = [styles.card]

	if (style === "invisible") {
		classNames.push(styles.invisible)
	}

	return (
		<div className={classNames.join(" ")}>
			{children}
		</div>
	)
}

export default Card