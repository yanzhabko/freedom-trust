import React from "react";
import styles from "./InformationSection.module.scss";

const InformationSection=()=>{
    return(
        <section className={styles.infoConteiner}>
                <div className={styles.infoConteiner__infoSection}>
                    <div className={styles.infoConteiner__infoSection__year}>
                        <span className={styles.infoConteiner__head}>Рік заснування</span>
                        <span className={styles.infoConteiner__info}>2022</span>
                    </div>
                    <div className={styles.infoConteiner__infoSection__location}>
                        <span className={styles.infoConteiner__head}>Штаб квартира</span>
                        <span className={styles.infoConteiner__info}>Чернівці</span>
                    </div>
                    <div className={styles.infoConteiner__infoSection__text}>
                        <p className={styles.infoConteiner__head}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </p>
                        <p className={styles.infoConteiner__head}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </p>
                        <p className={styles.infoConteiner__head}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </p>
                    </div>
                </div>
        </section>
    )
}

export default InformationSection;