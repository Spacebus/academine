import React from "react";

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        
    }

    openCard() {

    }

    render() {

        return (
            <div className={ this.props.visible ? "results-area visible" : "results-area" }>
                <h1>Resultados</h1>
                {
                    this.props.currentSearch ? this.props.results.map(r => <Card key={r.id} r={r}/>) : []
                }
            </div>
        )
    }
}


class Card extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            open: false
        }

        this.open = this.open.bind(this);
    }

    open() {
        this.setState((prevState) => ({
            open: !prevState.open
        }));
    }
    
    render() {
        return (
            <div className={ this.state.open ? "card flex-md-row mb-3 box-shadow h-md-250 open " : "card flex-md-row mb-3 box-shadow h-md-250" } onClick={() => this.open()}>

                
                <div className="card-body d-flex flex-column align-items-start">
                    <h4 className="mb-0 text-dark">{this.props.r.name}</h4>
                    <div className="mb-1 text-muted">{this.props.r.city + ", " + this.props.r.uf + " - " + this.props.r.country}</div>
                    <div className="specialities" style={{display: "none"}}>
                        <b>Especialidades:</b> { /* this.props.r.specialities.map((s, i) => (this.props.r.specialities.length-1 === i) ? s.name + ". " : s.name + ", ")*/ }
                    </div>
                    <p className="resume card-text mb-auto"><b>Resumo: </b> {this.props.r.resume}</p>
                    <p className="links"><a target="_blank" href={this.props.r.lattes_url}>Ver currículo Lattes</a> ● <a href={"mailto:" + this.props.r.email}>Enviar e-mail</a></p>
                </div>   
            </div>
        )
    }
}