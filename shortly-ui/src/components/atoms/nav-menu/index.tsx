import { createRef, FC } from "react";
import LinkButton from "../link-button";
import { BaseComponentProps } from "@/types/base-component-props";

import HamburgerIcon from "@/assets/icon-hamburger-menu.svg?react"

import styles from "./nav-menu.module.scss"

const NavMenu: FC<BaseComponentProps> = () => {
  const navMenuRef = createRef<HTMLElement>()

  const toggleMenu = () => { navMenuRef.current?.classList.toggle(styles.visible) }

  return (
    <div className={styles.wrapper}>
      <button className={styles["menu-button"]} type="button"><HamburgerIcon className="fill-stone-400 cursor-pointer" onClick={toggleMenu}/></button>
      <nav className={styles.navigation} ref={navMenuRef}>
        <ul className={styles["navigation-list"]}>
          <li className={styles["navigation-item"]}><a className={styles.link} href="#">Features</a></li>
          <li className={styles["navigation-item"]}><a className={styles.link} href="#">Pricing</a></li>
          <li className={styles["navigation-item"]}><a className={styles.link} href="#">Resources</a></li>
        </ul>
        <ul className={styles["navigation-list"]}>
          <li className={styles["navigation-item"]}><a className={styles.link} href="#">Login</a></li>
          <li className={styles["navigation-button-item"]}><LinkButton url="#" label="Sign Up" /></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
