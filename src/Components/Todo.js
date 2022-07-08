import React, {useState} from "react"
import Form from "./Form";


function Todo({todos, completeTodo, removeTodo, update}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    });

    const submitEdit = value => {
        update(edit.id, value)
        setEdit({id: null, value: ""})
    }

    if (edit.id) {
        return<Form edit = {edit} onSubmit = {submitEdit}/>;
    }

    
    return todos.map((todo, index) => (
        <div className = "complete" key = {index}>
            <div className="text_wrapper">
            <div className = "text" key = {todo.id} onClick = {() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            </div>
            <button className = "todo_Negbtn" onClick = {() => removeTodo(todo.id)}>☠</button>
            <button className = "todo_Editbtn" onClick = {() => setEdit({id: todo.id, value: todo.text})}>✎</button>
        </div>


    ));
    
}

export default Todo;