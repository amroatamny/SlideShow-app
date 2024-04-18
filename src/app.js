import "./routes/links.js";
import renderSlider from "./pictures/components/renderSlider.js";
import "./pictures/models/Picture.js";
import "./users/models/User.js";
import initialData from "./initial-data/initialData.js";
import {
  removeToken,
  setToken,
  getUser,
} from "./users/services/localStorageService.js";
// import "./pictures/services/pictureService.js";
// import "./users/services/userService.js";
window.pictures = initialData().pictures;
renderSlider(pictures, 0);
window.users = initialData().users;
console.log(pictures);
console.log(users);
