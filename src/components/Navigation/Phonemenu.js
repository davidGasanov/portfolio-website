import React from "react";

import Link from "react-scroll/modules/components/Link";
import styles from "./Navigation.module.css";
import { useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { ReactComponent as LogoOutline } from "../../imgs/logo_outline.svg";

function Phonemenu({ togglePhoneMenu, phoneMenu }) {
  useEffect(() => {
    console.log("Phone menu status: " + phoneMenu);
  }, [phoneMenu]);


  return (
    <nav className={styles.phoneMenu}  visible={phoneMenu.toString()}>
      <div className={styles.closePhoneMenu}>
        <MdOutlineClose
          onClick={() => {
            togglePhoneMenu(false);
          }}
          size={30}
        />
      </div>

      <ul className={styles.mobileNavList}>
        <LogoOutline className={styles.logo} />
        <li className={styles.navLink}>
          <Link smooth={true} duration={1000} to="home">
            Home
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link smooth={true} duration={1000} to="about">
            About
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link smooth={true} duration={1000} to="projects">
            Work
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link smooth={true} duration={1000} to="contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Phonemenu;
