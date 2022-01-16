import React, { useState, useEffect } from "react";
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';
/**
 * @function DatePickerView
 * @param {object} props id, setNewEmployee function
 * @returns date
 */
const DatePickerView = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const { id, setNewEmployee } = props; 
  
  /**
   * 
   * @param {string} date 
   * set date formatted to the state
   */
  const onChangeInput = date => {
    props.setNewEmployee((state) => ({
      ...state,
      [props.id]: formattedDate(date)
    }));
    setStartDate(date)
  }

  /**
   * 
   * @param {string} date 
   * @returns date formated eng
   */
  const formattedDate = (date) => {
    const momentDate = new Date(date); // Replace event.value with your date value
    const dateEng = moment(momentDate).format("YYYY/MM/DD");
    return dateEng;
  }

  useEffect(() => {
    setNewEmployee((state) => ({
      ...state,
      [id]: formattedDate(startDate)
    }));
  },[setNewEmployee, id, startDate]);

  return (
    <DatePicker required id={props.id}  onChange={(date) => onChangeInput(date)} selected={startDate}  />
  );
};

DatePickerView.propTypes = {
  setNewEmployee : PropTypes.func.isRequired,
  id : PropTypes.string.isRequired,
};
export default DatePickerView;