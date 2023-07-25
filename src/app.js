import "./routes/links.js";
import setCounter from "./pictures/helpers/setCounter.js";
import renderSlider from "./pictures/components/renderSlider.js";

const pictures = [
  {
    url: "https://cdn.pixabay.com/photo/2023/07/17/13/50/baby-snow-leopard-8132690_1280.jpg",
    alt: "chita",
    credits: "amro the nigger",
  },
  {
    url: "https://cdn.pixabay.com/photo/2017/12/10/15/16/white-horse-3010129_1280.jpg",
    alt: "horse",
    credits: "bode fat ass",
  },
  {
    url: "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg",
    alt: "cat",
    credits: "malek the fucker",
  },
];
let counter = 0;
counter = setCounter(pictures, counter);
counter = setCounter(pictures, counter, "next");
counter = setCounter(pictures, counter, "next");

renderSlider(pictures, counter);
