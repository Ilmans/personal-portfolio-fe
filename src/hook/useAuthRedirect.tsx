"use client";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useAuthRedirect(redirectTo, requireLogin) {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();

      if (requireLogin && !session) {
        router.push(redirectTo); // Redirect jika memerlukan login tetapi belum login
      } else if (!requireLogin && session) {
        router.push(redirectTo); // Redirect jika tidak memerlukan login tetapi sudah login
      }
    };

    checkSession();
  }, [requireLogin, redirectTo, router]);
}
