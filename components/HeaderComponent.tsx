"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./HeaderComponent.module.scss";
import Link from "next/link";
import {
  AiOutlineHeart,
  AiOutlineMail,
  AiOutlineMenu,
} from "react-icons/ai";
import {
  MdOutlineClose,
  MdKeyboardArrowDown,
  MdLanguage,
} from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import Links from "next-intl/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import { subLink } from "@/lib/data";

const HeaderComponent = () => {
  const prevScroll = useRef(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(0);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Header");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    !isOpen
      ? document.body.classList.add(style.scrolling)
      : document.body.classList.remove(style.scrolling);
    toggleSubMenu(0);
  };

  const toggleSubMenu = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? 0 : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      if (scrollY > prevScroll.current) {
        setIsVisible(false);
      } else if (scrollY < prevScroll.current) {
        setIsVisible(true);
      }
      prevScroll.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <header
      className={classNames(
        style.header_container,
        isVisible ? style.header_container__visible : ""
      )}
    >
      <div className={style.placeholder}>
        <div className={style.placeholder_up}>
          <div className={style.container}>
            <div className={style.help}>
              <Link href="/donate" className={style.help__list}>
                <AiOutlineHeart className={style.help__icon} />
                {t("Donate")}
              </Link>
              <div className={style.help__line}></div>
              <Link href="/contact-us" className={style.help__list}>
                <AiOutlineMail className={style.help__icon} />
                {t("Contact")}
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
              <li
                className={classNames(
                  classNames(
                    pathname.startsWith("/about")
                      ? style.navigation__item__active
                      : "",
                    style.navigation__item
                  )
                )}
              >
                <Link
                  href="/about"
                  className={classNames(style.navigation__link)}
                >
                  {t("About")}
                </Link>
                <ul className={style.navigation__sub_menu}>
                  {subLink[0].map((item, index) => (
                    <li
                      className={style.navigation__sub_menu__item}
                      key={index}
                    >
                      <Link
                        className={style.navigation__sub_menu__hover_link}
                        href={item.link}
                      >
                        {t(item.title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li
                className={classNames(
                  pathname.startsWith("/programs")
                    ? style.navigation__item__active
                    : "",
                  style.navigation__item
                )}
              >
                <Link
                  href="/programs"
                  className={classNames(style.navigation__link)}
                >
                  {t("Programs")}
                </Link>
                <ul className={style.navigation__sub_menu}>
                  {subLink[1].map((item, index) => (
                    <li
                      className={style.navigation__sub_menu__item}
                      key={index}
                    >
                      <Link
                        className={style.navigation__sub_menu__hover_link}
                        href={item.link}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={classNames(style.navigation__item)}>
                <Link
                  href="/support"
                  className={classNames(
                    pathname.startsWith("/support")
                      ? style.navigation__active
                      : "",
                    style.navigation__link
                  )}
                >
                  {t("Support")}
                </Link>
              </li>
              <li className={classNames(style.navigation__item)}>
                <Link
                  href="/contact-us"
                  className={classNames(
                    pathname.startsWith("/contact-us")
                      ? style.navigation__active
                      : "",
                    style.navigation__link
                  )}
                >
                  {t("Contact-us")}
                </Link>
              </li>
              <li className={style.navigation__language}>
                <MdLanguage className={style.navigation__language__icon} />
                <ul className={style.navigation__language__container}>
                  <li className={style.navigation__language__container__item}>
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
                </ul>
              </li>
              {/* <li>
                <Link href="/registration">
                  <LuUser2 className={style.navigation__icon} />
                </Link>
              </li> */}
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
            className={classNames(style.modal)}
          >
            <nav className={style.modal__navigation}>
              <div className={style.modal__list}>
                <div
                  className={style.modal__item}
                  onClick={() => toggleSubMenu(1)}
                >
                  <div>
                    <p
                      className={classNames(
                        style.modal__link,
                        pathname.startsWith("/about") ? style.modal__active : ""
                      )}
                    >
                      {t("About")}
                      <MdKeyboardArrowDown
                        className={classNames(
                          openSubMenu === 1
                            ? style.modal__row__top
                            : style.modal__row
                        )}
                      />
                    </p>
                  </div>
                  {openSubMenu === 1 && (
                    <div className={style.modal__sub_menu}>
                      {subLink[0].map((item, index) => (
                        <div
                          key={index}
                          className={style.modal__sub_menu__item}
                        >
                          <Link
                            className={classNames(
                              style.modal__link,
                              style.modal__active__selected
                            )}
                            href={item.link}
                            onClick={() => toggleMenu()}
                          >
                            {t(item.title)}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div
                  className={style.modal__item}
                  onClick={() => toggleSubMenu(2)}
                >
                  <p
                    className={classNames(
                      style.modal__link,
                      pathname.startsWith("/programs")
                        ? style.modal__active
                        : ""
                    )}
                  >
                    {t("Programs")}
                    <MdKeyboardArrowDown
                      className={classNames(
                        openSubMenu === 2
                          ? style.modal__row__top
                          : style.modal__row
                      )}
                    />
                  </p>

                  {openSubMenu === 2 && (
                    <div className={style.modal__sub_menu}>
                      {subLink[1].map((item, index) => (
                        <div
                          key={index}
                          className={style.modal__sub_menu__item}
                        >
                          <Link
                            className={classNames(
                              style.modal__link,
                              style.modal__active__selected
                            )}
                            href={item.link}
                            onClick={toggleMenu}
                          >
                            {t(item.title)}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className={style.modal__item}>
                  <Link
                    href="/support"
                    className={classNames(
                      style.modal__link,
                      style.modal__active__selected,
                      pathname.startsWith("/support") ? style.modal__active : ""
                    )}
                    onClick={toggleMenu}
                  >
                    {t("Support")}
                  </Link>
                </div>
                <div className={style.modal__item}>
                  <Link
                    href="/contact-us"
                    className={classNames(
                      style.modal__link,
                      style.modal__active__selected,
                      pathname.startsWith("/contact-us")
                        ? style.modal__active
                        : ""
                    )}
                    onClick={toggleMenu}
                  >
                    {t("Contact-us")}
                  </Link>
                </div>
                <div className={style.modal__item}>
                  <div className={style.modal__block}>
                    <Links
                      href={`/${pathname}`}
                      locale="en"
                      className={classNames(style.modal__link)}
                    >
                      En
                    </Links>
                    <div className={style.modal__line}></div>
                    <Links
                      href={`/${pathname}`}
                      locale="ua"
                      className={classNames(style.modal__link)}
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
