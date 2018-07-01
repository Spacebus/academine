import React from "react";

export default class SearchBar extends React.Component {

    render() {

        return (
            <div className="input-group">
                        
                <input type="text" className="form-control" id="username" placeholder="Áreas de pesquisa, tópicos de estudo" required=""></input>
                <div className="input-group-postpend">
                    <button type="button" className="btn btn-primary">Pesquisar</button>
                </div>
            </div>
        )
    }
}