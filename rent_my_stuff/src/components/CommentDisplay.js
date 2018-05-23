import React, { Component } from "react";
import Moment from "moment";
import API from "../utils/API";

const CommentDisplay = (props) => {
    console.log("PROPS====>", props)
    return (
        
        props.comments.map(comments => {
            console.log("=========>", comments);
            return (


                 <div class="bs-callout bs-callout-info">
                        <h4>{comments.commentUserName}</h4>
                        <h4><span>{comments.comment}</span></h4>      
                        <p><span>{Moment(comments.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</span></p>
                 
                 </div>

                    // <div class="bs-callout bs-callout-warning">
                    //     <h4>Saved a ton of money</h4>
                    //     John was fast and curtious. Would definetly rent from here again!!
                    //     </div> 


            )
        })
    )

}

export default CommentDisplay;