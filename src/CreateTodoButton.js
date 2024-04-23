import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
        <button 
        className="CreateTodoButton"
        onClick={
            () => console.log("led diste click")
        }
        >+</button>
    );
}

export {CreateTodoButton}