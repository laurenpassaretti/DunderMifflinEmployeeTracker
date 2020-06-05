import React from 'react'; 
import Table from 'react-bootstrap/Table';
import EmployeeData from "../employees.json"

const useSortableData = (items,config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config); 
console.log("Use Sort Data items", items)
    const sortedItems =  React.useMemo(() => {
        let sortedOfficeWorkers = [...items]; 
        if (sortConfig !== null){
            sortedOfficeWorkers.sort((a,b) => {
                if (a[sortConfig.key] < b[sortConfig.key]){
                    return sortConfig.direction === 'ascending' ? -1:1; 
                }
                if (a[sortConfig.key] > b[sortConfig.key]){
                    return sortConfig.direction === 'ascending' ? 1:-1; 
                }
                return 0; 
            }); 
        }
    return sortedOfficeWorkers; 
    }, [items, sortConfig]);  


const requestSort = (key) => {
    let direction = 'ascending'; 
    if ( 
        sortConfig && 
        sortConfig.key === key && 
        sortConfig.direction === 'ascending'
        ){
        direction = 'descending'; 
    }
    setSortConfig({ key,direction })
}; 
return { items: sortedItems, requestSort, sortConfig}; 
};

const EmployeeTable = (props) => {
console.log("EmployeeTable props", props)
    const {items, requestSort, sortConfig} = useSortableData(props.officeWorkers); 
    const getClassNamesFor = (lastName) => {
        if (!sortConfig) {
            return; 
        }
        return sortConfig.key === lastName ? sortConfig.direction : undefined; 
    };
    
    return (
        <Table>

            <thead>
            <tr>
        <th><button>Image</button></th>
       <th><button type="button" onClick={() => requestSort('lastName')} className ={getClassNamesFor('lastName')}>Name</button></th>
       <th><button type="button" onClick={() => requestSort('phone')} className ={getClassNamesFor('phone')}>Phone</button></th>
       <th><button type="button" onClick={() => requestSort('email')} className ={getClassNamesFor('email')}>Email</button></th>
        <th><button type="button" onClick={() => requestSort('dob')} className ={getClassNamesFor('dob')}>DOB</button></th>

        </tr>
            </thead>
            <tbody>
                {items.map(item => {
                    return (
                    <tr key = {item.id}>
                         <td><img alt="employee badge"src={item.image} style={{width:"150px",height:"auto"}}/></td>
                    <td>{item.firstName} {item.lastName}</td>
                             <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.dob}</td>


                    </tr>
                )
                })}
            </tbody>
        </Table>
    ); 
}; 

export default function App (props) {
    console.log("Render props", props)
    return (
        <div className="App">
            <EmployeeTable
            officeWorkers = {props.filterEmployees.length > 0 ? props.filterEmployees: EmployeeData}
            // officeWorkers = {EmployeeData}
            />
        </div>
    ); 
}