"use client";
import React, { useEffect, useState } from "react";
import style from "./HeaderComponent.module.scss";
import Link from "next/link";
import {
  AiOutlineHeart,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineUser,
} from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import Links from "next-intl/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("header");

  const navigationLink = [
    { title: t("about"), link: "/about" },
    { title: t("programs"), link: "/programs" },
    { title: t("support"), link: "/support" },
    { title: t("contact-us"), link: "/contact-us" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    !isOpen
      ? document.body.classList.add(style.scrolling)
      : document.body.classList.remove(style.scrolling);
  };

  const toggleTranslate = () => {
    setActiveLanguage(!activeLanguage);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767.99) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={style.header_container}>
      <div className={style.placeholder}>
        <div className={style.placeholder_up}>
          <div className={style.container}>
            <div className={style.help}>
              <Link href="/donate" className={style.help__list}>
                <AiOutlineHeart className={style.help__icon} />
                {t("donate")}
              </Link>
              <div className={style.help__line}></div>
              <Link href="/contact-us" className={style.help__list}>
                <AiOutlineMail className={style.help__icon} />
                {t("contact")}
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
              <li
                onClick={toggleTranslate}
                className={style.navigation__language}
              >
                <GrLanguage className={style.navigation__language__icon} />
                <AnimatePresence>
                  {activeLanguage && (
                    <motion.ul
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className={classNames(
                        style.navigation__language__container
                      )}
                    >
                      <li>
                        <Links
                          href={`/${pathname}`}
                          locale="ua"
                          className={classNames(
                            locale === "ua"
                              ? style.navigation__language__link__active
                              : "",
                            style.navigation__language__link
                          )}
                        >
                          UA
                        </Links>
                      </li>
                      <li>
                        <Links
                          href={`/${pathname}`}
                          locale="en"
                          className={classNames(
                            locale === "en"
                              ? style.navigation__language__link__active
                              : "",
                            style.navigation__language__link
                          )}
                        >
                          EN
                        </Links>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <Link href="/registration">
                  <AiOutlineUser className={style.navigation__icon} />
                </Link>
              </li>
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
                <div className={style.modal__item}>
                  <div className={style.modal__block}>
                    <Links
                      href={`/${pathname}`}
                      locale="en"
                      className={classNames(
                        locale === "en"
                          ? style.navigation__language__link__active
                          : "",
                        style.modal__link
                      )}
                    >
                      En
                    </Links>
                    <div className={style.modal__line}></div>
                    <Links
                      href={`/${pathname}`}
                      locale="ua"
                      className={classNames(
                        locale === "ua"
                          ? style.navigation__language__link__active
                          : "",
                        style.modal__link
                      )}
                    >
                      Ua
                    </Links>
                  </div>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderComponent;
