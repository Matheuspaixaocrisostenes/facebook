import React from "react"
import "../components/Form.css"

export default props =>
    <div className="formulario">
        <form>
            <input type="text" placeholder="Email ou telefone" />
            <input type="password" placeholder="Senha" />
            <button id="entrar">Entrar</button>
            <a href="#">Esqueceu a senha?</a>
            <hr />
            <button id="criar">Criar nova conta</button>
        </form>
    </div>