"use client";
import React, { useState } from "react";
import Input from "../../components/Input";
import { usePathname, useRouter } from "next/navigation";
import { logIn } from "../../redux/features/auth-slice";
import { useAuthRedirect } from "../../hook/useAuthRedirect";
import { config } from "../helpers";
import { useDispatch } from "react-redux";

function page() {
  useAuthRedirect("/", false);
   const router = useRouter();
   const distpatch = useDispatch();

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const doLogin = async (e) => {
    e.preventDefault();
    if (!data.username || !data.password) {
      alert("Please input valid data");
      return;
    }
    fetch(config.BACKEND_URL + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        distpatch(logIn(res.data));
        console.log(res);

        // router.push("/manage/articles");
      })
      .catch((err) => {
        console.log(err);

        alert("something went wrong");
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

export default page;
