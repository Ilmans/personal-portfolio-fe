"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { RootState, store, useAppSelector } from "../redux/store";
import { useSelector } from "react-redux";
import jwt from "jsonwebtoken";
import { auth, logOut } from "../redux/features/auth-slice";

const isTokenExpired = (token) => {
  // Mendekode token JWT
  const decodeToken = (token) => {
    try {
      const decoded = jwt.decode(token);
      return decoded;
    } catch (error) {
      console.error("Gagal mendekode token:", error);
      return null;
    }
  };

  // Mengambil waktu kedaluwarsa dari payload token
  const getExpirationTime = (decodedToken) => {
    if (decodedToken && decodedToken.exp) {
      return decodedToken.exp * 1000; // Mengonversi waktu kedaluwarsa dari detik menjadi milidetik
    }
    return null;
  };

  // Melakukan pengecekan waktu kedaluwarsa dan mengembalikan nilai boolean
  const checkExpirationAndAutologout = (token) => {
    const decodedToken = decodeToken(token);

    const expirationTime = getExpirationTime(decodedToken);

    if (expirationTime && Date.now() > expirationTime) {
      store.dispatch(logOut());
      return true; // Token sudah kedaluwarsa
    }
    return false; // Token masih berlaku
  };

  // Memeriksa waktu kedaluwarsa saat fungsi dipanggil
  return checkExpirationAndAutologout(token);
};

export function useAuthRedirect(redirectTo, requireLogin) {
  const router = useRouter();

  const isAuth = useSelector<RootState>(
    (state: any) => state.auth.value.isAuth
  );

  const token = useSelector<RootState>(
    (state: any) => state.auth.value.user?.token
  );

  const auntheticated = isAuth && !isTokenExpired(token);
  if (requireLogin && !auntheticated) {
    router.push(redirectTo); // Redirect jika memerlukan login tetapi belum login
  } else if (!requireLogin && auntheticated) {
    router.push(redirectTo); // Redirect jika tidak memerlukan login tetapi sudah login
  }
}
