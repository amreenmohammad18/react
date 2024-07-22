import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { BarChart } from '@mui/x-charts/BarChart';
import Cards from './Charts';

function Dashboard() {
  return (
    <>
   <Row>
        <Container className='abcd'>
        <Col sm={2}>
            <h1>Dolphin cruise</h1>
            <p>₹6k</p>
            </Col>
            <Col sm={2}>
           <img src={'https://i.pinimg.com/564x/a2/f7/41/a2f741dba80999d6b5da41e8584bf766.jpg'}/> 
        </Col>
        </Container>
        <Container className='sample'>
        <Col sm={2}>
            <h1>Air India</h1>
            <p>₹10k</p>
            </Col>
            <Col sm={2}>
           <img className='demo1' src={'https://i.pinimg.com/564x/69/97/80/699780710235c0ee61a913328abf928e.jpg'}/> 
        </Col>
        </Container>
        <Container className='sample1'>
        <Col sm={2}>
            <h2>HOTELS</h2>
            <p>₹4k onwords</p>
            
            </Col>
            <Col sm={2}>
           <img className='demo' src={'https://i.pinimg.com/564x/db/56/46/db5646f3e0dc56de39bc46312f605863.jpg'}/>
        </Col>

       <Cards/>
        </Container>
   </Row>
   </>
   
  )
}

export default Dashboard
