"use client";

import React from "react";

import AuthForm from "../../../components/AuthForm";

export default function SignUp() {
  return (
    <AuthForm
      title="Sign Up"
      buttonText="Sign Up"
      url="/api/users/signup"
      onSuccess={() => {}}
    />
  );
}
