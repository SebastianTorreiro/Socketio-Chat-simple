import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userFrom: {
      type: String,
    },
    userTarget: {
      type: String,
    },
    // userTarget: {
    //   type: String,
    // },
  },
  {
    timestamps: true,
  }
);

export default model("Message", schema);
