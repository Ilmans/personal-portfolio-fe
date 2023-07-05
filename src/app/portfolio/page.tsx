import React from "react";
import Jumbotron from "../../components/Jumbotron";
import PagePortfolio from "./PagePortfolio";

function page() {
  return (
    <div className="lg:w-5/7 ">
      <Jumbotron
        title={
          "Berbagai hal yang telah saya buat untuk meninggalkan jejak di dunia programming. "
        }
        description="Saya telah bekerja pada banyak proyek kecil selama bertahun-tahun, tetapi daftar daftar ini yang ingin saya tampilkan."
      />
      <PagePortfolio />
    </div>
  );
}

export default page;
