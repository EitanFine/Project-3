import React, { Component } from "react";
import API from "../utils/API";

const CommentDisplay = (props) => {
    console.log("PROPS====>", props)
    return (
        
        props.comments.map(comments => {
            console.log("=========>", comments);
            return (
                <div>
                    <h3><span>{comments.commentUserName}</span></h3>
                    <h4><span>{comments.comment}</span></h4>
                </div>
            )
        })
    )

}

export default CommentDisplay;