import {
  SLIDER_IMAGE,
  SLIDER_CREDITS,
  SLIDER_PRIV_BTN,
  SLIDER_NEXT_BTN,
} from "../../services/domService.js";
import onChangeSliderPic from "../helpers/onChangeSliderPic.js";

let counter = 0;

const renderSlider = (pictures, num = 0) => {
  if (!pictures.length) return null;
  SLIDER_IMAGE.src = pictures[num].url;
  SLIDER_IMAGE.alt = pictures[num].alt;
  SLIDER_CREDITS.innerHTML = pictures[num].credits;
  return;
};

SLIDER_NEXT_BTN.addEventListener(
  "click",
  () => (counter = onChangeSliderPic(pictures, counter, "next"))
);
SLIDER_PRIV_BTN.addEventListener(
  "click",
  () => (counter = onChangeSliderPic(pictures, counter, "prev"))
);

export default renderSlider;
