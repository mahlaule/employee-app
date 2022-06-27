import React, {useState} from "react";


const AddEmployee =()=>{
    const [name, setName]= useState("");
    const  [firstName, setfirstName]= useState("");
    const [surname, setSurname]= useState("");
    const [email, setEmail]= useState("");
    const [status, setStatus]= useState("permanent");
    const [flag, setFlag]=useState("true");
    const [message, setMessage] = useState({error:false, msg:""})

    const handleSubmit =async (e)=>{
        e.preventDefault();
        setMessage("");
        if(name === "" || firstName ===""){

            setMessage({error:true, msg:"all fields are mandatory"});
            return;
        }
        const newEmployee = {
            name,
            firstName,
            surname,
            email,
            status
        };
        console.log(newEmployee)
    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label>enter your name
                <input type ="text" placeholder="name" value={name}onchange={(e)=>setName(e.target.value)}/><br></br>
                </label>
                <label>enter FirstName
                <input type ="text" placeholder="name" value={surname}onchange={(e)=>setfirstName}/><br></br>
                </label>
                <label>enter Surname
                <input type ="text" placeholder="name" value={name} onchange={(e)=>setName(e.target.value)}/><br></br>
                </label>
                <label>enter email
                <input type ="text" placeholder="name" value={email} onchange={(e)=>setEmail(e.target.value)}/><br></br>
                </label>
                <label>enter status
                <input type ="text" placeholder="name" value={status} onchange={(e)=>setStatus(e.target.value)}/><br></br>
                </label>
                <button id="btn" type="Submit">add/update</button>
            </form>
            
            
                   </div>
    )

    












}


export default AddEmployee;