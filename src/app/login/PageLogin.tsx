"use client";
import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import { redirect } from "next/navigation";
import { config } from "../helpers";
import { toast } from "react-toastify";

import useValidateLogin from "../../hook/useValidateLogin";
import { useRouter } from "next/navigation";

function PageLogin() {
  const router = useRouter();
  const isLogin = useValidateLogin();
  useEffect(() => {
    if (isLogin) {
      router.push("/");
    }
  }, [isLogin]);
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const doLogin = async (e) => {
    e.preventDefault();
    if (!data.username || !data.password) {
      toast.error("Please input valid data");
      return;
    }
    fetch(config.BACKEND_URL + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if ("errors" in res) {
          toast.error(res.errors);
          return;
        }

        // distpatch(logIn(res.data));
        if (typeof window !== undefined) {
          localStorage.setItem("token", res.data.token);
        }
        toast.success("login success, will redirect in one second");
        setTimeout(() => {
          router.push("/manage/articles");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);

        toast.error("Something went wrong");
      });
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="w-2/5 p-4 mt-32 border border-teal-300 rounded-lg h-fit">
        <h2 className="my-2 font-semibold">Login Here</h2>
        <div className="w-full space-y-4">
          <Input
            value={data.username}
            onChange={(e) => {
              setData({ ...data, username: e.target.value });
            }}
            placeholder="username"
            type="text"
            name="username"
          />
          <Input
            value={data.password}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
            placeholder="password"
            type="password"
            name="password"
          />
          <button
            onClick={doLogin}
            className="w-full py-1 text-center text-white bg-teal-300 rounded-lg">
            login
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageLogin;
