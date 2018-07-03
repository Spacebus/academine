import React from "react";
import App from "./App.js";

export default class Backoffice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth_token: null
        }
        this.files = [];
        this.handleFileSelect = this.handleFileSelect.bind(this);
        this.sendFiles = this.sendFiles.bind(this);

    }

    componentDidMount() {

        /** Authentication */
        fetch("https://lattes-mining-api.herokuapp.com/authenticate", {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify({ 
                "email": "admin@cin.ufpe.br", 
                "password": "123456"
            })  
        }).then(res => {
            if(res.status === 200) {
                res.json().then( (data) => { 
                    this.setState(() => {
                        return {
                            auth_token: data.data.token
                        }
                    });
                    console.log(this.state);
                });
            } else {
                alert("Erro durante autenticação (" + res.status + ": " + res.statusText +")"); 
            }
        }).catch(err => { 
            alert("Erro durante autenticação (" + err.message + ")"); 
        });
    }

    handleFileSelect() {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            var files = document.getElementById("xml").files; // FileList object

            // Loop through the FileList and render image files as thumbnails.
            for (var i = 0, f; f = files[i]; i++) {

                var reader = new FileReader()

                // Closure to capture the file information.
                reader.onload = (e) => {
                    var xml = e.target.result;
                    xml = xml.replace(/^\uFEFF/, '').replace(/'/g, "").replace(/\"/g, "'");
                    this.files.push(xml);
                };

                // Read in the image file as a data URL.
                reader.readAsText(f, "ISO-8859-1");
            }
            console.log( this.files );
          } else {
            alert('The File APIs are not fully supported in this browser.');
          }
    }

    sendFiles() {
        console.log("Enviando...");
        var xmls = JSON.stringify({ 
            xmls: this.files
        });

        fetch("https://lattes-mining-api.herokuapp.com/receive", {
            method: "post",
            headers: {
                "content-type": "application/json",
                "Authorization": "Bearer " + this.state.auth_token
            }, 
            body: xmls
        }).then(res => {
            if(res.status === 200) {
                console.log(res);
                res.json().then(data => console.log(data));
            } else {
                alert("Erro durante envio de dados (" + res.status + ": " + res.statusText +")"); 
            }
        }).catch(err => { 
            alert("Erro ao enviar de dados (" + err.message + ")"); 
        });
    }

    render() {
        return (
            <App>
                <div className="backoffice">
                    <h1>Backoffice</h1>
                    <p>Inserir dados</p>
                    <input type="file" id="xml" name="xml"  multiple onChange={() => this.handleFileSelect()} />
                    <button onClick={() => this.sendFiles()}>Enviar</button>
                </div>
                
            </App>
        )
    }
}