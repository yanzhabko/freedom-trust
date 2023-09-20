import React from "react";
import styles from "./HeroSection.module.scss";
import { StaticImageData } from "next/image";

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
        <div className={styles.hero__container}>
          <div className={styles.container}>
            <div className={styles.hero__title}>{title}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
