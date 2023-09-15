"use client";
import React from "react";
import style from "./HeaderComponent.module.scss";
import Link from "next/link";

const navigationLink = [
  { title: "About", link: "/about" },
  { title: "Responsibilities", link: "/responsibilities" },
  { title: "Support", link: "/support" },
  { title: "Contact", link: "/contact" },
];

const HeaderComponent = () => {
  return (
    <header className={style.placeholder}>
      <div className={style.container}>
        <nav className={style.navigation}>
          <Link href="/" className={style.navigation__logo}>Freedom Trust</Link>

          <ul className={style.navigation__list}>
            {navigationLink.map((item, index) => (
              <li className={style.navigation__item} key={index}>
                <Link href={item.link} className={style.navigation__link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
