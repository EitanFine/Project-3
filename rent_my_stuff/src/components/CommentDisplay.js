import React, { Component } from "react";
import Moment from "moment";
import API from "../utils/API";

const CommentDisplay = (props) => {

    let div = [];
    for (let i = 0; i < props.comments.length; i++) {
        if (i % 2 === 0) {
            div.push({ item: props.comments[i], class: "bs-callout bs-callout-info" })
        } else {
            div.push({ item: props.comments[i], class: "bs-callout bs-callout-warning" })
        }
    }
    return (
        div.map(item =>

            <div className={item.class}>
                <p><h4>{item.item.commentUserName}</h4></p>
                <h4>{item.item.comment}</h4>
                <p><span>{Moment(item.item.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</span></p>
            </div>

        )
    )
}

export default CommentDisplay;