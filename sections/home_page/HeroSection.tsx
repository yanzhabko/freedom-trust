import React from "react";
import styles from "./HeroSection.module.scss";
import { StaticImageData } from "next/image";
import classNames from "classnames";

interface HeroProps {
  image: StaticImageData;
  title: string;
}

const HeroSection: React.FC<HeroProps> = ({ image, title }) => {
  const styleForBackground = {
    backgroundImage: `url(${image.src})`,
  };

  return (
    <section className={styles.hero}>
      <div style={styleForBackground} className={styles.hero__background}>
        <div className={classNames(styles.container, styles.hero__container) }>
         
            <h1>{title}</h1>
         
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
