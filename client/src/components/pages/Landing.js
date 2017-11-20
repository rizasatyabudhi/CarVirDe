import React, { Component } from "react";
import OrientationExample from "../modules/Datepicker";

export default class componentName extends Component {
  render() {
    return (
      <div>
        <header class="v-header containerz">
          <div class="fullscreen-video-wrap">
            <video
              src="https://www.videvo.net/videvo_files/converted/2017_08/preview/170728_Berlin_C_029.mp485255.webm"
              autoplay=""
              loop
            />
          </div>
          <div class="header-overlay" />
          <div class="header-content center" style={{ margin: "0 auto" }}>
            <h1 style={{ fontSize: "180px" }}>CarVirde</h1>
            <p style={{ fontSize: "30px", margin: "0" }}>
              Your Traveling Solution
            </p>
          </div>
        </header>

        <section class="sections section-a">
          <div class="container">
            <p>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
              impedit amet minima iste autem cumque et maiores blanditiis
              doloribus aut dolorum quaerat non est voluptatum, tempore ut
              dolorem voluptas quod quae accusantium, ex inventore ducimus.
              Beatae mollitia exercitationem, quam similique, consectetur
              ratione reprehenderit delectus neque eligendi facere soluta dolor
              ducimus!
            </p>
          </div>
        </section>

        <section class="section section-b">
          <div class="container">
            <div className="row">
              <div className="col s3 center-align">
                <div className="col s12 center-align">
                  <i className="material-icons large">directions_car</i>
                </div>
                Kami menyediakan Mobil-Mobil dengan performa dan gaya terbaik
                untuk menemani Perjalanan anda
              </div>
              <div className="col s3 center-align">
                <div className="col s12 center-align">
                  <i className="material-icons large">beach_access</i>
                </div>
                Kami menyediakan Perjalanan terbaik yang akan menjadi momen
                berharga tak terlupakan untuk anda
              </div>
              <div className="col s3 center-align">
                <div className="col s12 center-align">
                  <i className="material-icons large">attach_money</i>
                </div>
                Kami menyediakan Penawaran harga terbaik dan sesuai dengan
                keinginan anda pelayanan
              </div>
              <div className="col s3 center-align">
                <div className="col s12 center-align">
                  <i className="material-icons large">mood</i>
                </div>
                Kami menyerahkan pilihan 100% kepada anda. kenyamanan dalam
                perjalanan anda adalah prioritas kami
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
