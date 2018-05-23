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
                    <textarea class="form-control" rows="5" id="comment" name="comment" required type="text" value={this.state.comment} onChange={this.handleInputChange}></textarea> 
                            {/* <input name="comment" required type="text" value={this.state.comment} onChange={this.handleInputChange} /> */}
                        {/* </Col>
                    </Row> */}
                    
                        {/* <button type="submit" value="Post Comment"  name="comment" class="btn btn-info btn-block" value={this.state.comment} onChange={this.handleInputChange}>Submit</button> */}

                            <button  type="submit" value="Post Comment" class="btn btn-info btn-block" >Submit</button>
                    
                </form>
        )
    }
}

export default CommentBox