import mongoose, { Schema, Document, Model } from "mongoose";

import { Password } from "../services/password";

// Type for User attributes required for creation
type UserAttrs = {
  email: string;
  password: string;
};

// Type for User Document
type UserDoc = Document & UserAttrs;

// Interface for User Model with static methods
interface UserModel extends Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    // When serializing a document from this schema (e.g. JSON.stringify()),
    // the returned JSON will follow the transformed structure instead
    toJSON: {
      versionKey: false, // delete ret.__v
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  // Only hash the password if it has been modified
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  next();
});

// For TypeScript to figure out the attrs types
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
