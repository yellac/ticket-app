"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import useRequest from "../../../hooks/use-request";

export default function SignOut() {
  const router = useRouter();

  const { doRequest } = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => {
      router.push("/");
      // Manually refresh the page as redirecting from one page to
      // another in app does not rerender Header component
      router.refresh();
    },
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing out...</div>;
}
