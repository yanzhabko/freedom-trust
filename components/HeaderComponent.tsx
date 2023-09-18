"use client";
import React, { use, useState } from "react";
import style from "./HeaderComponent.module.scss";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import classNames from "classnames";
import { usePathname } from 'next/navigation';

const navigationLink = [
  { title: "About", link: "/about" },
  { title: "Responsibilities", link: "/responsibilities" },
  { title: "Support", link: "/support" },
  { title: "Contact Us", link: "/contact" },
];

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={style.placeholder}>
      <div className={style.placeholder_up}>
        <div className={style.container}>
          <div className={style.help}>
            <Link href="/donate" className={style.help__list}>
              <AiOutlineHeart className={style.help__icon} />
              Donate
            </Link>
            <div className={style.help__line}></div>
            <Link href="/contact" className={style.help__list}>
              <AiOutlineMail className={style.help__icon} />
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <nav className={style.navigation}>
          <Link href="/" className={style.navigation__logo}>
            Freedom Trust
          </Link>
          <ul className={style.navigation__list}>
            {navigationLink.map((item, index) => (
              <li className={classNames(style.navigation__item)} key={index}>
                <Link href={item.link} className={classNames(pathname.startsWith(item.link) ? style.navigation__active : "", style.navigation__link)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <button className={style.navigation__btn_burger} onClick={toggleMenu}>
            {!isOpen ? (
              <AiOutlineMenu className={style.navigation__btn_burger__icon} />
            ) : (
              <MdOutlineClose className={style.navigation__btn_burger__icon} />
            )}
          </button>
        </nav>
      </div>
      {isOpen && (
        <div
          className={`${style.menu_wrapper} ${
            isOpen ? style.menu_wrapper__bg : ""
          }`}
        >
          <div className={style.menu_wrapper__placeholder}>
            <div className={classNames(style.menu_wrapper__placeholder__list)}>
              {navigationLink.map((item, index) => (
                <div
                  className={classNames(style.menu_wrapper__placeholder__item, ) }
                  key={index}
                >
                  <Link
                    href={item.link}
                    className={style.menu_wrapper__placeholder__link}
                  >
                    {item.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
