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
                    {/* <Row>
                        <Col>
                            <h1> Leave A Comment</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={2} offset={3}>
                            <label>Comment: </label>
                        </Col> */}
                        {/* <Col span={3}> */}
                            {/* <input name="comment" required type="text" value={this.state.comment} onChange={this.handleInputChange} /> */}
                        {/* </Col>
                    </Row> */}
                    
                        <button type="button submit"  name="comment" class="btn btn-info btn-block" value={this.state.comment} onChange={this.handleInputChange}>Submit</button>

                            {/* <input type="submit" value="Post Comment" /> */}
                    
                </form>
        )
    }
}

export default CommentBox