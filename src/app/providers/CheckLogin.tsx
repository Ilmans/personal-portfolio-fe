"use client";
import { useAuthRedirect } from "../../hook/useAuthRedirect";

function CheckLogin() {
  useAuthRedirect("/login", true);
  return <></>;
}

export default CheckLogin;
