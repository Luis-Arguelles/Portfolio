import React from 'react';
import "../styles/pn.css"


const PN = () => {
  return (
    <div>
      <h1>Compétences du programme national</h1>
      <div className='competences-container'>
        <div className='competence1'>
            <p>Adapter des applications sur un ensemble des supports</p>
        </div>
        <div className='competence2'>
            <p>Analyser et optimiser des applications</p>
        </div>
        <div className='competence3'>
            <p>Manager une équipe informatique</p>
        </div>
      </div>
    </div>
  )
}



export default PN;