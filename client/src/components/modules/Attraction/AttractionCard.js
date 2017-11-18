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
                    <li>
                      <i className="material-icons">attach_money</i>
                    </li>
                  </ul>
                </div>
                <div className="col s6">
                  <datepickerTimesheet />
                </div>
              </div>
            </div>

            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
