import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import React from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUi() {

    const { 
        openModal, 
        setOpenModal } = React.useContext(TodoContext);
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoContext.Consumer>
                { ({
                    loading,
                    error,
                    searchedTodos,
                    completeTodo,
                    deleteTodo,
                }) => (
                    <TodoList>
                    {loading && ( 
                        <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                        </>  
                    )}
                    {error && <TodosError />}
                    {(!loading && searchedTodos.length === 0) && <TodosEmpty />}

                    {searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoList>
                ) }
            </TodoContext.Consumer>

            <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal}/>

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            
        </>
    );
}

export { AppUi };