import React, { Component } from "react";
import API from "../utils/API";

class CommentDisplay extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
           
        };
    }

componentDidMount(){
    this.loadComments(this.props);
};

loadComments = () => {
    API.getComments(this.props.itemId)
        .then(res => {
            console.log("=====>", res)
            this.setState({
                comments: res.data
            })
        })
        .catch(err=> console.log(err))
};

render(){
    return(
        this.state.comments.map(comments =>{
            console.log("=========>", comments);
            return(
                <div>
                    <h3><span>{comments.commentUserName}</span></h3>
                    <h4><span>{comments.comment}</span></h4>
                </div>
            )
        })
    )
}
}

export default CommentDisplay;