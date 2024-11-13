import request from "supertest";
import { app } from "../../app";

it("fails when an email that does not exist is supplied", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(400);
});

it("fails when incorrect password is supplied", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "incorrectPassword",
    })
    .expect(400);
});

it("responds with a cookie when a given valid credentials", async () => {
  const cookie = await global.signup();

  if (!cookie) {
    throw new Error("cookie not set after signup");
  }
  const response = await request(app)
    .post("/api/users/signin")
    .set("Cookie", cookie)
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined();
});
