import React from "react";
import Logo from '../assets/imgs/logo.svg'
import './Header.css'

export default props =>
    <div>
        <img src={Logo} className="logo" />
        <h2>Logins recentes</h2>
        <p>Clique na sua foto ou adicione uma conta.</p>
    </div>