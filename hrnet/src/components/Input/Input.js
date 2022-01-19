import PropTypes from 'prop-types';
import React from 'react';

/**
 * React Input component allowing the user to enter text in order to fill out the form.
 * The value of the input will be added to newEmployee based on its inputName
 * @param {string} inputName - 
 * @param {string} inputType - 
 * @param {string} inputClass - 
 * @param {func} setNewEmployee - 
 * @return {void}
 */
const Input = props => {
    const onChangeInput = e => {
        props.setNewEmployee((state) => ({
          ...state,
          [e.target.id]: e.target.value
        }));
    }
    return (
        <input
            className={props.inputClass}
            required = { props.isRequired ? props.isRequired : false}
            id={props.inputName}
            type={props.inputType}
            name={props.inputName}
            aria-labelledby={props.inputName}
            placeholder = {props.inputPlaceHolder}
            onChange={(e) => onChangeInput(e)}
        />
    );
};

Input.propTypes = {
    inputClass : PropTypes.string.isRequired,
    inputName : PropTypes.string.isRequired,
    inputType : PropTypes.string.isRequired,
    setNewEmployee : PropTypes.func.isRequired,
};

export default Input;