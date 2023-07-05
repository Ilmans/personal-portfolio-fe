import jwt from "jsonwebtoken";

const ValidateToken = () => {
  // Ambil token dari local storage
  const token: any = localStorage.getItem("token"); // Ubah 'token' dengan kunci penyimpanan yang sesuai
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
