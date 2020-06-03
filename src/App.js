import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import EmployeeTable from "./components/Table"
import SearchBar from "./components/SearchBar"
import Employee from "./employees.json"
import Table from 'react-bootstrap/Table'


class App extends Component{

  state = {Employee}
  
  render() {
    console.log(this.state.Employee)
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <EmployeeTable/>

      </div>
    );
  }
}


export default App;
