import React from "react";
import { useAppSelector } from "../hooks/hooks";
import { useActions } from "../hooks/useActions";

const TodoList: React.FC = () => {
  const {todos, loading, page, limit, error} = useAppSelector((state) => state.todo);
  const {fetchTodos, setTodoPage} = useActions();

  const handlePageClick = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const value = Number(evt.currentTarget.textContent);
    setTodoPage(value);
  };

  React.useEffect(() => {
    fetchTodos(page, limit);    
  }, [page]);

  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {todos.map((todo) => 
        <div key={todo.id}>{todo.id} - {todo.title}</div>
      )}
      <div style={{display: 'flex'}}>
        {[...Array(5)].map((p, index) => 
          <div
            onClick={handlePageClick}
            style={{border: index + 1 === page ? '2px solid green' : '1px solid grey', padding: '10px'}}
            key={index + 1}>{index + 1}</div>
        )}
      </div>
    </div>
  );
};

export default TodoList;