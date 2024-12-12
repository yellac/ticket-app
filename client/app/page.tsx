import React from "react";

import buildClient from "../api/build-client";

// Server Component for data fetching
async function getCurrentUser() {
  const client = await buildClient();
  try {
    const { data } = await client.get("/api/users/currentuser");
    return data;
  } catch (err) {
    console.log("Error fetching current user", err);
    return { currentUser: null };
  }
}

export default async function HomePage() {
  const { currentUser } = await getCurrentUser();

  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  );
}
