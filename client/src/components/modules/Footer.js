import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="page-footer deep-purple darken-3 lighten-1">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">CarVirde</h5>
                <p class="grey-text text-lighten-4">Your Traveling Solution</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <i className="material-icons">contact_phone</i>
                <h5
                  style={{
                    display: "inline-block",
                    marginLeft: "20px",
                    fontSize: "20px"
                  }}
                  class="white-text"
                >
                  087877643416
                </h5>
                <ul>
                  {/*  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Link 4
                    </a>
                  </li>
                  */}
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
              © 2017 CarVirde
              <a class="grey-text text-lighten-4 right" href="#!">
                More Links
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
