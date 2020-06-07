import React from 'react';

import IconButton from '../template/IconButton';
import If from '../helpers/If';
import TodoForm from './TodoForm';

const TodoList = props => {
    function renderRows() {
        const list = props.list || [];

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markAsDone' : ''}>
                    {todo.description}
                </td>
                <td className="tableAction">
                    <IconButton 
                        style="success" 
                        icon="fa fa-check"
                        hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)} />
                    <IconButton 
                        style="warning" 
                        icon="fa fa-undo"
                        hide={!todo.done}
                        onClick={() => props.handleMarkAsPending(todo)} />
                    <IconButton 
                        style="danger" 
                        icon="fa fa-trash-o"
                        onClick={() => props.handleRemove(todo)} />
                </td>
            </tr>
        ))
    }

    return(
        <>
            <If test={props.list.length > 0}>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    Descrição
                                </th>
                                <th className="tableAction">
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderRows()}
                        </tbody>
                    </table>
                </div>
            </If>
            <If test={props.list.length === 0}>
                <div 
                    style={{height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                >
                    <h2>Nenhuma tarefa adicionada!</h2>
                </div>
            </If>
        </>
    ) 
}

export default TodoList;