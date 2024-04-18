import Picture from "../pictures/models/Picture.js";
import User from "../users/models/User.js";
const initialData = () => {
  const database = {
    pictures: [
      {
        url: "https://cdn.pixabay.com/photo/2023/07/17/13/50/baby-snow-leopard-8132690_1280.jpg",
        alt: "chita",
        credits: "amro the nigger",
        price: 1_000,
        user_id: "123321",
      },
      {
        url: "https://cdn.pixabay.com/photo/2017/12/10/15/16/white-horse-3010129_1280.jpg",
        alt: "horse",
        credits: "bode fat ass",
        price: 2_000,
        user_id: "123321",
      },
      {
        url: "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg",
        alt: "cat",
        credits: "malek the fucker",
        price: 3_000,
        user_id: "123321",
      },
    ],
    users: [
      {
        email: "admin@gmai.com",
        password: "Aa213!!aabbdd",
        address: {
          state: "usa",
          country: "LAa",
          city: "LAa",
          street: "stripWay",
          houseNumber: 1,
          zip: 123,
        },
        phone: "0503922297",
        name: {
          first: "amro",
          last: "atamny",
        },

        isAdmin: true,
        isBusiness: true,
      },
      {
        email: "admin@gmai.com",
        password: "Aa213!!aabbdd",
        address: {
          state: "usa",
          country: "LAa",
          city: "LAa",
          street: "stripWay",
          houseNumber: 1,
          zip: 123,
        },
        phone: "0503922297",
        name: {
          first: "amro",
          last: "atamny",
        },

        isAdmin: true,
        isBusiness: true,
      },
      {
        email: "admin@gmai.com",
        password: "Aa213!!aabbdd",
        address: {
          state: "usa",
          country: "LAa",
          city: "LAa",
          street: "stripWay",
          houseNumber: 1,
          zip: 123,
        },
        phone: "0503922297",
        name: {
          first: "amro",
          last: "atamny",
        },

        isAdmin: true,
        isBusiness: true,
      },
    ],
  };
  try {
    const pictures = database.pictures.map((picture, index, pictures) => {
      return new Picture(picture, pictures);
    });

    const users = database.users.map((user) => new User(user, []));

    return { pictures, users };
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
export default initialData;
