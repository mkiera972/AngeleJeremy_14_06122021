import Form from "../../components/Form/Form";
import PropTypes from 'prop-types';
/**
 * @function CreateEmployee
 * @param {object} props styles data
 * @returns jsx form
 */
const CreateEmployee = (props) => {
    return(
        <main id="main" style={{marginLeft:props.style.main}}>
            <div className="container" >
                <Form/>
            </div>
        </main>
    )
}
CreateEmployee.propTypes = {
    style : PropTypes.object.isRequired,
};
export default CreateEmployee;