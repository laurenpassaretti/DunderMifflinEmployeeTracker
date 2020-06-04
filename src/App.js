import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import EmployeeTable from "./components/Table"
import SearchBar from "./components/SearchBar"
import EmployeeList from "./employees.json"
import Table from 'react-bootstrap/Table'


class App extends Component{

  state = {
    employees: EmployeeList,
    filteredEmployees: [],
    search: ""
  }

 filterEmployees = (e) => {
  this.setState({
    ...this.state,
    search: e.target.value
 })

 employees.filter((employee) => {
   // if employees name doesnt start with this letters or letters dont include
 })
}

 
  
  render() {
    console.log(this.state.EmployeeList)
    return (
      <div className="App">
        <Header />
        <SearchBar searchProp={this.state.search} filterFunctionProp = {this.filterEmployees} />
        <EmployeeTable/>

      </div>
    );
  }
}


export default App;
