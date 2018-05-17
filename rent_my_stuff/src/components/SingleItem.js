import React, { Component } from "react";
import API from "../utils/API";
import Moment from 'moment';

class SingleItem extends React.Component {

    constructor() {
        super();
        this.state = {
            item: []
        }
    }
    componentDidMount() {
        console.log(this.props.id)
        API.getOneItem(this.props.id.id)
            .then(res => {
                console.log("number1", res.data);
                this.setState({
                    item: res.data
                });
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4><b>For Rent:</b> {this.state.item.itemName}</h4>
                        </div>
                        <div className="panel-body">
                            <div className='row'>
                                <div className='col-sm-4'>
                                    <img style={{ height: '225px', width: '90%', borderRadius: '5%' }} src={this.state.item.itemURL} alt="img" />
                                </div>
                                <div className='col-sm-8'>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <h4><b>Listing Id:</b>  {this.state.item.id}.</h4>
                                            <h4><b>Price:</b> ${this.state.item.itemPrice}. <span style={{ color: '#626262', fontFamily: "'Timmana', sans-serif" }}>(per day)</span></h4>
                                        </div>
                                        <div className='col-sm-6 text-right'>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <hr />
                                            <h4><b>Description</b></h4>
                                            <p>{this.state.item.itemDescription}.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-12 text-right'>
                                    <h5 style={{ fontFamily: "'Timmana', sans-serif" }}
                                        className='text-right'><span>Posted On: </span>
                                        {Moment(this.state.item.createdAt).format('LL')}</h5>
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