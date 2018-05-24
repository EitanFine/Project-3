import React, { Component } from "react";
import { Wrapper, Row, Col } from "./BootstrapGrid";
import API from "../utils/API";

class CommentBox extends Component {
    state = {
        comment: "",
        commentItemId: this.props.itemId,
        commentUserId: "",
        commentUserName: "",
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    handleComment = event => {
        event.preventDefault();

        API.addComment(this.state)
            .then(res => {
                this.clearForm();
                this.props.newComments();
            })
            .catch(err => { console.log(err) })
    }

    clearForm() {
        this.setState({
            comment: ""
        })
    }


    render() {
        return (
            <form onSubmit={this.handleComment}>

                <textarea class="form-control" rows="5" id="comment" name="comment" required type="text" value={this.state.comment} onChange={this.handleInputChange}></textarea>
                <button style={{ backgroundColor: '#4484ce' }} type="submit" value="Post Comment" class="btn btn-info btn-block" >Submit</button>

            </form>
        )
    }
}

export default CommentBox