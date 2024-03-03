import React from 'react';
import { Link } from 'react-router-dom';	
import "../styles/pn.css"


const PN = () => {
  return (
    <div>
      <h1>Compétences du programme national</h1>
      <div className='competences-container'>
        <Link to="/projects" style={{textDecoration: 'none'}}>
          <div className='competence1'>
              <p>Adapter des applications sur un ensemble des supports</p>
          </div>
        </Link>

      <Link to="/projects" style={{textDecoration: "none"}}>
          <div className='competence2'>
              <p>Analyser et optimiser des applications</p>
          </div>
      </Link>

      <Link to="/projects2" style={{textDecoration: 'none'}}>
        <div className='competence3'>
            <p>Manager une équipe informatique</p>
        </div>
      </Link>
      </div>
    </div>
  )
}



export default PN;