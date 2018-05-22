import React, { Component } from "react";
import API from "../utils/API";
import Moment from "moment";
import MapWithADirectionsRenderer from "./MyMapComponent";
<<<<<<< HEAD
import CommentBox from "./CommentBox";
=======
import DayPicker from 'react-day-picker';

>>>>>>> 7638780db34fa7856a48efd706545e78c5d95e03

class SingleItem extends Component {
    constructor() {
        super();
        this.state = {
            item: [],
            latitude: "",
            longitude: ""
        }
    }


    onPositionReceived = (position) => {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })

    }

    locationNotReceived = (positionError) => {
        console.log(positionError);
    }



    componentWillMount() {
        API.getOneItem(this.props.match.params.id)
            .then(res => {
                this.setState({
                    item: res.data
                });
console.log("SINGLEiTEM: ", res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        const { item, latitude, longitude } = this.state;
        var lat = item.lat ? item.lat.results[0].location.lat : "";
        var lng = item.lat ? item.lat.results[0].location.lng : "";
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.onPositionReceived, this.locationNotReceived)
        }
        return (
            <div>
                <div className='container'>
                    <div className="panel panel-default">
                        <div className="panel-heading text-center">
                            {item.itemInfo ? <h4 style={{ fontSize: '20px' }}><b>Listing: </b> {item.itemInfo.itemName}</h4> : ""}
                        </div>
                        <div className="panel-body">
                            <div className='row'>
                                <div className='col-sm-6'>
                                    {item.itemInfo ? <img className=" well well-sm" style={{ height: '375px', width: '100%', borderRadius: '5%' }} src={item.itemInfo.itemURL} alt="img" /> : ""}
                                </div>
                                <div className='col-sm-6'>
                                    <div className=" well well-sm">
                                        <MapWithADirectionsRenderer
                                            origin1={lat}
                                            origin2={lng}
                                            destination1={latitude}
                                            destination2={longitude}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <h2>Description</h2><br /><br />
                                    {item.itemInfo ? <p style={{ fontSize: '14px' }}>{item.itemInfo.itemDescription}.</p> : ""}<br />
                                    {item.itemInfo ? <h4 style={{ fontSize: '18px' }}><b>Listing Id:</b>  #{item.itemInfo.id}.</h4> : ""}
                                    {item.itemInfo ? <h4 style={{ fontSize: '18px' }}><b>Price:</b> ${item.itemInfo.itemPrice}. <span style={{ color: '#626262', fontFamily: "'Timmana', sans-serif" }}>(per day)</span></h4> : ""}

                                </div>
                                <div className='col-sm-6 text-left'>
                                    <h2>Contact Person</h2><br /><br />
                                    {item.userInfo ? <h4 style={{ fontSize: '18px' }}><b>Name</b>  {item.userInfo.name}.</h4> : ""}<br />
                                    {item.userInfo ? <h4 style={{ fontSize: '18px' }}><b>Address:</b>  {item.userInfo.streetAddress},
                                    {item.userInfo.city}, {item.userInfo.state}, {item.userInfo.zipcode}.</h4> : ""}<br />
                                    {item.userInfo ? <h4 style={{ fontSize: '18px' }}><b>Email:</b>  {item.userInfo.email}.</h4> : ""}<br />
                                </div>
                            </div>
                            <CommentBox itemId={this.props.match.params.id}/>
                            <div className='row'>
                                <div className='col-sm-12 text-right'>
                                    {item.itemInfo ? <h5 style={{ fontFamily: "'Timmana', sans-serif" }}
                                        className='text-right'><span>Posted On: </span>
                                        {Moment(item.itemInfo.createdAt).format('LL')}</h5> : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleItem;