import React, { Component } from "react";
import API from "../utils/API";
import Moment from "moment";
import MapWithADirectionsRenderer from "./MyMapComponent";
import CommentBox from "./CommentBox";
import { Link } from "react-router-dom";
import DayPicker from 'react-day-picker';
import "./DatePicker.css";
import "./SingleItem.css"


class SingleItem extends Component {
    constructor() {
        super();
        this.state = {
            item: [],
            latitude: "",
            longitude: "",
            renteddates: [],
            itemId: ""
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


    createUnavailDates = (rentedDates) => {
        //the argument rentedDates is res.data.renteddates array 
        // splitted[1] is for month -- need to -1, (indexed from 0 to 11)
        if (rentedDates.length < 1) return [];
        let dayRentedDate = rentedDates.map(strdate => {
            let splitted = strdate.rentedDate.split("-");
            return new Date(splitted[0], splitted[1] - 1, splitted[2])
        })
        return dayRentedDate;
    }

    handleDayClick(day) {
        let itemId = document.getElementById('itemId').innerHTML;
        console.log("date clicked\n", day, itemId);
        let dateitem = {
            rentItemId: itemId,
            rentedDate: day
        }
        API.addRentedDate(dateitem)
            .then(res => {
                console.log("res")
            })
            .catch((err) => {
                console.log(err)
            })

    }

    componentWillMount() {
        API.getOneItem(this.props.itemId)
            .then(res => {
                console.log('res.data\n', res.data, "\nthis.props.itemId: ", this.props.itemId) //.itemInfo)   //res.data.itemInfo.id)
                let newDates = this.createUnavailDates(res.data.renteddates);
                this.setState({
                    item: res.data,
                    renteddates: newDates,
                    itemId: this.props.itemId
                });
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
                                    <strong><h2 className="googleFont"><span class="glyphicon glyphicon-check"></span>           Description</h2></strong><hr/>
                                    {item.itemInfo ? <p  style={{ fontSize: '14px' }}>{item.itemInfo.itemDescription}.</p> : ""}
                                    {item.itemInfo ? <h4 style={{ fontSize: '18px' }}><b>Listing Id:</b>  #<span id="itemId">{item.itemInfo.id}</span>.</h4> : ""}
                                    {item.itemInfo ? <h4 style={{ fontSize: '18px' }}><b>Price:</b> ${item.itemInfo.itemPrice}. <span style={{ color: '#626262', fontFamily: "'Timmana', sans-serif" }}>(per day)</span></h4> : ""}

                                </div>

                                <div className='col-sm-6 text-left'>
                                <strong> <h2 className="googleFont "><span class="glyphicon glyphicon-user"></span>              Contact Person</h2> </strong><hr/>
                                    {item.userInfo ? <h4 style={{ fontSize: '18px' }}><b>Name</b>  {item.userInfo.name}.</h4> : ""}
                                    {item.userInfo ? <h4 style={{ fontSize: '18px' }}><b>Address:</b>  {item.userInfo.streetAddress},
                                    {item.userInfo.city}, {item.userInfo.state}, {item.userInfo.zipcode}.</h4> : ""}
                                    {item.userInfo ? <h4 style={{ fontSize: '18px' }}><b>Email:</b>  {item.userInfo.email}.</h4> : ""}
                                </div>
                            </div>

                        <div className='row'>
                        <div className='col-sm-12 text-right'>
                            {item.itemInfo ? <h5 style={{ fontFamily: "'Timmana', sans-serif" }}
                                className='text-right'><span>Posted On: </span>
                                {Moment(item.itemInfo.createdAt).format('LL')}</h5> : ""}
                        </div>
                        </div>
                            {/* This needs to be moved to the new comment box */}


                            {/* {this.props.loggedIn ?
                                <CommentBox itemId={this.props.itemId} />
                                :
                                <div>
                                    <h3><Link to="/signup">Sign Up</Link> or <Link to="/login">Log In </Link> To Leave A Comment </h3>
                                </div>
                            } */}



                            {/* <div className="card border-primary mb-3">
                                <div className="card-header bg-transparent border-warning">Header</div>
                                <div className="card-body text-success">
                                    <h5 className="card-title">Success card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}


                            {/* <div className="card-footer bg-transparent border-warning">Footer</div> */}

                            {/* </div>
                            </div> */}

                           
                        </div>
                    </div>

                    <div className="panel panel-default">
                                <div className="panel-body">
                                    <strong>Dates and Availability</strong>
                                </div>
                                <div class="panel-footer">
                             
                             
                   

                        <div className='row'>
                            <div className='col-sm-12 '>
                                <DayPicker numberOfMonths={2}
                                    disabledDays={this.state.renteddates}
                                    onDayClick={this.handleDayClick} />
                            </div>
                        </div>
                    </div>
                            </div>

                    <div class="panel panel-default">
                        <div class="panel-body">
                        
                            <strong>  Leave a Comment</strong>
                        </div>
                        <div class="panel-footer">


                            <div class="form-group">
                                {/* <label for="comment">Leave a Comment:</label> */}
                                
                                <textarea class="form-control" rows="5" id="comment"></textarea>
                            </div>
                            <button type="button" class="btn btn-info btn-block">Submit</button>
                        </div>
                    </div>
                    <div class="bs-callout bs-callout-info">
                        <h4>Amazing</h4>
                        John was fast and curtious. Would definetly rent from here again!!
                        </div>

                    <div class="bs-callout bs-callout-warning">
                        <h4>Saved a ton of money</h4>
                        John was fast and curtious. Would definetly rent from here again!!
                        </div>

                </div>

            </div>


        );
    }
}

export default SingleItem;