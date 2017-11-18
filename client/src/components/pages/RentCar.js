import React, { Component } from "react";
import CarCard from "../modules/Car Rent/CarCard";
export default class RentCar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <CarCard
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/2014_Honda_Jazz_%28GK5_MY15%29_VTi-L_hatchback_%282016-01-04%29_01.jpg/1200px-2014_Honda_Jazz_%28GK5_MY15%29_VTi-L_hatchback_%282016-01-04%29_01.jpg"
            title="Honda Jazz"
            tipe="Jazz"
            merk="Honda"
            transmisi="Automatic"
            tahun="2015"
            kapasitas="5 "
            harga="Rp 150.000"
            alamat="Jalan Kaliurang KM 5"
          />
          <CarCard
            image="http://assets.autobild.co.id/media/article_image/cover/original/12495-pesanan-toyota-kijang-innova-baru-didominasi-warna-hitam-dan-putih.jpg"
            title="Kijang Innova"
            tipe="Innova"
            merk="Toyota"
            transmisi="Manual"
            tahun="2016"
            kapasitas="7 "
            harga="Rp 250.000"
            alamat="Jalan Imogiri"
          />
          <CarCard
            title="Toyota Fortuner"
            image="http://www.modifikasi.com/pb/s-i1342/f-albums/o764/hero889988/fort01_zpsa8721a86.jpg"
            tipe="Fortuner"
            merk="Toyota"
            transmisi="Automatic"
            tahun="2012"
            kapasitas="7 "
            harga="Rp 350.000"
            alamat="Jalan Prawirotaman"
          />
          <CarCard
            title="Toyota Vellfire"
            image="https://img1.icarcdn.com/1853013/gallery_new-car-carlist-toyota-vellfire-mpv-malaysia_1853013_cd4676397390934878074_v1sm.jpg?smia=xTM"
            tipe="Vellfire"
            merk="Toyota"
            transmisi="Automatic"
            tahun="2015"
            kapasitas="8"
            harga="Rp 450.000"
            alamat="Jalan R.E Martadinata"
          />
          <CarCard
            title="Honda Jazz"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/2014_Honda_Jazz_%28GK5_MY15%29_VTi-L_hatchback_%282016-01-04%29_01.jpg/1200px-2014_Honda_Jazz_%28GK5_MY15%29_VTi-L_hatchback_%282016-01-04%29_01.jpg"
          />
        </div>
      </div>
    );
  }
}
