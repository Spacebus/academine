import React from "react";

export default class SearchBar extends React.Component {

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

const Card = (props) => {
    return (
        <div className="card flex-md-row mb-3 box-shadow h-md-250">
            <img className="card-img-right flex-auto d-lg-block" alt="Thumbnail [200x250]" src={props.r.url_photo} style={{maxWidth: "125px"}}></img>
            <div className="card-body d-flex flex-column align-items-start">
                <h3 className="mb-0">
                <a className="text-dark" href="#">{props.r.name}</a>
                </h3>
                <div className="mb-1 text-muted">{props.r.city + ", " + props.r.state + ", " + props.r.country}</div>
                <p className="card-text mb-auto">{props.r.resume.slice(0,50)}</p>
                <a href="#">Curriculo Lattes</a>
            </div>   
        </div>
    )
}