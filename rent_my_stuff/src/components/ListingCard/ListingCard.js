import React from "react";
import "./ListingCard.css";

class ListingCard extends React.Component {
    render() {
        <div class="col-sm-4 col-xs-12">
            <div class="panel panel text-center">
                <div>
                    <h4 class="cut-text"></h4>
                </div>
                <div class="panel-body">
                    <img style="height: 225px; width: 90%; border: 2px solid #F19F4D;"  alt="..." />
                </div>
                <div class="panel-footer">
                    <h3></h3>
                    <h4>(PER DAY)</h4>
                    <a href="/iteminfo1/{{this.id}}" ><button class="btn btn-lg">View Listing</button></a>

                </div>
            </div>
        </div>
    }
}