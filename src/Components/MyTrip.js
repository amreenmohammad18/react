import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Person2Icon from '@mui/icons-material/Person2';
import FlightClassIcon from '@mui/icons-material/FlightClass';
import Tables from './Tables';

function MyTrip() {
  return (
    <div>
      <Container>
        <div className='main'>
        <div><h3><LocationOnIcon/>Europe</h3></div>
        <div><h3><LocationOnIcon/>NEW YORK</h3></div>
        <div><h3><LocationOnIcon/>PARIS</h3></div>
        </div>
    
        
      </Container>
      <Tables />
    </div>
  )
}

export default MyTrip