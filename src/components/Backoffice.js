import React from "react";
import App from "./App.js";

export default class Backoffice extends React.Component {
    render() {
        return (
            <App>
                <div className="backoffice">
                    <h1>Backoffice</h1>
                    <p>Inserir dados</p>
                    <input type="file" id="xml" name="xml" accept=".xml" multiple />
                    <button onClick={() => sendData()}>Enviar</button>
                </div>
                
            </App>
        )
    }
}