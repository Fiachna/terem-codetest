import { FC, PropsWithChildren, ReactElement } from "react";

import Card from "@/components/atoms/card";

import styles from "./icon-card.module.scss";

interface IconCardProps extends PropsWithChildren {
	icon: ReactElement;
}

const IconCard: FC<IconCardProps> = ({ icon, children }) => {
	return (
		<Card corners="sharp">
			<div className={styles.wrapper}>
				<div className={styles.icon}>
					{icon}
				</div>
			</div>
			{children}
		</Card>
	)
}

export default IconCard