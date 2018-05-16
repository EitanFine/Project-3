import React, { Component } from 'react';
import CategoryItem from './CategoryItem';


class Category extends Component {
  
    render() {

        let CategoryItems;

        if (this.props.categories) {
            CategoryItems = this.props.categories.map(Category => {
                return (
                    <CategoryItem  Category={Category} key={category.id} id={category.id} />
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
