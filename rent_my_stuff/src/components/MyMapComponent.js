/*global google*/
import React from 'react';
import  { compose, withProps, lifecycle } from 'recompose';
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps';
import Parser from 'html-react-parser';
import Collapsible from 'react-collapsible';
var origin1;
var origin2;
var destination1;
var destination2;
var routes;


class MyMapComponent extends React.Component {
  // constructor(props){
  //   super(props)
  // }
render() {
  origin1 = this.props.origin1
  origin2 = this.props.origin2
  destination1 = this.props.destination1;
  destination2 = this.props.destination2;

    const DirectionsComponent = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDSMDeXXQxaeLJ4ZGXuwSKAM3NHBP4ckTc",
        loadingElement: <div style={{ height: `400px` }} />,
        containerElement: <div style={{ width: `100%` }} />,
        mapElement: <div style={{height: `295px`, width: `100%` }}  />,
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentDidMount() { 
          const DirectionsService = new google.maps.DirectionsService();
          DirectionsService.route({
            origin: new google.maps.LatLng(destination1, destination2),
            destination: new google.maps.LatLng(origin1, origin2),
            travelMode: google.maps.TravelMode.DRIVING,
          }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              routes = result.routes[0].legs[0]
            this.setState({
                directions: {...result},
                markers: true,
              })
            } else {
              console.error(`error fetching directions ${result}`);
            }

          });
         
        }
      })
    )(props =>
      <GoogleMap defaultZoom={3}>
      <br/>
            <h3>Distance: <b>{routes? routes.distance.text:""}.</b> Duration: <b>{routes? routes.duration.text:""}.</b></h3>

        <Collapsible trigger="Get Direction">
        <ul>
          {routes?routes.steps.map( step => (
            <li key={step.instructions}>{Parser(step.instructions)}{" "}{step.distance.text}{" "}{step.duration.text}</li>
          )):""}
        </ul>
      </Collapsible>

        {props.directions && <DirectionsRenderer directions={props.directions} suppressMarkers={props.markers}/>}
      </GoogleMap>
    );
    
return (
        <DirectionsComponent
        /> 
    )
  }
}
export default MyMapComponent