import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const API_URL = 'http://localhost:3003/api/todos';


export default class Todo extends Component {

    constructor( props ) {
        super( props )
        
        this.state = { description: '', list: [] };

        this.handleAdd = this.handleAdd.bind( this );
        this.handleSearch = this.handleSearch.bind( this );
        this.handleClearSearch = this.handleClearSearch.bind( this );
        this.handleChange = this.handleChange.bind( this );
        this.handleRemove = this.handleRemove.bind( this );
        this.handleMarkAsDone = this.handleMarkAsDone.bind( this );
        this.handleMarkAsPending = this.handleMarkAsPending.bind( this );

        this.refresh();
    }

    refresh(description = '') {
        const search = description ? `&description__regex=${description}` : '';
        
        axios.get(`${API_URL}?sort=-createdAt${search}`).then(response => {
            this.setState({ ...this.state, description, list: response.data });
        });
    }

    handleAdd () {
        const description = this.state.description;

        axios.post(API_URL, { description }).then(response => {
            this.refresh();
        });
    }

    handleSearch() {
        this.refresh(this.state.description);
    }

    handleClearSearch() {
        this.refresh();
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleRemove(todo) {
        axios.delete(`${API_URL}/${todo._id}`).then(response => {
            this.refresh(this.state.description);
        });
    }

    handleMarkAsDone(todo) {
        axios.put(`${API_URL}/${todo._id}`, { ...todo, done: true })
            .then(response => this.refresh(this.state.description))
    }
    
    handleMarkAsPending(todo) {
        axios.put(`${API_URL}/${todo._id}`, { ...todo, done: false })
            .then(response => this.refresh(this.state.description));
    }

    render () {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <PageHeader
                    titulo="Todo"
                    descricao="Cadastre, edite, remova e conclua suas tarefas"
                />
                <TodoForm 
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClearSearch={this.handleClearSearch}
                    handleChange={this.handleChange}
                />
                {/* <TodoForm handleAdd={_ => this.handleAdd()} /> */}
                <TodoList 
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} 
                />
            </div>
        )
    }
}