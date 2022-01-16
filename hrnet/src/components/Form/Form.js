import React, { useState } from 'react'
import '../../styles/form/form.css';
import DatePickerView from '../Date/Date';
import SelectView from '../Select/Select';
import { states, dept } from '../../data/data';
import { addEmploye } from '../../redux/actions/employe';
import { connect } from "react-redux";
//import { useNavigate } from 'react-router-dom';
import {Modal, useModal} from 'rjs-simple-modal';
import 'rjs-simple-modal/dist/index.css'

/**
 * @function Form
 * @param {object} props redux store
 * @returns jsx form
 */
const Form = (props) => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        dateBirth : "",
        startDate : "",
        street : "",
        city : "",
        state : states[0].label,
        zipcode : "",
        department : dept[0].label,
    });

    const [modalData, setModalInfo] = useState({
        title: "",
        content: "",
    });


    const { showModal, Toggle } = useModal();

    //const navigate = useNavigate();

    /**
     * 
     * @param {event} e event
     * Set data form on state form 
     */
    const onChangeInput = e => {
        setFormData({...formData, [e.target.id]: e.target.value});
    }
    
    /**
     * 
     * @param {event} evt event
     * Set data form to api
     * @return true if data successful added or false if error 
     */
    const handleSubmit = (evt) => {
        const { dispatch } = props;
        evt.preventDefault();
        dispatch(addEmploye(formData))
        .then(() => {
            setModalInfo({
                title : "Success", 
                content : "L'employé " + formData.firstname + " " +  formData.lastname + " a bien été enregistré."
            })
            Toggle();
            //navigate("/employee-list");
        })
        .catch((error) => {
            setModalInfo({
                title : "Error", 
                content : error
            })
            Toggle();
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>NEW EMPLOYEE</h1>
            <span className="line"></span>
            <fieldset className="fieldset1">  
                <legend>EMPLOYEE</legend>
                <div className="row">
                    <div className="col">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" required className="form-control" id="firstname" onChange={(e) => onChangeInput(e)} placeholder="First name"/>
                    </div>
                    <div className="col">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" required className="form-control" id="lastname" onChange={(e) => onChangeInput(e)} placeholder="Last name"/>
                    </div>              
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="dateBirth">Date of Birth</label>
                        <DatePickerView  setNewEmployee={setFormData} id="dateBirth"/>
                    </div>
                    <div className="col">
                        <label htmlFor="startDate">StartDate</label>
                        <DatePickerView  setNewEmployee={setFormData} id="startDate"/>
                    </div>
                </div>
            </fieldset> 
            <fieldset className="fieldset1">  
                <legend>ADDRESS</legend>
                <div className="row">
                    <div className="col">
                        <label htmlFor="street">Street</label>
                        <input type="text" required className="form-control" id="street" onChange={(e) => onChangeInput(e)} placeholder="Street"/>
                    </div>
                    <div className="col">
                        <label htmlFor="city">City</label>
                        <input type="text" required className="form-control" id="city" onChange={(e) => onChangeInput(e)} placeholder="City"/>
                    </div>              
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="state">State</label>
                        <SelectView id="state" setNewEmployee={setFormData} data={states}/>
                    </div>
                    <div className="col">
                        <label htmlFor="zipcode">Zip Code</label>
                        <input type="number" required className="form-control" id="zipcode" onChange={(e) => onChangeInput(e)} placeholder="Zip Code"/>
                    </div>
                </div>
            </fieldset>  
            <fieldset className="fieldset1">  
                <legend>DEPARTMENT</legend>
                <div className="row">
                    <div className="col">
                        <label htmlFor="department"></label>
                        <SelectView id="department" setNewEmployee={setFormData} data={dept}/>
                    </div>            
                </div>
            </fieldset> 
            <div className="form-group-center">
                <button type="submit" className="btn">Save</button> 
                <Modal show={showModal} close={Toggle} title={modalData.title}>{modalData.content}</Modal>
            </div>
        </form>
    )
}

/**
 * 
 * @param {object} state get data to store redux
 * @returns data store
 */
function mapStateToProps(state) {
    const  { message, statusMessage }  = state.message
    return {
      message,
      statusMessage
    };
}
export default connect(mapStateToProps)(Form);