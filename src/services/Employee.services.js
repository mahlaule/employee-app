import {db} from "../firebase-config"
import { collection, getDocs,getDoc,addDoc,updateDoc,deleteDoc, doc } from "firebase/firestore"

const EmployeeCollectionRef = collection(db,"Employee")
class EmployeeDataService{
addEmployees = (newEmployee)=>{

    return addDoc(EmployeeCollectionRef,newEmployee)



}
updateEmployee = (id,updateEmployee) =>{
    const EmployeeDoc = doc(db,"Employee",id);
    return updateDoc =(EmployeeDoc,updateDoc)
};
deleteEmployee = (id)=>{
    const EmployeeDoc = doc(db,"Employee",id);
    return deleteDoc(EmployeeDoc)
};
getAllEmployess =()=>{
    return getDocs(EmployeeCollectionRef);
}
getEmployee = (id)=>{
    const EmployeeDoc = doc(db,"Employee",id);
    return getDoc(EmployeeDoc);
}

}

export default new EmployeeDataService();