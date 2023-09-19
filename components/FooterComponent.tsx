import React from "react";
import style from "./FooterComponent.module.scss";
import Link from "next/link";

const FooterComponent = () => {
  const navigationLink = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Responsibilities", link: "/responsibilities" },
    { title: "Support", link: "/support" },
    { title: "Contact Us", link: "/contact" },
  ];

  return (
    <footer className={style.footer_container}>
      <div className={style.container}>
        <div className={style.footer}>
          <div className={style.footer__list}>
            <Link href="/" className={style.footer__logo}>
              Freedom Trust
            </Link>
            <div className={style.footer__copyright}>
              ©2023 All Rights Reserved.
            </div>
          </div>

          <div className={style.footer__navigation}>
            {navigationLink.map((item, index) => (
              <Link key={index} href={item.link} className={style.footer__link}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        {/* <div className={style.footer_container__list}>
          <div className={style.footer_container__item}>
            <div className={style.footer_container__logo}>Freedom Trust</div>
            <div className={style.footer_container__link}>
              ©2023 All Rights Reserved.
            </div>
          </div>
          <div className={style.footer_container__item}>
            <Link
              href="mailto:contact@freedomtrust.com"
              className={style.footer_container__link}
            >
              contact@freedomtrust.com
            </Link>
            <Link
              href="tel:+380666650949"
              className={style.footer_container__link}
            >
              +380 66 665 09 49
            </Link>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default FooterComponent;
