import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sneha",
    lastName: "bhaise",
    email: "snehabhaise@gmail.com",
    password: "sneha123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }, {
    _id: uuid(),
    firstName: "Sunaina",
    lastName: "shakeel",
    email: "sunainashakeel@gmail.com",
    password: "sunaina123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
