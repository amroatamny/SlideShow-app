import {
  SLIDER_IMAGE,
  SLIDER_CREDITS,
  SLIDER_PRIV_BTN,
  SLIDER_NEXT_BTN,
} from "../../services/domService.js";

// const renderSlider = (pictures, num = 0) => {
//   if (!pictures.length) return null;
//   SLIDER_IMAGE.src = pictures[num].url;
//   SLIDER_IMAGE.alt = pictures[num].alt;
//   SLIDER_CREDITS.innerHTML = pictures[num].credits;
//   return;
// };
const renderSlider = (pictures, num = 0) => {
  if (!pictures.length) return null;
  SLIDER_IMAGE.src = pictures[num].url;
  SLIDER_IMAGE.alt = pictures[num].alt;
  SLIDER_CREDITS.innerHTML = pictures[num].credits;
  return;
};
export default renderSlider;
