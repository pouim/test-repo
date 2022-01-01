import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Buyflow, { ProductIds } from './buyflow/Buyflow'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance_dev">
            <Buyflow productId={ProductIds.devIns} />
          </Route>

          <Route path="/buy/insurance_des">
            <Buyflow productId={ProductIds.desIns} isDesignerInsurance />
          </Route>

          <Route path="/">
            <p>Welcome to Getsafe's Developer & Designer Insurance</p>
            <Link to="/buy/insurance_dev">Developer Insurance</Link>
            <br />
            <Link to="/buy/insurance_des">Design Insurance</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
