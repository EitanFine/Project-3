import React, { Component } from 'react';
import API from "./../utils/API";
import CategoryItem from './CategoryItem';


class Category extends Component {
    constructor() {
        super();
        this.state = {
            categories: []
        }
    }


    componentDidMount() {
        this.loadCategories();
    }
    componentWillMount() {
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
                console.log("Error getCategories: ", err)
            });
    }

    render() {

        let CategoryItems;

        if (this.state.categories) {
            CategoryItems = this.state.categories.map(category => {
                return (
                    <CategoryItem Category={category} 
                    categoryName={category.categoryName} 
                    categoryType={category.categoryType} 
                    key={category.id} id={category.id} />
                )

            });
        }

        return (
            <div className="Category">               
                <h2> Category </h2>
                {CategoryItems}
            </div>
        );
    }
}



export default Category;
