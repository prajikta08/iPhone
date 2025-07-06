import { high1, high2, high3, high4, high5, high6 } from "../utils";


import {
  blackImg,
  dessertImg,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ['Store','Mac','iPad','iPhones', 'Mackbook', 'Tablets'];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "The first iPhone designed",
      "for Apple Intelligence.",
      "Personal, private, powerful."
    ],
    video: high1,
    videoDuration: 5,
  },
  {
    id: 2,
    textLists: [
      "So fast. So fluid.",
      "Get a feel for the all-new",
      "Camera Control."
    ],
    video: high2,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "4K 120 fps Dolby Vision.",
      "4 studio-quality mics.",
      "A Pro studio in your pocket."
    ],
    video: high3,
    videoDuration: 7,
  },
  {
    id: 4,
    textLists: [
      "Our thinnest borders yet — for",
      "even larger displays. Brilliant."
    ],
    video: high4,
    videoDuration: 3,
  },
  {
    id: 5,
    textLists: [
      "All-new A18 Pro chip powers",
      "nrivalled intelligence. And",
      "unprecedented performance."
    ],
    video: high5,
    videoDuration: 7,
  },
  {
    id: 6,
    textLists: [
      "A huge leap in battery life.",
      "Game on."
    ],
    video: high6,
    videoDuration: 3,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Desert Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: dessertImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];
/*
export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];  */