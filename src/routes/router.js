import PAGES from "../models/pageModel.js";
import {
  HOME_PAGE,
  ABOUT_PAGE,
  CREAT_PIC_PAGE,
  LOGIN_PAGE,
  ERROR404_PAGE,
  SIGNUP_PAGE,
} from "../services/domService.js";

export const onChangePage = (page) => {
  HOME_PAGE.className = "d-none";
  ABOUT_PAGE.className = "d-none";
  CREAT_PIC_PAGE.className = "d-none";
  LOGIN_PAGE.className = "d-none";
  ERROR404_PAGE.className = "d-none";
  SIGNUP_PAGE.className = "d-none";
  if (page === PAGES.HOME) return (HOME_PAGE.className = "d-block");
  if (page === PAGES.ABOUT) return (ABOUT_PAGE.className = "d-block");
  if (page === PAGES.CREATPIC) return (CREAT_PIC_PAGE.className = "d-block");
  if (page === PAGES.LOGIN) return (LOGIN_PAGE.className = "d-block");
  if (page === PAGES.SIGNUP) return (SIGNUP_PAGE.className = "d-block");
  return (ERROR404_PAGE.className = "d-none");
};
