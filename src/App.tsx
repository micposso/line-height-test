import { useState } from 'react'
import './assets/styles.css'

function App() {

  return (
    <div className="header-container">
      <div className="card-container">
        <div className="contract-type">
          <p>Total in-force Contracts</p>
        </div>
        <div className="contract-amount">50</div>
      </div>
      <div className="card-container">
        <div className="contract-type">
          <p>Pending Contracts</p>
        </div>
        <div className="contract-amount">4</div>
      </div>
      <div className="card-container">
        <div className="contract-type">
          <p>Death Pending Contracts</p>
        </div>
        <div className="contract-amount">1</div>
      </div>
    </div>
  );
}

export default App
