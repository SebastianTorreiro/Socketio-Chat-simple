import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userFrom: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    userTarget: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
  },
  {
    timestamps: true,
  }
);

export default model("Message", schema);
