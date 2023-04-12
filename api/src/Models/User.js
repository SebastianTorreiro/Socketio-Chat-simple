import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    fullName: {
        type: String
        },
    email: { 
        type: String
     },
    passwordHash: {
        type: String
    },
    rol: { 
        type: String,
        default: "user" 
    },
  },
  {
    timestamps: true,
  }
);

export default model("Note", schema);
