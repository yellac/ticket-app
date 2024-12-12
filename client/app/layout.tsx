import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Header from "../components/Header";
import buildClient from "../api/build-client";

// Force dynamic rendering, so that the currentUser is updated on every request
export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

  const { currentUser } = await getCurrentUser();

  return (
    <html lang="en">
      <body>
        <Header currentUser={currentUser} />
        <main className="container">{children}</main>
        <footer>Global Footer</footer>
      </body>
    </html>
  );
}
