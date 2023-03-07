import { Schema, model, models } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    parentFirst: {
      type: String,
      required: true,
    },
    parentLast: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    homework: [
      {
        type: String,
        required: false,
      },
    ],
    products: [
      {
        type: String,
        required: false,
      },
    ],
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;
