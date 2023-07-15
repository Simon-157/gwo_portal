// libraries
import { MouseEvent, useState } from "react";

//components
import Logo  from "@/assets/gwologo.png";

// styles
import NavbarStyles from "./Navbar.module.css";

//utils
import { PAGES, EXTRA_MENU } from "./pages";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/contexts/authUser";
const Navbar = () => {
  const {signOut} = useAuth()
  const [toggleClass, setToggleClass] = useState("extra__menu");
  const [currentPageName, setCurrentPage] = useState("home");
  const toggleExtraMenu = () => {
    toggleClass === "extra__menu"
      ? setToggleClass("extra__menu__float")
      : setToggleClass("extra__menu");
  };
  return (
    <nav className={NavbarStyles.navbar}>
      <div className={NavbarStyles.navbar__logo}>
        <Image src={Logo} alt="logo" height={50} width={50}/>
      </div>
      <div className={NavbarStyles.navbar__menu}>
        {PAGES.map((page, index) => (
          <div
            key={index}
            className={
              NavbarStyles[
                `${
                  page.name === currentPageName
                    ? "navbar__menu__item__active"
                    : "navbar__menu__item"
                }`
              ]
            }
            onClick={() => setCurrentPage(page.name)}
          >
            {index == PAGES.length - 1 ? (
              <Link
                href={page.path}
                onClick={(e: MouseEvent<HTMLElement>) => {
                  e.preventDefault();
                  toggleExtraMenu();
                }}
              >
                <div className={NavbarStyles.navbar__menu__item__icon}>
                  {page.icon}
                </div>
                <small className={NavbarStyles.navbar__menu__item__text}>
                  {page.name}
                </small>
              </Link>
            ) : (
              <Link href={page.path}>
                <div className={NavbarStyles.navbar__menu__item__icon}>
                  {page.icon}
                </div>
                <small className={NavbarStyles.navbar__menu__item__text}>
                  {page.name}
                </small>
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className={NavbarStyles[toggleClass]}>
        {EXTRA_MENU.map((page, index) => (
          <div
            className={
              NavbarStyles[
                `${
                  page.name === currentPageName
                    ? "navbar__menu__item__active"
                    : "navbar__menu__item"
                }`
              ]
            }
            onClick={() => setCurrentPage(page.name)}
            key={index}
          >
            <Link href={page.path} onClick={page.name === "logout" ? signOut : null}>
              <div className={NavbarStyles.navbar__menu__item__icon}>
                {page.icon}
              </div>
              <small className={NavbarStyles.navbar__menu__item__text}>
                {page.name}
              </small>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
