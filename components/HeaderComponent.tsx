"use client";
import React, { use, useState } from "react";
import style from "./HeaderComponent.module.scss";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navigationLink = [
  { title: "About", link: "/about" },
  { title: "Responsibilities", link: "/responsibilities" },
  { title: "Support", link: "/support" },
  { title: "Contact Us", link: "/contact" },
];

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    !isOpen
      ? document.body.classList.add(style.scrolling)
      : document.body.classList.remove(style.scrolling);
  };

  return (
    <header className={style.header_container}>
      <div className={style.placeholder}>
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
            {isOpen ? (
              <Link
                href="/"
                className={style.navigation__logo}
                onClick={toggleMenu}
              >
                Freedom Trust
              </Link>
            ) : (
              <Link href="/" className={style.navigation__logo}>
                Freedom Trust
              </Link>
            )}
            <ul className={style.navigation__list}>
              {navigationLink.map((item, index) => (
                <li className={classNames(style.navigation__item)} key={index}>
                  <Link
                    href={item.link}
                    className={classNames(
                      pathname.startsWith(item.link)
                        ? style.navigation__active
                        : "",
                      style.navigation__link
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className={style.navigation__btn_burger}
              onClick={toggleMenu}
            >
              {isOpen ? (
                <MdOutlineClose
                  className={style.navigation__btn_burger__icon}
                />
              ) : (
                <AiOutlineMenu className={style.navigation__btn_burger__icon} />
              )}
            </button>
          </nav>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={classNames(style.container, style.modal)}
          >
            <nav className={style.modal__navigation}>
              <div className={style.modal__list}>
                <div className={style.modal__item}>
                  <Link
                    href="/donate"
                    className={style.modal__link}
                    onClick={toggleMenu}
                  >
                    Donate
                  </Link>
                </div>
                {navigationLink.map((item, index) => (
                  <div
                    key={index}
                    className={style.modal__item}
                    onClick={toggleMenu}
                  >
                    <Link href={item.link} className={style.modal__link}>
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderComponent;
