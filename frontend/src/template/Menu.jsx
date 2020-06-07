import React from 'react';

const Menu = () => {
    return (
        <nav className="navbar navbar-inverse bg-inverse">
            <div className="container">
                <div className="navbar-header">
                    <a href="#/todos" className="navbar-brand">
                        <i className="fa fa-calendar-check-o"></i>Todo App
                    </a>
                </div>

                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="#/todos">Tarefas</a></li>
                        <li><a href="#/about">Sobre</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu;