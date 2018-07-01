import React from "react";

import App from "./App.js";
import SearchBar from "./SearchBar.js";
import ResultsArea from "./ResultsArea.js";

export default class Home extends React.Component {
    render() {
        return (
            <App>
                <div>
                    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                        <h1 className="display-4">Encontrar pesquisadores</h1>
                        <p className="lead">por áreas de pesquisa ou tópicos de estudo</p>
                        <SearchBar />
                    </div>
                    
                    <div className="container">
                        <ResultsArea />
                    </div>
                </div>
            </App>
        )
    }
}