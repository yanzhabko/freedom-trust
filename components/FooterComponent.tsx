"use client";
import React from "react";
import style from "./FooterComponent.module.scss";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import classNames from "classnames";

const FooterComponent = () => {
  const navigationLink: { title: string; link: string }[] = [
    { title: "About", link: "/about" },
    { title: "Programs", link: "/programs" },
    { title: "Support", link: "/support" },
    { title: "Contact Us", link: "/contact" },
  ];

  const socialLink: { url: string; icon: JSX.Element }[] = [
    {
      url: "tel:+3800000000",
      icon: <GrFacebookOption className={style.footer__icon} />,
    },
    {
      url: "tel:+3800000000",
      icon: <AiFillInstagram className={style.footer__icon} />,
    },
  ];

  return (
    <footer className={style.footer_container}>
      <div className={style.container}>
        <div className={style.footer}>
          <div className={style.footer__box_first}>
            <div className={style.footer__box_first__list}>
              <Link href="/" className={style.footer__logo}>
                Freedom Trust
              </Link>
              <div className={style.footer__navigation}>
                {navigationLink.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className={style.footer__link}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <span className={style.footer__copyright}>
              ©2023 All Rights Reserved.
            </span>
          </div>
          <div className={style.footer__contacts}>
            <div className={style.footer__contacts__container}>
              <Link
                href="mailto:freedom-trust@gmail.com"
                className={style.footer__contacts__mail}
              >
                freedom-trust@gmail.com
              </Link>
              <Link
                href="tel:freedom-trust@gmail.com"
                className={style.footer__contacts__mail}
              >
                +3800000000
              </Link>
            </div>
            <div>
              <Link href="/contact">
                <button
                  className={classNames(
                    style.footer__contacts__btn__text,
                    style.footer__contacts__btn
                  )}
                >
                  Book consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
