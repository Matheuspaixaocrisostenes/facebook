import React from "react"
import Form from "../components/Form"
import '../main/App.css'
import Card from '../components/Card'
import Header from '../components/Header'

export default props =>
    <React.Fragment>
        <Header />
        <div id="conteudo">
            <div className="card">
                <Card name="Matheus" img="https://media-exp1.licdn.com/dms/image/C4D03AQHlAxlVFUlxYw/profile-displayphoto-shrink_800_800/0/1603464937729?e=1661385600&v=beta&t=rri5LQp4demD59VOg7rN7n8ZxEYChNKEvu6xQcnFXSU" />
                <Card name="Matheus" img="https://media-exp1.licdn.com/dms/image/C4D03AQHlAxlVFUlxYw/profile-displayphoto-shrink_800_800/0/1603464937729?e=1661385600&v=beta&t=rri5LQp4demD59VOg7rN7n8ZxEYChNKEvu6xQcnFXSU" />
            </div>
            <div>
                <Form />
            </div>
        </div>
    </React.Fragment>