import { Schema, model } from "mongoose";

const cartschema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "product",
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  }
});

const userschema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"]
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "password is required"]
  },
  cart: {
    type: [cartschema],
    default: []
  }
});

export const usermodel = model("user", userschema);
