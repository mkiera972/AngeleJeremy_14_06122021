import Select from 'react-select';

const SelectView = (props) => {
    const onChangeInput = data => {
        props.setNewEmployee((state) => ({
          ...state,
          [props.id]: data.label
        }));
        console.log(data)
    }
    return (
        <Select id={props.id} onChange={(data) => onChangeInput(data)} options={props.data} />
    )
};
export default SelectView;
