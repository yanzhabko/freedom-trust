import React from "react";
import { PiHandHeart } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { BsBook } from "react-icons/bs";

export const subLink = [
  [
    { title: "History", link: "/about#history" },
    { title: "Mission", link: "/about#mission" },
    { title: "News", link: "/about#news" },
    { title: "Consultation", link: "/about#consultation" },
  ],
  [
    { title: "Programs 1", link: "/programs#" },
    { title: "Programs 2", link: "/programs#" },
    { title: "Programs 3", link: "/programs#" },
  ],
];

export const footerLink = [
  { title: "About", link: "/about" },
  { title: "Programs", link: "/programs" },
  { title: "Support", link: "/support" },
  { title: "Contact-us", link: "/contact-us" },
];

export const missionDate = [
  {
    title: "Lorem ispum",
    number: "01",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    title: "Lorem ispum",
    number: "02",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    title: "Lorem ispum",
    number: "03",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    title: "Lorem ispum",
    number: "04",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
];

export const canDoData = [
  {
    title: "Donate",
    icon: React.createElement(PiHandHeart),
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    title: "Donate",
    icon: React.createElement(GoPeople),
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    title: "Donate",
    icon: React.createElement(BsBook),
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];
