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
            ],
            results: [
                {
                    id: 1,
                    name: "Hermano Perrelli de Moura",
                    email: "hermano@cin.ufpe.br",
                    url_photo: "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4781650D6",
                    resume: "Penso em fazer como segunda graduação, mas não vejo a medicina como isso de nooossa que profissionais superiores aos outros, a gente precisa desendeusar a figura do médico pelo bem dos próprios pacientes",
                    city: "Recife",
                    state: "PE",
                    country: "Brasil"
                },
                {
                    id: 2,
                    name: "Hermano Perrelli de Moura",
                    email: "hermano@cin.ufpe.br",
                    url_photo: "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4781650D6",
                    resume: "Penso em fazer como segunda graduação, mas não vejo a medicina como isso de nooossa que profissionais superiores aos outros, a gente precisa desendeusar a figura do médico pelo bem dos próprios pacientes",
                    city: "Recife",
                    state: "PE",
                    country: "Brasil"
                }
            ],
            isResultsVisible: false
        }
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.defineSearch = this.defineSearch.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
    }

    handleKeyUp(text) {
        this.setState(() => ({
            isAutocompleteVisible : !!text
        }));        
    }

    defineSearch(area) {
        // clears autocomplete
        this.setState(() => ({
            isAutocompleteVisible : false,
            currentSearch : area
        }));
    }

    clearSearch() {
        this.setState(() => ({
            currentSearch : null,
            isResultsVisible : false
        }));
    }

    onSearchButtonClick() {
        this.setState(() => ({
            isResultsVisible : true
        }));
    }

    render() {
        return (
            <App>
                <div>
                    <div className="home-search mx-auto text-center">
                        <div className="text">
                            <h1 className="display-4">Encontrar pesquisadores</h1>
                            <p className="lead">por áreas de pesquisa ou tópicos de estudo</p>
                        </div>
                        
                        <SearchBar areas={this.state.areas} 
                                   defineSearch={ this.defineSearch } 
                                   onKeyUp={ this.handleKeyUp } 
                                   visible={this.state.isAutocompleteVisible} 
                                   currentSearch={this.state.currentSearch} 
                                   onTagClick={this.clearSearch}
                                   onSearchButtonClick={this.onSearchButtonClick} />
                    </div>
                    
                    <ResultsArea visible={this.state.isResultsVisible} currentSearch={this.state.currentSearch} results={this.state.results} />
                    
                </div>
            </App>
        )
    }
}