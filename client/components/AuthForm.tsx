"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import useRequest from "../hooks/use-request";

interface AuthFormProps {
  title: string;
  buttonText: string;
  url: string;
  onSuccess: () => void;
}

const AuthForm = ({ title, buttonText, url, onSuccess }: AuthFormProps) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { doRequest, errors } = useRequest({
    url,
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => {
      if (onSuccess) {
        onSuccess();
        router.refresh();
      } else {
        router.push("/");
      }
    },
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>{title}</h1>

      <div className="form-group">
        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>

      {errors}

      <button className="btn btn-primary">{buttonText}</button>
    </form>
  );
};

export default AuthForm;
