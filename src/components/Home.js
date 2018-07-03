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
            areas: [],
            results: [],
            isResultsVisible: false,
            auth_token: null
        }
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.defineSearch = this.defineSearch.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
    }

    componentDidMount() {
        fetch("https://academine-api.herokuapp.com/authenticate", {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify({ 
                "email": "admin@academine.org", 
                "password": "4cademin3"
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

    handleKeyUp(text) {
        fetch("https://academine-api.herokuapp.com/specialty", {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                "Authorization": "Bearer " + this.state.auth_token
            },
            body: JSON.stringify({
                query: text
            })
        }).then(res => {
            res.json().then(data => {
                this.setState(() => ({
                    areas : data.data
                }));
                this.setState(() => ({
                    isAutocompleteVisible : !!text
                }));
            });
        });
    }

    defineSearch(area) {
        // clears autocomplete
        console.log(area);
        this.setState(() => ({
            isAutocompleteVisible : false,
            currentSearch : area
        }));

        console.log(this.state);
    }

    clearSearch() {
        this.setState(() => ({
            currentSearch : null,
            isResultsVisible : false
        }));
    }

    onSearchButtonClick() {
        fetch("https://academine-api.herokuapp.com/search", {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                "Authorization": "Bearer " + this.state.auth_token
            },
            body: JSON.stringify({
                specialties: [ this.state.currentSearch.id ]
            })
        }).then(res => {
            res.json().then(data => {
                this.setState(() => ({
                    results : data.data
                }));
                this.setState(() => ({
                    isResultsVisible : true
                }));
            });
        });
    }

    render() {
        return (
            <App>
                <div>
                    <div className="home-search mx-auto text-center">
                        <div className="text">
                            <h1 className="display-4">Encontre pesquisadores</h1>
                            <p className="lead">do CIn-UFPE por áreas de pesquisa ou tópicos de estudo</p>
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