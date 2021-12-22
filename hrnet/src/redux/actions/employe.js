import {
    ADDEMPLOYE,
    SET_ERROR_MESSAGE,
  } from "./types";
  
import EmployeService from "../../services/employe.service";
export const addEmploye = (employe) => (dispatch,getState) => {
    const { employeReducer } = getState();
    console.log( getState())
    return EmployeService.addEmploye(employeReducer, employe).then(
      (data) => {
        dispatch({
          type: ADDEMPLOYE,
          payload: { data : data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(message)
        dispatch({
          type: SET_ERROR_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };