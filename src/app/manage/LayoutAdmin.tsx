"use client";

import React, { useEffect } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import useValidateLogin from "../../hook/useValidateLogin";
import { useRouter } from "next/navigation";

function LayoutAdmin({ children }) {
  const router = useRouter();
  const isLogin = useValidateLogin();

  useEffect(() => {
    if (isLogin === isLogin) {
      return;
    }
    if (!isLogin) {
      router.push("/login");
    }
  }, [isLogin]);
  return (
    <main className="flex p-4 gap-x-12">
      {/* <CheckLogin /> */}
      <Sidebar />
      <div className="w-3/4">{children}</div>
    </main>
  );
}

export default LayoutAdmin;
