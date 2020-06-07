import React from 'react';
import PageHeader from '../template/PageHeader';

const About = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column' }}>
            <PageHeader titulo="Sobre" descricao="o app" hide />
            <p>Aplicação desenvolvida à partir de um curso para estudo da linguagem NodeJs e React.</p>
            <h4>Tópicos abordados:</h4>
            <ol>
                <li>Backend</li>
                <ul>
                    <li>Framework express;</li>
                    <li>Mongoose local como banco de dados;</li>
                    <li>NodeRestful para criação das rotas;</li>
                </ul>
            </ol>
            <ol start="2">
                <li>Frontend</li>
                <ul>
                    <li>React;</li>
                    <li>React Router para navegação;</li>
                    <li>Conceito de props</li>
                    <li>Renderização condicional</li>
                </ul>
            </ol>
        </div>
    )
}

export default About;