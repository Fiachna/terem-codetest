import { FC } from "react";

import Logo from "@/assets/logo.svg?react";
import FacebookIcon from "@/assets/icon-facebook.svg?react"
import TwitterIcon from "@/assets/icon-twitter.svg?react"
import PinterestIcon from "@/assets/icon-pinterest.svg?react"
import InstagramIcon from "@/assets/icon-instagram.svg?react"

import styles from './footer.module.scss'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Logo className={styles.logo} />
      <div className={styles.wrapper}>
        <div>
          <h4>Features</h4>
          <ul>
            <li><a href="#">Link Shortening</a></li>
            <li><a href="#">Branded Links</a></li>
            <li><a href="#">Analytics</a></li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <ul className={styles.socials}>
            <li><a href="#"><FacebookIcon /></a></li>
            <li><a href="#"><TwitterIcon /></a></li>
            <li><a href="#"><PinterestIcon /></a></li>
            <li><a href="#"><InstagramIcon /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
