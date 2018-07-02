import React from "react";
import App from "./App.js";

export default class Backoffice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
        this.files = [];
        this.handleFileSelect = this.handleFileSelect.bind(this);

    }

    handleFileSelect() {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            var files = document.getElementById("xml").files; // FileList object

            // Loop through the FileList and render image files as thumbnails.
            for (var i = 0, f; f = files[i]; i++) {

                var reader = new FileReader()

                // Closure to capture the file information.
                reader.onload = (e) => {
                    this.files.push(e.target.result);
                };

                // Read in the image file as a data URL.
                reader.readAsText(f, "ISO-8859-1");
            }
            console.log( this.files );
          } else {
            alert('The File APIs are not fully supported in this browser.');
          }
    }

    render() {
        return (
            <App>
                <div className="backoffice">
                    <h1>Backoffice</h1>
                    <p>Inserir dados</p>
                    <input type="file" id="xml" name="xml"  multiple onChange={() => this.handleFileSelect()} />
                    <button>Enviar</button>
                </div>
                
            </App>
        )
    }
}