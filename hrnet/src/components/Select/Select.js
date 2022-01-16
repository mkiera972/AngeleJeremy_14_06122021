import Select from 'react-select';
import PropTypes from 'prop-types';
/**
 * @function SelectView
 * @param {object} props data select
 * @returns react select
 */
const SelectView = (props) => {
    const onChangeInput = data => {
        props.setNewEmployee((state) => ({
          ...state,
          [props.id]: data.label
        }));
    }
    return (
        <Select id={props.id} onChange={(data) => onChangeInput(data)} options={props.data}  value={{ label: props.data[0].label }} />
    )
};
SelectView.propTypes = {
    setNewEmployee : PropTypes.func.isRequired,
    data : PropTypes.object.isRequired,
};
export default SelectView;
