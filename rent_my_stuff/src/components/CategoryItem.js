import React, { Component } from 'react';


class CategoryItem
    extends Component {
    render() {       
        return (
            <li className="Category">
             <h3> hardcoded for Category </h3>
                <strong> {this.props.categoryName}</strong>                 
            </li>
        );
    }
}

export default CategoryItem   ;
