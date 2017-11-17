import React, { Component } from "react";
import CarCard from "../modules/Car Rent/CarCard";
export default class RentCar extends Component {
  render() {
    return (
      <div className="row">
        <CarCard
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/2014_Honda_Jazz_%28GK5_MY15%29_VTi-L_hatchback_%282016-01-04%29_01.jpg/1200px-2014_Honda_Jazz_%28GK5_MY15%29_VTi-L_hatchback_%282016-01-04%29_01.jpg"
          title="Honda Jazz"
          tipe="Honda Jazz"
          merk="Honda"
          transmisi="Automatic"
          tahun="2015"
          kapasitas="5 "
          harga="Rp 150.000"
        />
        <CarCard
          className="right-align"
          title="Kijang Innova"
          image="http://assets.autobild.co.id/media/article_image/cover/original/12495-pesanan-toyota-kijang-innova-baru-didominasi-warna-hitam-dan-putih.jpg"
        />
        <CarCard
          title="Honda Jazz"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/2014_Honda_Jazz_%28GK5_MY15%29_VTi-L_hatchback_%282016-01-04%29_01.jpg/1200px-2014_Honda_Jazz_%28GK5_MY15%29_VTi-L_hatchback_%282016-01-04%29_01.jpg"
        />
        <CarCard
          title="Honda Jazz"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/2014_Honda_Jazz_%28GK5_MY15%29_VTi-L_hatchback_%282016-01-04%29_01.jpg/1200px-2014_Honda_Jazz_%28GK5_MY15%29_VTi-L_hatchback_%282016-01-04%29_01.jpg"
        />
        <CarCard
          title="Honda Jazz"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/2014_Honda_Jazz_%28GK5_MY15%29_VTi-L_hatchback_%282016-01-04%29_01.jpg/1200px-2014_Honda_Jazz_%28GK5_MY15%29_VTi-L_hatchback_%282016-01-04%29_01.jpg"
        />
      </div>
    );
  }
}
