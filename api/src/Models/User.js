import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    rol: {
      type: String,
      default: "user",
    },
    age: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model("User", schema);
