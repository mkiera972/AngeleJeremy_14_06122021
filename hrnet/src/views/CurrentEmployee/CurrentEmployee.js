import React from 'react';
import { useSelector } from 'react-redux';
import ReactDatatable from '@mkikets/react-datatable';
import '../../styles/table/table.css';
const CurrentEmployee = () => {
    const employeReducer = useSelector((state) => state.employeReducer);
    const { employes } = employeReducer;
    console.log(employes)
    const columns = [
        {
            key: "firstname",
            text: "First Name",
            sortable: true
        },
        {
            key: "lastname",
            text: "Last Name",
            sortable: true
        },
        {
            key: "dateBirth",
            text: "Date Birth",
            sortable: true
        },
        {
            key: "startDate",
            text: "Start Date",
            sortable: true
        },
        {
            key: "street",
            text: "Street",
            sortable: true
        },
        {
            key: "city",
            text: "City",
            sortable: true
        },
        {
            key: "state",
            text: "Postcode",
            sortable: true
        },
        {
            key: "zipcode",
            text: "Zip Code",
            sortable: true
        }
    ];

    const config = {
        key_column: 'firstname',
        page_size: 10,
        length_menu: [10, 20, 50],
        show_filter: true,
        show_pagination: false,
        button: {
            excel: false,
            print: false
        }
    }
    return(
        <main>
            <div className="container">
                <ReactDatatable config={config} records={employes} columns={columns}/>
            </div>
        </main>
    )
}

export default CurrentEmployee;