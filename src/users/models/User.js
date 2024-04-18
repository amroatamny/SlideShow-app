import {
  generateUniqId,
  makeEveryFirstLetterCapital,
} from "../../utils/algoMethods.js";
import { EMAIL_REGEX, PASSWORD_REGEX, PHONE_REGEX } from "../../utils/regex.js";
class User {
  #id;
  #name;
  #address;
  #phone;
  #email;
  #password;
  #createdAt;
  #isAdmin;
  #isBusiness;

  constructor(user, users = []) {
    const { address, phone, name, password, email, isAdmin, isBusiness } = user;

    this.#address = this.checkAddress(address);
    this.#phone = this.checkPhone(phone);
    this.#id = generateUniqId(users, 1_000_000, 9_999_999);
    this.#name = this.setName(name);
    this.#password = this.checkPassword(password);
    this.#email = this.checkUniqEmail(email, users);
    this.#createdAt = new Date();

    this.#isAdmin = isAdmin || false;
    this.#isBusiness = isBusiness || false;
  }

  setName({ first, last }) {
    if (
      typeof first !== "string" ||
      typeof last !== "string" ||
      first.length < 2 ||
      last.length < 2
    )
      throw new Error("please enter valid name!");
    return {
      first: makeEveryFirstLetterCapital(first),
      last: makeEveryFirstLetterCapital(last),
    };
  }

  checkPhone(phone) {
    const regex = PHONE_REGEX;
    const isExist = phone.match(regex);
    if (!isExist) throw new Error("please inter a valid phone number!!");
    return phone;
  }
  checkPassword(password) {
    const regex = PASSWORD_REGEX;
    const isExist = password.match(regex);
    if (!isExist)
      throw new Error(
        "The password must contain at least one uppercase letter in English. One lowercase letter in English. Four numbers and one of the following special characters !@#$%^&*-"
      );
    return password;
  }

  checkUniqEmail(email, users) {
    // if (!email) throw new Error("");
    const regex = EMAIL_REGEX;
    const isExist = email.match(regex);
    if (!isExist) throw new Error("please enter a valid email address");

    const user = users.findIndex((user) => user.email === email);
    if (user !== -1) throw new Error("user is already registered");

    return email;
  }
  // checkAddress(address) {
  //   const { state, country, city, street, houseNumber, zip } = address;
  //   if (
  //     country.length < 2 ||
  //     city.length < 2 ||
  //     street.length < 2 ||
  //     typeof houseNumber !== "number" ||
  //     houseNumber <= 0 ||
  //     typeof zip !== "number" ||
  //     zip <= 0
  //   )
  //     throw new Error("please enter a valid address");

  //   return { state: state || "", country, city, street, houseNumber, zip };
  // }
  checkAddress(address) {
    if (address.length < 2) throw new Error("please enter a valid address");
    return address;
  }

  changeBizStatus(user) {
    if (user._id !== this.#id && !user.isAdmin)
      throw new Error("user must be the registered user or admin");
    this.#isBusiness = !this.isBusiness;
  }
  update(user, users) {
    if (typeof user !== "object") throw new Error("please enter valid user!");
    if (user._id !== this.#id)
      throw new Error("only the registered user can edit his info!!");
    const { address, phone, name, email, isBusiness } = user;
    this.#name = this.setName(name);
    this.#address = this.checkAddress(address);
    this.#phone = this.checkPhone(phone);
    this.#email =
      email === this.#email ? this.#email : this.checkUniqEmail(email, users);
    this.#isBusiness = isBusiness ? isBusiness : this.#isBusiness;
    return this;
  }
  static findOneAndUpdate(user, users) {
    if (typeof user !== "object")
      throw new Error("please enter a valid user !");
    if (Array.isArray(users) !== true || !users.length)
      throw new Error("please enter array of users");

    const userInArray = users.find((item) => item._id === user._id);
    if (!userInArray) throw new Error("this user is not in the database!!");

    const { address, phone, name, email, isBusiness } = user;
    userInArray.#name = userInArray.setName(name);
    userInArray.#phone = userInArray.checkPhone(phone);
    userInArray.#address = userInArray.checkAddress(address);
    userInArray.#email =
      email === userInArray.#email
        ? userInArray.#email
        : userInArray.checkUniqEmail(email, users);
    userInArray.#isBusiness = isBusiness ? isBusiness : userInArray.#isBusiness;
    return user;
  }
  changePassword() {}

  get _id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }
  get email() {
    return this.#email;
  }
  get password() {
    return this.#password;
  }
  get createdAt() {
    return this.#createdAt;
  }
  get isAdmin() {
    return this.#isAdmin;
  }
  get isBusiness() {
    return this.#isBusiness;
  }
  get phone() {
    return this.#phone;
  }
  get address() {
    return this.#address;
  }
}
export default User;
// const test = {
//   id: "123456",
//   address: {
//     state: "usa",
//     country: "LAa",
//     city: "LAa",
//     street: "stripWay",
//     houseNumber: 1,
//     zip: 123,
//   },
//   phone: "0503922297",
//   name: {
//     first: "amro",
//     last: "atamny",
//   },
//   password: "Aa1234!",
//   email: "test@gmai.com",
// };

// try {
//   const user = new User(test);
//   // console.log(user);
//   // user.update(
//   //   {
//   //     _id: user._id,
//   //     name: { first: "malek", last: "atamna" },
//   //     phone: "050123321",
//   //     address: {
//   //       state: "",
//   //       country: "palastine",
//   //       city: "baqa",
//   //       street: "alazdhar",
//   //       houseNumber: 33,
//   //       zip: 301000,
//   //     },
//   //     email: "walla@gmail.com",
//   //   },
//   //   array
//   // );
// const userToUpdate = {
//   _id: user._id,
//   name: { first: "malek", last: "atamna" },
//   phone: "0509933992",
//   address: {
//     state: "",
//     country: "palastine",
//     city: "hifa",
//     street: "al3odh",
//     houseNumber: 3,
//     zip: 2123,
//   },
//   email: "nigga@gmail.com",
// };
//   const array = [user];
//   User.findOneAndUpdate(userToUpdate, array);
//   // user.changeBizStatus(user);
//   console.log(array);
// } catch (error) {
//   console.log(error.message);
// }
