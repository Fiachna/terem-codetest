import { FC, PropsWithChildren } from "react";
import { BaseComponentProps } from "@/types/base-component-props";

import styles from './card.module.scss';

interface CardProps extends PropsWithChildren, BaseComponentProps {
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