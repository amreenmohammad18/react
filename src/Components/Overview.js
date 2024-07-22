import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Table } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { LineChart } from '@mui/x-charts/LineChart';

function Overview() {
  const [connectNulls, setConnectNulls] = React.useState(true);
  return (
<div>
       <Row>
        <div className='main'>
        <Card className='mycard'>
        <h3>Total Hotels</h3>
        <center><h5>500</h5></center>
        </Card>
        <Card className='mycard'>
        <h3>AVG Duration</h3>
        <center><h5>4.5H</h5></center>
        </Card>
        <Card className='mycard'>
        <h3>Total </h3>
        <center><h5>700</h5></center>
        </Card>
        </div>
        </Row>
        
        <Row>
          <Col sm={6}>
        <Card className='mycard'>
                <h3>BOOKINGS EVERY YEAR</h3>
         <Table hover> 
            <thead>
               
                    <th style={{border:0}}>YEAR</th>
                    <th style={{border:0}}>CANCELLED</th>
                    <th style={{border:0}}>SUCCESS</th>
                    <th style={{border:0}}>PENDING</th>
            </thead>
            <tbody>
            <tr>
                    <td style={{border:0}}>2020</td>
                    <td style={{border:0}}>40</td>
                    <td style={{border:0}}>25</td>
                    <td style={{border:0}}>20</td>
                </tr>
            <tr>
                    <td style={{border:0}}>2021</td>
                    <td style={{border:0}}>15</td>
                    <td style={{border:0}}>30</td>
                    <td style={{border:0}}>20</td>
                </tr>
                <tr>
                    <td style={{border:0}}>2022</td>
                    <td style={{border:0}}>5</td>
                    <td style={{border:0}}>40</td>
                    <td style={{border:0}}>20</td>
                </tr>
                <tr>
                    <td style={{border:0}}>2023</td>
                    <td style={{border:0}}>3</td>
                    <td style={{border:0}}>35</td>
                    <td style={{border:0}}>10</td>
                </tr>
                <tr>
                    <td style={{border:0}}>2024</td>
                    <td style={{border:0}}>4</td>
                    <td style={{border:0}}>45</td>
                    <td style={{border:0}}>15</td>
                </tr>
            </tbody>
         </Table>
         </Card>
         </Col>
         <Col sm={6}>
         <Card className='mycard'>
            <h3>WEATHER FORECAST</h3>
            <Table hover>
                <thead>
                    <th style={{border:0}}>DATE</th>
                    <th style={{border:0}}>TEMP</th>
                    <th style={{border:0}}>WIND SPEED</th>
                    <th style={{border:0}}>CITY</th>
                </thead>
                <tbody>
                  <tr>
                    <td style={{border:0}}>20-04-2024</td>
                    <td style={{border:0}}>40Celsius</td>
                    <td style={{border:0}}>19KMH</td>
                    <td style={{border:0}}>HYD</td>
               </tr>
                <tr>
                <td style={{border:0}}>25-04-2024</td>
                <td style={{border:0}}>35Celsius</td>
                <td style={{border:0}}>23KMH</td>
                <td style={{border:0}}>DEL</td>
                </tr>
                <tr>
                <td style={{border:0}}>01-05-2024</td>
                <td style={{border:0}}>45Celsius</td>
                <td style={{border:0}}>25KMH</td>
                <td style={{border:0}}>GJT</td>
                </tr>
                <tr>
                <td style={{border:0}}>05-05-2024</td>
                <td style={{border:0}}>36Celsius</td>
                <td style={{border:0}}>30KMH</td>
                <td style={{border:0}}>PUB</td>
                </tr>
                <tr>
                <td style={{border:0}}>12-05-2024</td>
                <td style={{border:0}}>43Celsius</td>
                <td style={{border:0}}>27KMH</td>
                <td style={{border:0}}>BOM</td>
                </tr>
              
                </tbody>
            </Table>
        </Card>
        </Col>
        </Row>
        <div>
          <Row>
            <Col sm={12}>
              <Card>
                <h3>OVERVIEW OF FLIGHTS GRAPHICALLY</h3>
                <Stack sx={{ width: '100%' }}>
      <FormControlLabel
        checked={connectNulls}
        control={
          <Checkbox onChange={(event) => setConnectNulls(event.target.checked)} />
        }
        label="connectNulls"
        labelPlacement="end"
      />
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16, 18, 20] }]}
        series={[
          {
            data: [2, 5, 6.5, 3, 8, 10, 9.5, 2.5, 6, 10, 8],
          },
          {
            data: [null, null, 5.5, 2, null, null, 8.5, 1.5, 5],
            connectNulls,
            area: true,
          },
        ]}
        height={100}
        margin={{ top: 10, bottom: 20 }}
        skipAnimation
      />
    </Stack>
              </Card>
            </Col>
          </Row>
        </div>
        </div>
    
  )
}

export default Overview