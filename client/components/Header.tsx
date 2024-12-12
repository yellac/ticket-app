"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  currentUser: { id: string; email: string; iat: number } | null;
}

const Header: React.FC<HeaderProps> = function ({ currentUser }) {
  const links = [
    !currentUser && { label: "Sign Up", href: "/auth/signup" },
    !currentUser && { label: "Sign In", href: "/auth/signin" },
    currentUser && { label: "Sign Out", href: "/auth/signout" },
  ]
    .filter((linkConfig): linkConfig is { label: string; href: string } =>
      Boolean(linkConfig)
    )
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link href={href} className="nav-link">
            {label}
          </Link>
        </li>
      );
    });

  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" href="/">
        <Image
          className="ms-3 me-2"
          src="/img/tickets.svg"
          width={30}
          height={30}
          alt="Ticketing"
        />
        Ticketing
      </Link>

      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  );
};

export default Header;
