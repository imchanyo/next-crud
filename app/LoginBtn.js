"use client";
import { signIn, signOut } from "next-auth/react";

const LoginBtn = ({ user }) => {
  console.log(user);
  return user ? (
    <>
      <div>{user.user.name}</div>
      <button
        onClick={() => {
          signOut();
        }}
      >
        로그아웃{" "}
      </button>
    </>
  ) : (
    <button
      onClick={() => {
        signIn();
      }}
    >
      로그인{" "}
    </button>
  );
};

export default LoginBtn;
