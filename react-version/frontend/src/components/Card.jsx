import React from "react";
import img from '../assets/imgs/img-padrao.jpg'
import '../components/Card.css'

export default props =>
    <div>
        <div className="user">
            <img src={props.img || img}/>
            <label>{props.name || 'User'}</label>
        </div>
    </div>