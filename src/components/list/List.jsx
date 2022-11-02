import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteTodo, statusTodo } from "../../redux/modules/todos";

const ListContainer = styled.div`
  padding: 0 24px;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
const TodoContainer = styled.div`
    width: 270px;
    /* height: 150px; */
    border: 4px solid teal;
    border-radius: 12px;
    padding: 12px 24px 24px 24px;
`;
const ButtonSet = styled.div`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;
const TodoDelete = styled.button`
    text-align: center;
    border: 2px solid red;
    width: 50%;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
    background-color: #fff;
`;
const TodoComplete = styled.button`
    text-align: center;
    border: 2px solid green;
    width: 50%;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
    background-color: #fff;
`;
const StyleLink = styled.link`
  text-decoration: none;
`;

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const onStatusTodo = (id) => {
    dispatch(statusTodo(id));
  };

  return (
    <ListContainer>
      <h2>Working.. 🔥</h2>
      <ListWrapper>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <TodoContainer key={todo.id}>
                <StyleLink to={`/${todo.id}`} key={todo.id}>
                  <div>Detail</div>
                </StyleLink>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <ButtonSet>
                  <TodoDelete
                    borderColor="red"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    Delete
                  </TodoDelete>
                  <TodoComplete
                    borderColor="green"
                    onClick={() => onStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "Cancel!" : "Complete!"}
                  </TodoComplete>
                </ButtonSet>
              </TodoContainer>
            );
          } else {
            return null;
          }
        })}
      </ListWrapper>
      <h2>Done..! 🎉</h2>
      <ListWrapper>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <TodoContainer key={todo.id}>
                <StyleLink to={`/${todo.id}`} key={todo.id}>
                  <div>Detail</div>
                </StyleLink>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <ButtonSet>
                  <TodoDelete
                    borderColor="red"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    Delete
                  </TodoDelete>
                  <TodoComplete
                    borderColor="green"
                    onClick={() => onStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "Cancel" : "Complete"}
                  </TodoComplete>
                </ButtonSet>
              </TodoContainer>
            );
          } else {
            return null;
          }
        })}
      </ListWrapper>
    </ListContainer>
  );
}

export default List;
