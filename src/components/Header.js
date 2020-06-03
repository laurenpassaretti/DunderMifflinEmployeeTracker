import React from 'react'; 
import "../styles/Header.css"; 
import Jumbotron from 'react-bootstrap/Jumbotron'

function Header(props){
    return(
       
        <Jumbotron className="jumbotron">
          <h1>Dunder Mifflin Scranton</h1>
          <h2>Employee Directory{props.children}</h2>
        
        </Jumbotron>
      
       
    )
}

export default Header; 