import {
    ADDEMPLOYE,
  } from "../actions/types";
  
  const initialState = { 
    employes: []
  };

  export default function userReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case ADDEMPLOYE:
        return {
          ...state,
          employes: [...state.employes, payload.data],
        };
      default:
        return state;
    }
  }