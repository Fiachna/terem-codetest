import { FC, PropsWithChildren } from "react";

import styles from './card.module.scss';

interface CardProps extends PropsWithChildren {
	style?: "default" | "invisible"
	corners?: "sharp" | "round"
}

const Card: FC<CardProps> = ({ children, style="default", corners="round" }) => {
	const classNames = [styles.card]

	style === "invisible" && classNames.push(styles.invisible)
	corners === "sharp" && classNames.push(styles.sharp)

	return (
		<div className={classNames.join(" ")}>
			{children}
		</div>
	)
}

export default Card