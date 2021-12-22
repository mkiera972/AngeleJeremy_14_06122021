import Form from "../../components/Form/Form";
const CreateEmployee = (props) => {
    console.log(props)
    return(
        <main id="main" style={{marginLeft:props.style.main}}>
            <div className="container" >
                <Form/>
            </div>
        </main>
    )
}

export default CreateEmployee;