import React, { Component } from "react";
import Moment from "moment";
import API from "../utils/API";

const CommentDisplay = (props) => {
    // if (props.id%2===0){

    //     console.log(props.id)

    // }else{
    //     console.log("odd"props.id)

    // }
    let div = [];
    for (let i = 0; i < props.comments.length; i++) {
        if (i % 2 === 0) {
            div.push({item: props.comments[i], class: "bs-callout bs-callout-info"})
        } else {
            div.push({item: props.comments[i], class: "bs-callout bs-callout-warning"})
        }
    }
    return (
        div.map(item => 
            
        <div className={item.class}>
            <p><h4>{item.item.commentUserName}</h4></p>
            <h4>{item.item.comment}</h4>
            <p><span>{Moment(item.item.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</span></p>
        </div>
            
        // props.comments.map(comments => {
        //     // console.log("=========>", comments);
        //     return (

        //         < div>
        //             <div className="bs-callout" {styleclass}>
        //                 <h4>{comments.commentUserName}</h4>
        //                 <h4><span>{comments.comment}</span></h4>
        //                 <p><span>{Moment(comments.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</span></p>



        //             </div>
        //             {/* <div class="bs-callout bs-callout-warning">
        //             <h4>Saved a ton of money</h4>
        //             John was fast and curtious. Would definetly rent from here again!!
        //        </div>  */}

        //         </ div>

        //     )
        // })
    )
    )
}

export default CommentDisplay;