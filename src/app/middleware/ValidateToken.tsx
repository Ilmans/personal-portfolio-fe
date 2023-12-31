import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";

const ValidateToken = () => {
  // Ambil token dari local storage
  const [token, setToken] = useState(null);
  useEffect(() => {
    const token: any =
      typeof window !== undefined ? localStorage.getItem("token") : null; // Ubah 'token' dengan kunci penyimpanan yang sesuai
    setToken(token);
  }, []);

  // Jika token tidak ditemukan atau kosong, pengguna dianggap tidak login

  if (!token) {
    return false;
  }

  try {
    // Decode token menggunakan library jwt-decode

    const decoded: any = jwt.decode(token);
    // Periksa apakah token telah kadaluarsa
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Token telah kadaluarsa
      return false;
    }

    // Token masih valid
    return true;
  } catch (error) {
    // Terjadi kesalahan dalam memecahkan token, pengguna dianggap tidak login
    return false;
  }
};

export default ValidateToken;
