import mongoose, { Schema, Document, Model } from "mongoose";

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

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
