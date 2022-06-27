




import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div className="App">
      <div>
      <AddEmployee />
      </div>
      <div>
      <EmployeeList/>

      </div>
     </div>
  );
}

export default App;
