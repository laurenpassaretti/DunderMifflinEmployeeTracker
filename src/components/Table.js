import React from 'react'; 
import Table from 'react-bootstrap/Table';
import EmployeeData from "../employees.json"

const useSortableData = (items,config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config); 

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

    const {items, requestSort, sortConfig} = useSortableData(props.officeWorkers); 
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return; 
        }
        return sortConfig.key === name ? sortConfig.direction : undefined; 
    };
    
    return (
        <Table>

            <thead>
            <tr>
        <th><button>Image</button></th>
       <th><button type="button" onClick={() => requestSort('name')} className ={getClassNamesFor('name')}>Name</button></th>
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
                            <td>{item.name}</td>
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

export default function App () {
    return (
        <div className="App">
            <EmployeeTable
            officeWorkers = {EmployeeData}
            />
        </div>
    ); 
}