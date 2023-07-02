"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { RootState, useAppSelector } from "../redux/store";
import { useSelector } from "react-redux";

export function useAuthRedirect(redirectTo, requireLogin) {
  const router = useRouter();

  const auntheticated = useSelector<RootState>(
    (state: any) => state.auth.value.isAuth
  );

  if (requireLogin && !auntheticated) {
    router.push(redirectTo); // Redirect jika memerlukan login tetapi belum login
  } else if (!requireLogin && auntheticated) {
    router.push(redirectTo); // Redirect jika tidak memerlukan login tetapi sudah login
  }
}
