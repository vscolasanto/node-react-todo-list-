import React from 'react';
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';

const TodoForm = props => {
    function keyHandler(e) {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        } else if (e.key === 'Escape') {
            props.handleClearSearch ();
        }
    }

    return(
        <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input 
                    id="description" 
                    className="form-control" 
                    placeholder="Adicione uma tarefa" 
                    type="text"
                    onKeyUp={keyHandler}
                    onChange={props.handleChange}
                    value={props.description}
                />
            </Grid>
            <Grid cols="12 3 2">
                <IconButton 
                    style="primary" 
                    icon="fa fa-plus" 
                    onClick={props.handleAdd}
                />
                <IconButton 
                    style="info" 
                    icon="fa fa-search" 
                    onClick={props.handleSearch}
                />
                <IconButton 
                    style="default" 
                    icon="fa fa-eraser" 
                    onClick={props.handleClearSearch}
                />
            </Grid>
        </div>
    )
}

export default TodoForm;