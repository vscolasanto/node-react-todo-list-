import React from 'react';
import ReactTooltip from "react-tooltip";
import If from '../helpers/If';

const PageHeader = props => {
    return (
        <header className="page-header" style={{marginTop: 0}}>
            <h2>{props.titulo} <small> {props.descricao} </small>
            
                <ReactTooltip html={true} />
                <If test={!props.hide}>
                    <span 
                        data-tip="ENTER: Adiciona a tarefa;<br> 
                            ESC: Limpa a pesquisa;<br> 
                            SHIFT+ENTER: Pesquisa o conteudo do campo"
                        className="badge badge-pill badge-primary">
                        <i className="fa fa-question"></i>
                    </span>
                </If>
            </h2>
            
        </header>
    )
}

export default PageHeader;