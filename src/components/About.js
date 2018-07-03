import React from "react";
import App from "./App.js";

export default class About extends React.Component {
    render() {
        return (
            <App>
                <div style={{marginTop:"50px"}}>
                    <h4>Sobre o Academine</h4>
                    <p><i>Academine</i> é uma aplicação que facilita a busca por professores a partir de tópicos de pesquisa, minerando dados de fontes como a Plataforma Lattes e o site do Centro de Informática (CIn). Desenvolvido para a disciplina <i>Gestão do Conhecimento e Informação</i> da graduação em Sistemas de Informação do Centro de Informática da UFPE.</p>
                    <div style={{marginTop:"30px"}}></div>
                    <h4>Equipe</h4>
                    <ul>
                        <li>Augusto Gondim (<a target="_blank" href="http://github.com/aacgn">@aacgn</a>)</li>
                        <li>Eduardo Moura (<a target="_blank" href="http://github.com/esm7">@esm7</a>)</li>
                        <li>Marcos Vinicius (<a target="_blank" href="http://github.com/mvhb">@mvhb</a>)</li>
                        <li>Vinícius Giles (<a target="_blank" href="http://github.com/gilesv">@gilesv</a>)</li>
                    </ul>
                </div>
            </App>
        )
    }
}