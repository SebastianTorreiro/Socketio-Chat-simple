import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Message", schema);
