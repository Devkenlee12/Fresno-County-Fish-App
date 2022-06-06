import React from "react";
import '../App.css';
import Replyarea from "./Replyarea";
import Likearea from "./Likearea";
import Likebutton from "./Likebutton";



function Card () {

    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={require('../imgs/fish.jpg')} class="card-img-top" alt="..." />
                <div className="card-body">
                    <Likearea />
                    <Likebutton />
                    <p className="card-text"><b>Fisher Name:</b></p>
                    <p className="card-text"><b>Where:</b></p>
                    <p className="card-text"><b>Type of Fish:</b></p>
                    <p className="card-text"><b>Weight:</b></p>
                </div>
                    <Replyarea />
        </div>
    )
}

export default Card;