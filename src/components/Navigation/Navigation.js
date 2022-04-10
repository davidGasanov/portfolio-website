import React from "react";
import styles from "./Navigation.module.css";
import Phonemenu from "./Phonemenu";
import { IoMenuOutline } from "react-icons/io5";
import Link from "react-scroll/modules/components/Link";
import { ReactComponent as LogoOutline } from "../../imgs/logo_outline.svg";
import { useDetectClickOutside } from "react-detect-click-outside";


const Navigation = ({ scrolled, togglePhoneMenu, phoneMenu }) => {
  console.log("scrolled status: " + scrolled);

  const handleClickOutside = () =>{
    togglePhoneMenu(false);
  }

  const ref = useDetectClickOutside({onTriggered: handleClickOutside })

  return (
    <div ref={ref}>
      <Phonemenu togglePhoneMenu={togglePhoneMenu} phoneMenu={phoneMenu} />
      <nav
        invisible={phoneMenu.toString()}
        scrolled={scrolled.toString()}
        className={styles.navigation}
      >
        <IoMenuOutline
          onClick={() => {
            console.log("Togglephonemenu fired");
            togglePhoneMenu(true);
          }}
          className={styles.phoneMenuToggler}
          size={30}
        />

        <ul visible={!phoneMenu.toString()} className={styles.desktopNavList}>
          <LogoOutline className={styles.logoDesktop} />
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
    </div>
  );
};

export default Navigation;
