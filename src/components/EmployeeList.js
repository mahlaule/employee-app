import { async } from "@firebase/util";

import {Table, Button} from "react-bootstrap";
import  EmployeeDataService from "../services/Employee.services";
import React, {useEffect, useState} from "react";
import { doc } from "firebase/firestore";



const EmployeeList = ({getEmployeeId}) =>{
    const[Employees, setEmployees] = useState([]);
    useEffect(()=>{
        getEmployees();

    }, []);
    const getEmployees =async()=>{
        const data = await EmployeeDataService.getAllEmployess();
        console.log(data.docs);
        setEmployees(data.docs.map((doc)=>({...doc.data(),id: doc.id})))


    
};
const deleteHandler = async(id)=>{
    await EmployeeDataService.deleteEmployee(id);
    getEmployees();
}

return(



<div>
    <>
    
    
    <Table stripped bordered hover size="sm">
        <thead>
<tr>

<th>#</th>
<th>name</th>
<th>firstName</th>
<th>surname</th>
<th>email</th>
<th>status</th>


</tr>
</thead>
<tbody>
    {Employees.map((doc, index)=>{
        return(
<tr key={doc.id}>
        <td>{index + 1}</td>
        <td>{doc.name}</td>
        <td>{doc.firstName}</td>
        <td>{doc.surname}</td>
        <td>{doc.email}</td>
        <td>{doc.status}</td>
        <td>
            <Button variant = "secondary" className="edit" onClick ={(e)=>getEmployeeId(doc.id)}>
                Edit
            </Button>
            <Button variant = "danger" className="delete"onClick ={(e)=>deleteHandler(doc.id)} >
                delete
            </Button>

            </td>
            </tr>

        )
    })}
    
        
</tbody>
</Table>
    
    </>
   
</div>



)


}



export default  EmployeeList;