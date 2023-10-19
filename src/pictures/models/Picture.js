import { generateUniqId } from "../../utils/algoMethods.js";

class Picture {
  #id;
  url;
  alt;
  credits;
  #price;
  #createdAt;
  like = [];
  category;
  #user_id;

  constructor(picture, pictures = []) {
    const { url, alt, credits, price, category, user_id } = picture;
    if (!url || !alt || !credits || !price || !user_id)
      throw new Error("in  error !!!!");

    this.#id = generateUniqId(pictures, 1_000_000, 9_999_999);
    this.credits = credits;
    this.#price = price;
    this.category = category || "";
    this.#user_id = user_id;
    this.#createdAt = new Date();
  }

  get _id() {
    return this.#id;
  }
  get createdAt() {
    return this.#createdAt;
  }
  get price() {
    return this.#price;
  }
  //   set price({ newPrice, user }) {
  //     if (user._id !== this.#user_id)
  //       throw new Error("only user that made the card can change it's price");
  //     this.#price = newPrice;
  //   }
  get user_id() {
    return this.#user_id;
  }
}

export default Picture;

// try {
//   const pic = new Picture({
//     url: "ff",
//     alt: "dd",
//     credits: "ss",
//     price: 5000,
//     user_id: "123432dd123",
//   });
//   console.log(pic);
// } catch (error) {
//   error.status = 400;
//   console.log(error.message);
//   console.log(error.status);
// }
