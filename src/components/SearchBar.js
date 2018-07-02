import React from "react";

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="input-group searchbar">
                {
                    !this.props.currentSearch ? 
                        <input type="text" className="form-control" id="search" placeholder="Áreas de pesquisa, tópicos de estudo" required="" onKeyUp={(e) => this.props.onKeyUp(e.target.value)}></input>   
                    :    
                        <div className="tag-container d-flex align-items-center">
                            <Tag title={this.props.currentSearch.title} onClick={this.props.onTagClick} />
                        </div>
                        
                }
                
                <button type="button" className="btn btn-primary">Pesquisar</button>

                <div className={ this.props.visible ? "autocomplete visible" : "autocomplete" }>
                    {
                        this.props.areas.map((a) => <div className="suggestion" onClick={(e) => this.props.defineSearch(a)} key={a.id}>{ a.title }</div>)
                    }
                </div>
            </div>
        )
    }
}

const Tag = (props) => {
    return <div className="btn btn-outline-primary" onClick={ (e) => props.onClick() }>{props.title} <button type="button" className="close" aria-label="Excluir"></button></div>
}