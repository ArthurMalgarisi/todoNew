import React, {useState} from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({ todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index} onClick={() => completeTodo(todo.id)}>

            <div key={todo.id} >
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine
                    onClick={e => removeTodo(todo.id, e)}
                    className='delete-icon'            
                />
                <TiEdit 
                    onClick={() => setEdit({ id: todo.id, value: todo.text})}
                    className='edit-icon'
                />
            </div>
        </div>
    ));
}

export default Todo
