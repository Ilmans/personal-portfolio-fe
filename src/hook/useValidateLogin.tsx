import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";

const useValidateLogin = () => {
  // Ambil token dari local storage
  const [isTokenValid, setIsTokenValid] = useState(false);

  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null; // Ubah 'token' dengan kunci penyimpanan yang sesuai

    if (token) {
      try {
        const decoded = jwt.decode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp >= currentTime) {
          setIsTokenValid(true);
        }
      } catch (error) {
        setIsTokenValid(false);
      }
    } else {
      setIsTokenValid(false);
    }
  }, []);

  return isTokenValid;
};

export default useValidateLogin;
