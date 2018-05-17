import React, { Component } from 'react';


class CategoryItem
    extends Component {
    render() {       
        return (
            <li className="Category">
                <strong> {this.props.categoryName}</strong>                 
            </li>
        );
    }
}

export default CategoryItem   ;
