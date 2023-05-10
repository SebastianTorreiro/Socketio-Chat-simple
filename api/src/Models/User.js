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
    messageWith: [{
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      lastMessage: {
        type: Schema.Types.ObjectId,
        ref: 'Message'
      }
    }]
  },
  {
    timestamps: true,
  }
);

export default model("User", schema);
