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
  #isAdmin = false;
  #isBusiness = false;

  constructor(user, users = []) {
    const { address, phone, name, password, email } = user;
    const { state, country, city, street, houseNumber, zip } = address;
    this.address = { state, country, city, street, houseNumber, zip };
    this.#phone = this.checkPhone(phone);
    this.#id = generateUniqId(users, 1_000_000, 9_999_999);
    this.#name = this.setName(name);
    this.#createdAt = new Date();
    this.#password = this.checkPassword(password);
    this.#email = this.checkUniqEmail(email, users);
  }

  setName({ first, last }) {
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
    const isExist = regex.test(password);
    if (!isExist)
      throw new Error(
        "The password must contain at least one uppercase letter in English. One lowercase letter in English. Four numbers and one of the following special characters !@#$%^&*-"
      );
    return password;
  }

  changeBizStatus(user) {
    if (user._id !== this.#id || !user.isAdmin)
      throw new Error("user must be the registered user or admin");
    this.#isBusiness = !this.isBusiness;
  }
  checkUniqEmail(email, users) {
    // if (!email) throw new Error("");
    const regex = EMAIL_REGEX;
    const isExist = regex.test(email);
    if (!isExist) throw new Error("please enter a valid email address");

    const user = users.findIndex((user) => user.email === email);
    if (user !== -1) throw new Error("user is already registered");

    return email;
  }

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
  // get address() {
  //   return this.#address;
  // }
}
export default User;
const test = {
  address: {
    state: "usa",
    country: "LA",
    city: "LA",
    street: "stripWay",
    houseNumber: 4,
    zip: "132",
  },
  phone: "0503922297",
  name: {
    first: "amro",
    last: "atamny",
  },
  password: "Aa1234!",
  email: "test@gmai.com",
};
const array = [test];
try {
  const user = new User(test);
  console.log(user);
} catch (error) {
  console.log(error.message);
}
