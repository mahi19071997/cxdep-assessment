import {
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  DELETE_TODO_REQ,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO_FAILURE,
  TOGGLE_TODO_REQ
} from "./actionTypes.js";
const initState = {
  todos: [],
  isLoading: false,
  isError: false
};
export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_TODO_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        todos: action.payload
      };
    case GET_TODO_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false
      };

    case ADD_TODO_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        todos: [...state.todos, action.payload]
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false
      };
    case DELETE_TODO_REQ: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case DELETE_TODO_SUCCESS: {
      return {
        ...state,
        todo: [...state.todo, action.payload],
        isLoading: false
      };
    }
    case DELETE_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }
    case TOGGLE_TODO_REQ: {
        return{
            ...state,
            isLoading: true,
            isError: false
        }
    }
    case TOGGLE_TODO_SUCCESS: {
        return{
            ...state,
            todo: [...state.todo, action.payload],
            isLoading: false,
        }
    }
    case TOGGLE_TODO_FAILURE: {
        return{
            ...state,
            isLoading: false,
            isError: true
        }
    }

    default:
      return state;
  }
};
