import React, {useState} from "react"
import Form from "./Form"
import Todo from "./Todo"

function List() {
    const [todos, setTodos] = useState([]);


    const addTodo = todo => {
        //Stops exaggerated spacing
        if (!todo.text || /^\s*$/.test(todo.test)) {
            return;
        }

        //Allows the todos to be set and saved
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

   
    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        });
        setTodos(updateTodos);

    };

    const update =(todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.test)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item )));




    }
    


    const removeTodo = id => {
        const remove = [...todos].filter(todo => todo.id !== id);

        setTodos(remove);
    };


    
    return (
    <div>
        <Form onSubmit = {addTodo}/>
        <Todo todos = {todos} completeTodo = {completeTodo} removeTodo = {removeTodo} update ={update}/>
    </div>
  );
}

export default List