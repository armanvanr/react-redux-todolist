import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../../redux/modules/todos";
import nextId from "react-id-generator";


const AddForm = styled.form`
    background-color: #eee;
    border-radius: 12px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    gap: 20px;
`;
const InputGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
const FormLabel = styled.label`
    font-size: 16px;
    font-weight: 700;
`;
const AddInput = styled.input`
    height: 40px;
    width: 240px;
    border: none;
    border-radius: 12px;
    padding: 0 12px;
`;
const AddButton = styled.button`
    text-align: center;
    border: none;
    height: 40px;
    border-radius: 10px;
    background-color: teal;
    width: 140px;
    color: #fff;
    font-weight: 700;
`;

const Form = () => {
  const id = nextId();
  const dispatch = useDispatch();

  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  // console.log(todos);

  const [todo, setTodo] = useState(initialState);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    dispatch(addTodo({ ...todo, id }));
    setTodo({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });
  };

  return (
    <AddForm onSubmit={onSubmitHandler}>
      <InputGroup>
        <FormLabel>Title</FormLabel>
        <AddInput
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <FormLabel>Context</FormLabel>
        <AddInput
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      </InputGroup>
      <AddButton>Add</AddButton>
    </AddForm>
  );
}

export default Form;
