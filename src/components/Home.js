import React from "react";

import App from "./App.js";
import SearchBar from "./SearchBar.js";
import ResultsArea from "./ResultsArea.js";

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAutocompleteVisible: false,
            currentSearch: null,
            areas: [
                {
                    id: 1,
                    title: "Engenharia de Software"
                },
                {
                    id: 2,
                    title: "Engenharia de Requisitos"
                },
                {
                    id: 3,
                    title: "Engenharia de Testes"
                },
            ]
        }
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.defineSearch = this.defineSearch.bind(this);
        this.onTagClick = this.onTagClick.bind(this);
    }

    handleKeyUp(text) {
        this.setState(() => ({
            isAutocompleteVisible : !!text
        }));

        console.log(this.state.areas);
        
    }

    defineSearch(area) {
        // clears autocomplete
        this.setState(() => ({
            isAutocompleteVisible : false,
            currentSearch : area
        }));
    }

    onTagClick() {
        this.setState(() => ({
            currentSearch : null
        }));
    }

    render() {
        return (
            <App>
                <div>
                    <div className="home-search mx-auto text-center">
                        <h1 className="display-4">Encontrar pesquisadores</h1>
                        <p className="lead">por áreas de pesquisa ou tópicos de estudo</p>
                        <SearchBar areas={this.state.areas} defineSearch={ this.defineSearch } onKeyUp={ this.handleKeyUp } visible={this.state.isAutocompleteVisible} currentSearch={this.state.currentSearch} onTagClick={this.onTagClick}/>
                    </div>
                    
                    <div className="container">
                        <ResultsArea />
                    </div>
                </div>
            </App>
        )
    }
}