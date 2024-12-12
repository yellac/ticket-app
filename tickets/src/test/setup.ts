import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import jwt from "jsonwebtoken";

import { app } from "../app";

declare global {
  var signin: () => string[];
}

let mongo: any;

beforeAll(async () => {
  process.env.JWT_KEY = "testkey";

  // This will create a new instance of "MongoMemoryServer" and automatically start it
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
  await mongoose.connect(uri, {});
});

beforeEach(async () => {
  if (mongoose.connection.db) {
    const collections = await mongoose.connection.db.collections();

    for (let collection of collections) {
      await collection.deleteMany({});
    }
  }
});

afterAll(async () => {
  if (mongo) {
    await mongo.stop();
  }
  await mongoose.connection.close();
});

global.signin = () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  // Build a JWT payload. { id, email }
  const payload = {
    id,
    email: "test@test.com",
  };

  // Generate a JWT
  const token = jwt.sign(payload, process.env.JWT_KEY!);

  // Construct the session object. { jwt: MY_JWT }
  const session = { jwt: token };

  // Encode the session data into JSON
  const sessionJSON = JSON.stringify(session);

  // Take JSON and encode it as base64
  const base64 = btoa(sessionJSON);

  // Return a string thats the cookie with the encoded data
  return [`session=${base64}`];
};
