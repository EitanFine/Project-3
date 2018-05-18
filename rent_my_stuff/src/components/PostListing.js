import React, { Component } from "react";
import API from "../utils/API";
import Moment from "moment";

import { FormBtn, Input, TextArea } from './Form';

class PostListing extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            itemUserId: "1",     //using default for testing - non-null field 
            itemDescription: "",
            itemCategorytype: "rental",  // keep rental as default value
            itemCatId: "",
            itemName: "",
            itemDescription: "",
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
                console.log("PostListing GetCategories  res: ", res.data);
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
        //console.log("handleRBchange: ", changeEvent.target.value);
        let itemCategorytype = changeEvent.target.value;
        this.setState({
            itemCategorytype
        });
        console.log('rb change show state: ', this.state)
    };

    handleSelectedChange = e => {
        console.log(e.target.value);
        this.setState({
            itemCatId: e.target.value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.itemUserId && this.state.itemCatId && this.state.itemName) {
            API.addItem({
                itemUserId: this.state.itemUserId,
                itemCategorytype: this.state.itemCategorytype,
                itemCatId: this.state.itemCatId,
                itemName: this.state.itemName,
                itemDescription: this.state.itemDescription,
                itemURL: this.state.itemURL,
                itemPrice: this.state.itemPrice
            })
                .then(res => this.loadCategories())
                .catch(err => console.log(err));
        }
    };

    validateForm() {
        let isButtonDisabled = false;
        if (!this.state.itemUserId) return true;
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


        return (
            <div>
                <div className='container'>
                    <form>

                        {/* < radio butons for 'rental' or 'service' - followed with dynamic select category*/}
                        {/* make this a component - will can be used (needed)  in navbar */}
                        <div className="radio">
                            <label>
                                <input type="radio" value="rental"
                                    checked={this.state.itemCategorytype === 'rental'}
                                    onChange={this.handleRBchange} />
                                Rent your item
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="service"
                                    checked={this.state.itemCategorytype === 'service'}
                                    onChange={this.handleRBchange} />
                                Offer Services
                            </label>
                        </div>

                        <select onChange={this.handleSelectedChange} >
                            {SelectOptions}
                        </select>
                        {/* end radio button and select category */}

                        <Input
                            value={this.state.itemName}
                            onChange={this.handleInputChange}
                            name="itemName"
                            placeholder="List Item or Service (required)"
                        />

                        <TextArea
                            value={this.state.itemDescription}
                            onChange={this.handleInputChange}
                            name="itemDescription"
                            placeholder="Description (required)"
                        />

                        <Input
                            value={this.state.itemURL}
                            onChange={this.handleInputChange}
                            name="itemURL"
                            placeholder="Insert Image URL (optional)"
                        />

                        <Input
                            value={this.state.itemPrice}
                            onChange={this.handleInputChange}
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
