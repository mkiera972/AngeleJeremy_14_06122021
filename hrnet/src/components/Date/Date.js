import React, { useState, useEffect } from "react";
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DatePickerView = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const { id, setNewEmployee } = props; 


  
  const onChangeInput = date => {
    props.setNewEmployee((state) => ({
      ...state,
      [props.id]: formattedDate(date)
    }));
    setStartDate(date)
  }

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

export default DatePickerView;