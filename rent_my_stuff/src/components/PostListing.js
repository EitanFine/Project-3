import React, { Component } from "react";
import API from "../utils/API";
import { Redirect } from "react-router-dom"
//import Moment from "moment";

import { FormBtn, Input, TextArea } from './Form';

const styles = {
    paddingTop: '1.35%'
}


class PostListing extends Component {
    constructor() {
        super();
        this.state = {

            categories: [],
            itemUserId: "",     //using default for testing - non-null field 
            itemDescription: "",
            itemCategorytype: "rental",  // keep rental as default value
            itemCatId: "",
            itemName: "",
            itemURL: "",
            itemPrice: ""
        }
    }
    componentDidMount() {
        this.loadCategories();

    }


    loadCategories = () => {
        API.findAllCategories()
            .then(res => {
                this.setState({
                    categories: res.data
                });
            })
            .catch(err => {
                console.log("Error in PostListing getCategories: ", err)
            });

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleRBchange = changeEvent => {
        let itemCategorytype = changeEvent.target.value;
        this.setState({
            itemCategorytype: changeEvent.target.value
        });
        this.clearForm();

    };

    handleSelectedChange = e => {
        //console.log(e.target.value);
        this.setState({
            itemCatId: e.target.value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.itemCatId && this.state.itemName) {
            console.log(this.state.itemCatId)
            API.addItem({
                itemCategorytype: this.state.itemCategorytype,
                itemCatId: this.state.itemCatId,
                itemName: this.state.itemName,
                itemDescription: this.state.itemDescription,
                itemURL: this.state.itemURL,
                itemPrice: this.state.itemPrice
            })
                .then(res => {
                    this.loadCategories();
                    this.props.loadItems();
                    this.clearForm()
                })
                .catch(err => console.log(err));
        }
    };

    clearForm() {
        this.setState({
            itemDescription: "",
            itemCatId: "",
            itemName: "",
            itemURL: "",
            itemPrice: ""
        })
    }

    validateForm() {
        let isButtonDisabled = false;
        if (!this.state.itemCategorytype) return true;
        if (!this.state.itemCatId) return true;
        if (!this.state.itemName) return true;
        if (!this.state.itemDescription) return true;
        if (!this.state.itemPrice) return true;

        return isButtonDisabled;
    }


    render() {

        {/* select box dependent on radio button clicks this should keep replaced select options*/ }
        let filteredCats = this.state.categories.filter(category => category.categoryType === this.state.itemCategorytype);
        let SelectOptions = filteredCats.map(selopts => {
            return <option value={selopts.id} key={selopts.id}> {selopts.categoryName} </option>
        })

        if (!this.props.loggedIn) {
            
                return <Redirect to="/" />;
            
        }
        return (

            <div>
                <div className='container'>
                    <form >

                        {/* < radio butons for 'rental' or 'service' - followed with dynamic select category*/}
                        {/* make this a component - will can be used (needed)  in navbar */}
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className='row'>
                                    <div className='col-sm-2'>
                                        <div className="radio">
                                            <label >
                                                <input type="radio" value="rental"
                                                    checked={this.state.itemCategorytype === 'rental'}
                                                    onChange={this.handleRBchange} />
                                                Rent your item
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-sm-2'>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" value="service"
                                                    checked={this.state.itemCategorytype === 'service'}
                                                    onChange={this.handleRBchange} />
                                                Offer Services
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-sm-2' style={styles}>
                                        <select onChange={this.handleSelectedChange} >
                                            <option selected value="" >Please Select...</option>
                                            {SelectOptions}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* end radio button and select category */}
                        <label for="itemName">List your Item or Service</label>
                        <Input
                            value={this.state.itemName}
                            onChange={this.handleInputChange}
                            name="itemName"
                            placeholder="List Item or Service (required)"
                        />
                        <label for="itemDescription">Description of Item or Service</label>
                        <TextArea
                            value={this.state.itemDescription}
                            onChange={this.handleInputChange}
                            name="itemDescription"
                            placeholder="Description (required)"
                        />

                        <label for="itemURL">Optional Image URL</label>
                        <Input
                            value={this.state.itemURL}
                            onChange={this.handleInputChange}
                            name="itemURL"
                            placeholder="Insert Image URL (optional)"
                        />
                        <label for="itemPrice">Price </label>
                        <Input
                            value={this.state.itemPrice}
                            onChange={this.handleInputChange}
                            type="number"
                            name="itemPrice"
                            placeholder="Price (required)"
                        />

                        <FormBtn
                            disabled={this.validateForm()}
                            onClick={this.handleFormSubmit}   >
                            Post Item
                        </FormBtn>

                    </form>
                </div>
            </div>

        );
    }
}

export default PostListing;
