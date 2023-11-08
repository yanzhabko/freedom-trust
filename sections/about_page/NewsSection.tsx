"use client";
import React, { useEffect, useState } from "react";
import styles from "./NewsSection.module.scss";
import NewsCardComponent from "@/components/NewsCardComponent";
import news from "@/date/news.json";
import classNames from "classnames";
import Link from "next/link";
import { Group, MantineProvider, Pagination } from "@mantine/core";
import { MdArrowBackIosNew } from "react-icons/md";
import { usePathname } from "next/navigation";

type DataProp = {
  link: string;
  images: string;
  date: string;
  title: string;
};

const NewsSection: React.FC = () => {
  const data: { [key: string]: DataProp } = news;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsToDisplay, setItemsToDisplay] = useState<string[]>([]);
  const totalCard = 6;
  const startIndex = (currentPage - 1) * totalCard;
  const endIndex = startIndex + totalCard;
  const pathname = usePathname();

  useEffect(() => {
    const displayData = Object.keys(data)
      .filter((id) => {
        const item = data[id];
        return item;
      })
      .slice(startIndex, endIndex);
    setItemsToDisplay(displayData);
  }, [data, startIndex, endIndex]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById("news")?.scrollIntoView();
  };

  return (
    <section className={styles.news} id="news">
      <div className={classNames(styles.container, styles.news__container)}>
        <h1 className={styles.news__title}>
          {pathname.endsWith("/about") ? "Latest news" : "News"}
        </h1>

        {pathname.endsWith("/about") ? (
          <>
            <div className={styles.news__card_container}>
              {Object.keys(data)
                .slice(0, 3)
                .map((keys) => (
                  <NewsCardComponent key={keys} data={data[keys]} />
                ))}
            </div>
            <Link className={styles.news__link} href="/about/news">
              Show more
            </Link>
          </>
        ) : (
          <div className={styles.news__boxed}>
            <div className={styles.news__card_container}>
              {itemsToDisplay.map((item) => (
                <NewsCardComponent key={item} data={data[item]} />
              ))}
            </div>
            {Object.keys(data).length > 6 && (
              <MantineProvider>
                <Pagination.Root
                  value={currentPage}
                  onChange={handlePageChange}
                  total={Math.ceil(Object.keys(data).length / 6)}
                  classNames={styles}
                >
                  <Group className={styles.group}>
                    <Pagination.Previous
                      className={styles.next_back}
                      icon={MdArrowBackIosNew}
                    />
                    <Pagination.Items />
                    <Pagination.Next
                      className={classNames(styles.next, styles.next_back)}
                      icon={MdArrowBackIosNew}
                    />
                  </Group>
                </Pagination.Root>
              </MantineProvider>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
