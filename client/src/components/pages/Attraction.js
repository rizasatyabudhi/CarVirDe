import React, { Component } from "react";
import AttractionCard from "../modules/Attraction/AttractionCard";

export default class Attraction extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <AttractionCard />
          <AttractionCard />
          <AttractionCard />
          <AttractionCard />
          <AttractionCard />
          <AttractionCard />
        </div>
      </div>
    );
  }
}
