import PAGES from "./pageModel.js";
import {
  HOME_PAGE_LINK,
  ABOUT_PAGE_LINK,
  CREATE_PIC_PAGE_LINK,
  LOGIN_PAGE_LINK,
  SIGNUP_PAGE_LINK,
  RETURN_TO_HOME_PAGE_LINK,
} from "../services/domService.js";
import { onChangePage } from "./router.js";
import { createPicture } from "../pictures/services/pictureService.js";
import { login, signup } from "../users/services/userService.js";
/********* events  *********/
HOME_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ABOUT));
CREATE_PIC_PAGE_LINK.addEventListener("click", () => {
  onChangePage(PAGES.CREATPIC);
  createPicture();
});
LOGIN_PAGE_LINK.addEventListener("click", () => {
  onChangePage(PAGES.LOGIN);
  login();
});
SIGNUP_PAGE_LINK.addEventListener("click", () => {
  onChangePage(PAGES.SIGNUP);
  signup();
});
RETURN_TO_HOME_PAGE_LINK.addEventListener("click", () =>
  onChangePage(PAGES.HOME)
);
