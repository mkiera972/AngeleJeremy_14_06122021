import React, { useState } from 'react'
import '../../styles/form/form.css';
import DatePickerView from '../Date/Date';
import SelectView from '../Select/Select';
import { states, dept } from '../../data/data';
import { addEmploye } from '../../redux/actions/employe';
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
const Form = (props) => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        dateBirth : "",
        startDate : "",
        street : "",
        city : "",
        state : "",
        zipcode : "",
        Department : "",
    });
    const navigate = useNavigate();
    const onChangeInput = e => {
        setFormData({...formData, [e.target.id]: e.target.value});
    }
 
    const handleSubmit = (evt) => {
        const { dispatch } = props;
        evt.preventDefault();
        dispatch(addEmploye(formData))
        .then(() => {
            navigate("/employee-list");
        });   
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Create Employee</h1>
            <fieldset className="fieldset1">  
                <legend>Informations personnelles</legend>
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
            <fieldset>  
                <legend>Address</legend>
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
            <fieldset>  
                <legend>Department</legend>
                <div className="row">
                    <div className="col">
                        <SelectView id="Department" setNewEmployee={setFormData} data={dept}/>
                    </div>            
                </div>
            </fieldset> 
            <div className="form-group-center">
                <button type="submit" className="btn">Save</button> 
            </div>
        </form>
    )
}
function mapStateToProps(state) {
    const  { message }  = state.message
    return {
      message
    };
}
export default connect(mapStateToProps)(Form);