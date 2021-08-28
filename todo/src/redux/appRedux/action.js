import {
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_FAILURE,
  ADD_TODO_SUCCESS,
  ADD_TODO_REQUEST,
  ADD_TODO_FAILURE,
  TOGGLE_TODO_REQUEST,
  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO_FAILURE,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  DELETE_TODO_REQ
} from "./actionTypes.js";
import Axios from "axios";

export const getTodoFetch = () => {
  return {
    type: GET_TODO_REQUEST
  };
};

export const getTodoFetchsuccess = data => {
  return {
    type: GET_TODO_SUCCESS,
    payload: data
  };
};
export const addTodoFetch = () => {
  return {
    type: ADD_TODO_REQUEST
  };
};

export const addTodoFetchsuccess = data => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: data
  };
};

export const addTodoFetchfailure = error => {
  return {
    type: ADD_TODO_FAILURE,
    payload: error
  };
};

export const getTodoFetchfailure = data => {
  return {
    type: GET_TODO_FAILURE,
    payload: data
  };
};

export const getTodosData = payload => dispatch => {
  dispatch(getTodoFetch());
  Axios.get("https://lit-beyond-94952.herokuapp.com/todos")
    .then(res => {
      dispatch(getTodoFetchsuccess(res.data));
    })
    .catch(err => {
      dispatch(getTodoFetchfailure(err));
    });
};
export const addTodosdata = payload => dispatch => {
  dispatch(addTodoFetch());
  Axios.post("https://lit-beyond-94952.herokuapp.com/todos", payload)
    .then(res => {
      dispatch(addTodoFetchsuccess(res.data));
      dispatch(getTodosData());
    })
    .catch(err => {
      dispatch(addTodoFetchfailure(err));
    });
};

export const toggleTodoReq = () => {
  return {
    type: TOGGLE_TODO_REQUEST
  };
};

export const toggleTodosuccess = data => {
  return {
    type: TOGGLE_TODO_SUCCESS,
    payload: data
  };
};

export const toggleTodofailure = error => {
  return {
    type: TOGGLE_TODO_FAILURE,
    payload: error
  };
};
export const deleteTodoReq = () => {
  return {
    type: DELETE_TODO_REQ
  };
};
export const deleteTodoSuccess = id => {
  return {
    type: DELETE_TODO_SUCCESS,
    id
  };
};
export const deleteTodoFailure = error => {
  return {
    type: DELETE_TODO_FAILURE,
    payload: error
  };
};

// export const toggleTodos = (payload, id) => dispatch => {
//   dispatch(toggleTodoReq());
//   Axios.put(`https://lit-beyond-94952.herokuapp.com/todos/${id}`, payload)
//     .then(res => {
//       dispatch(toggleTodosuccess(res.data));
//       dispatch(getTodosData());
//     })
//     .catch(err => {
//       dispatch(toggleTodofailure(err));
//     });
// };

export const deleteTodo = id => dispatch => {
  dispatch(deleteTodoReq());
  return Axios.delete(`https://lit-beyond-94952.herokuapp.com/todos/${id}`)
    .then(res => {
      dispatch(getTodosData());
      dispatch(deleteTodoSuccess(res.data));
      
    })
    .catch(err => dispatch(deleteTodoFailure(err)));
};
export const toggleTodo = (id,status) => dispatch => {
  dispatch(toggleTodoReq());
  return Axios.patch(`https://lit-beyond-94952.herokuapp.com/todos/${id}`, { status: !status })
    .then(res => {
      dispatch(getTodosData());
      dispatch(toggleTodosuccess(res.data));
    })
    .catch(err => dispatch(toggleTodofailure(err)));
};
