"use client";

import React from "react";
import { useRouter } from "next/navigation";

import AuthForm from "../../../components/AuthForm";

export default function SignIn() {
  const router = useRouter();
  return (
    <AuthForm
      title="Sign In"
      buttonText="Sign In"
      url="/api/users/signin"
      onSuccess={() => router.push("/")}
    />
  );
}
