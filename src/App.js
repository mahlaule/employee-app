


import {useState} from "react";

import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import {Form,Row, Col, Container} from "react-bootstrap";


function App() {
  const [employeeId, setEmployeeId] = useState("");

  const getEmployeeIdHandler = (id) =>{
    console.log("the id of the document to be edited", id);
    setEmployeeId(id);

  };
  return (
    <div className="App">
      <div>
      <Container style ={{width: "400px"}}>
      <Row>
      <Col>
      <AddEmployee/>
      </Col>
      
      </Row>

      </Container>
      <Container>

        
      <Row>
      <Col>
      <EmployeeList getE mployeeId ={getEmployeeIdHandler}/>
     
      </Col>
      
      </Row>
      </Container>
      

      </div>
     </div>
  );
}

export default App;
