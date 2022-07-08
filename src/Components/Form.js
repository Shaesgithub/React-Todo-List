import React, {useState, useEffect, useRef} from "react";

const Form = (props) => {
    const [input, setInput] = useState("")

    //Focus on form on load and on edit part one
    const ref = useRef(null)
    useEffect(() => {
        ref.current.focus()
    });


     // Reset text after enter
     const formText = i => {
        setInput(i.target.value);
    };

    //Stop page from refreshing step one
    const formRefresh = i => {
        i.preventDefault();

        // Allow text to be set and saved
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        // Reset text after enter
        setInput("");

    };
   


    return (
        <form className = "todo_form" 
        
        //Stop page from refreshing step two
        onSubmit = {formRefresh}>

            <input 
            className = "todo_input"
            type = "text"
            autocomplete="off"
            placeholder = "Quick! Type something before you forget!" 
            value = {input} 
            name = "text"

            //Allow text input in form 
            onChange = {formText}
            //Focus on form on load and on edit part two
            ref = {ref}
            />

            <button className = "todo_Posbtn">❇</button>

        </form>
    )
};

export default Form;