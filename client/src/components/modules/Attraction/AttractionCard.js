import React, { Component } from "react";
import { datepickerTimesheet } from "../Datepicker";
// export default class AttractionCard extends Component {
//   render() {
//     return (
//       <div class="col s4">
//         <div class="card">
//           <div class="card-image">
//             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/2014_Honda_Jazz_%28GK5_MY15%29_VTi-L_hatchback_%282016-01-04%29_01.jpg/1200px-2014_Honda_Jazz_%28GK5_MY15%29_VTi-L_hatchback_%282016-01-04%29_01.jpg" />
//           </div>
//           <div class="card-content">
//             <p>
//               I am a very simple card. I am good at containing small bits of
//               information. I am convenient because I require little markup to
//               use effectively.
//             </p>
//           </div>
//           <div class="card-action">
//             <a href="#">This is a link</a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default class AttractionCard extends Component {
  render() {
    return (
      <div class="col s12">
        <div class="card horizontal hoverable">
          <div class="card-image large">
            <img
              src="https://www.whitewaterwest.com/drive/uploads/2016/08/Waterbom-Bali-Kuta-Bali.jpg"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <h5>Jogja Bay Waterpark</h5>
              <div className="row">
                <div className="col s6">
                  <ul>
                    <li>
                      <i className="material-icons">location_on</i> Depok
                    </li>
                    <li>
                      <i className="material-icons">attach_money</i> Rp 50.000
                      /Pax
                    </li>
                  </ul>
                </div>
                <div className="col s12 paragraph">
                  Have a fun-filled day at European thematic water park with
                  family and friends Enjoy your holiday with exciting rides and
                  educational program that are suitable for all ages Get some
                  information on 'How to survive in Tsunami and earthquake' in
                  South Beach pool Show your Traveloka E-ticket for hassle-free
                  experience The best place to cool down in this scorching hot
                  weather together with your family and loved ones is definitely
                  at Jogja Bay Waterpark, a 7-hectare pirates-themed waterpark
                  with a lot of exciting attractions and rides! Pump your
                  adrenaline with exciting rides such as Memo Racer, Volcano
                  Coaster, Time Rider, and South Beach or just relax in family
                  rides such as Donte Wild River and other several children
                  water rides
                </div>
              </div>
            </div>

            <div class="card-action">
              <button
                class="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Add to Cart
                <i class="material-icons right">add_shopping_cart</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
