"use client";
import React from "react";
import style from "./FooterComponent.module.scss";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import classNames from "classnames";
import { footerLink } from "@/lib/data";
import { useTranslations } from "next-intl"

const FooterComponent = () => {
  const t = useTranslations('Footer')
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
                {footerLink.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className={style.footer__link}
                  >
                    {t(item.title)}
                  </Link>
                ))}
              </div>
            </div>
            <span className={style.footer__copyright}>
              {t("Rights")}
            </span>
          </div>
          <div className={style.footer__contacts}>
            <div className={style.footer__contacts__container}>
              {/* <div>
                {socialLink.map((link, index) => (
                  <Link href={link.url} className={style.footer__icon}>
                    {link.icon}
                  </Link>
                ))}
              </div> */}
              <Link
                href="mailto:freedom.trust@gmail.com"
                className={style.footer__contacts__mail}
              >
                office@gmail.com
              </Link>
            </div>
            <div>
              <Link href="/contact-us">
                <button
                  className={classNames(
                    style.footer__contacts__btn__text,
                    style.footer__contacts__btn
                  )}
                >
                  {t("Consultation")}
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
