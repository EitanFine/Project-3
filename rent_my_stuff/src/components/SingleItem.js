import React, { Component } from "react";
import API from "../utils/API";
import Moment from 'moment';

class SingleItem extends Component {
    constructor() {
        super();
        this.state = {
            item: []
        }
    }
    componentDidMount() {
        console.log("test: ", this.props.id)
        API.getOneItem(this.props.id.id)
            .then(res => {
                console.log("item", res.data);
                this.setState({
                    item: res.data
                });
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        const { item } = this.state;
        console.log(this.state.item.itemInfo? this.state.item.itemInfo.itemName: "", " sofnoid")
        return (
            <div>
                <div className='container'>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {item.itemInfo? <h4><b>For Rent:</b> {item.itemInfo.itemName}</h4>:""}
                        </div>
                        <div className="panel-body">
                            <div className='row'>
                                <div className='col-sm-6'>
                                {item.itemInfo? <img style={{ height: '425px', width: '100%', borderRadius: '5%' }} src={item.itemInfo.itemURL} alt="img" />:""}
                                </div>
                                <div className='col-sm-6'>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                        {item.itemInfo?<h4><b>Listing Id:</b>  {item.itemInfo.id}.</h4>:""}
                                        {item.itemInfo?<h4><b>Price:</b> ${item.itemInfo.itemPrice}. <span style={{ color: '#626262', fontFamily: "'Timmana', sans-serif" }}>(per day)</span></h4>:""}
                                        
                                        </div>
                                        <div className='col-sm-6 text-left'>
                                        {item.userInfo?<h4><b>Contact:</b>  {item.userInfo.name}.</h4>:""}
                                        {item.userInfo?<h4><b>Address:</b>  {item.userInfo.streetAddress}, {item.userInfo.city}, {item.userInfo.state}, {item.userInfo.zipcode}.</h4>:""}
                                        {item.userInfo?<h4><b>Email:</b>  {item.userInfo.email}.</h4>:""}
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <hr />
                                            <h4><b>Description</b></h4>
                                            {item.itemInfo?<p>{item.itemInfo.itemDescription}.</p>:""}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-12 text-right'>
                                {item.itemInfo?<h5 style={{ fontFamily: "'Timmana', sans-serif" }}
                                        className='text-right'><span>Posted On: </span>
                                        {Moment(item.itemInfo.createdAt).format('LL')}</h5>:""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleItem;