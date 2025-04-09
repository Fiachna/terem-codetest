import { FC } from "react";
import NavMenu from "../nav-menu";
import { BaseComponentProps } from "@/types/base-component-props";

import Logo from "@/assets/logo.svg?react";

import styles from "./header.module.scss";

const Header: FC<BaseComponentProps> = () => {
	return (
		<header className={styles.header}>
			<Logo className={styles.logo} />

			<NavMenu />
		</header>
	)
}

export default Header