import React from "react";
import styled from "styled-components";
import {Button } from "@material-ui/core"

const Div = styled.div`
  background-color: #23456f;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding:20px;
  margin-top: 30px;
  border-radius: 20px;
`;
const Div2 = styled.div`
display: flex;
justify-content: space-between;
height: 40px;
width:20%;
margin-top: 20px;

`

export function TodoList({ status, title, handleDelete, handleToggle, id, category }) {
  return (
    <Div>
      <h1>{title}</h1>
      <h1>{status ? "Available" : "Unavailable"}</h1>
      <h2>{category}</h2>
      <Div2>
        <Button variant="contained" color="secondary"
          onClick={() => {
            handleToggle(id);
          }}
        >
          Toggle
        </Button>
        <Button variant="contained" color="secondary"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </Button>
      </Div2>
    </Div>
  );
}
