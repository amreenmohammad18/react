import React, { startTransition } from 'react'
import './App.css';
import Sidebar from './Components/Sidebar'; 
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dashboard from './Components/Dashboard'; 
import Reports from './Components/Reports';
import MyTrip from './Components/MyTrip';
import Bookings from './Components/Bookings';
import Overview from './Components/Overview';
import Icon from './Components/Icon';
function App() {
  return (
    <>
    <Router>
        <Row>
            <Col sm={2}><Sidebar/></Col>
            <Col sm={10}>
                <Routes>
                 <Route path='/react' exact Component={Dashboard}/>
                  <Route path ='/Reports' exact Component={Reports}/>
                  <Route path='/MyTrip'exact Component={MyTrip}/>
                  <Route path='/Bookings'exact Component={Bookings}/>
                  <Route path='/Overview'exact Component={Overview}/> 
                  <Route path='/Icon'exact Component={Icon}/> 
                </Routes>
                </Col>
        </Row>
    </Router>
    </>
    
      


  )
}
export default App
