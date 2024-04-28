import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal, openModal }) {

  return (
    <button
      className="CreateTodoButton"
      onClick= {
        // (event) => {
          // console.log('le diste click')
          // console.log(event)
          // console.log(event.target)
          // setOpenModal(state => !state)
          () => {
            setOpenModal(state => !state)
          }
        // }
      }
    >+</button>
  );
}

export { CreateTodoButton };
