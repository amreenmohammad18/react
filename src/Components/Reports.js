import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import Table from 'react-bootstrap/Table';
function Reports() {
  return (
    <div>
      <Row>
        <Col sm={4}>
        <h3>PERFORMANCE</h3>
        <LineChart
  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
  series={[
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
      area: true,
    },
  ]}
  width={400}
  height={250}
/>
        </Col>
        <Col sm={8} className='col1'>
            <h3>ALL BOOKINGS</h3>
        
            <BarChart
      series={[
        { data: [3, 4, 1, 6, 5], stack: 'A', label: 'NEW YORK' },
        { data: [4, 3, 1, 5, 8], stack: 'A', label: 'LONDON' },
        { data: [4, 2, 5, 4, 1], stack: 'B', label: 'SINGAPORE' },
        { data: [4, 6, 2, 3, 5], stack: 'B', label:'EUROPE'},
      ]}
      width={500} 
      height={260}
    />

        </Col>
      </Row>
      <Row>
        <Col sm={12}>
            <Table>
            <thead>
                <th>NAME</th>
                <th>DATE</th>
                <th>BOOKING ID</th>
                <th>FLIGHT</th>
                <th>DEPARTURE TIME</th>
                <th>ARRIVAL TIME</th>
                </thead>
                <tbody>
                    <tr>
                        <td>ALEX</td>
                        <td>12-05-2025</td>
                        <td>EF12345678</td>
                        <td>ETHIHAD</td>
                        <td>11:20PM</td>
                        <td>10:30AM</td>
                    </tr>
                    <tr>
                        <td>DAVID</td>
                        <td>22-09-2025</td>
                        <td>AF12345678</td>
                        <td>EMIRATES</td>
                        <td>09:00AM</td>
                        <td>12:00AM</td>
                    </tr>
                    <tr>
                        <td>SANE</td>
                        <td>06-12-2025</td>
                        <td>AI12345678</td>
                        <td>AIR INDIA</td>
                        <td>12:00PM</td>
                        <td>09:00AM</td>
                    </tr>
                    <tr>
                        <td>PRAJATI</td>
                        <td>31-06-2025</td>
                        <td>SJ12345678</td>
                        <td>SPICEJET</td>
                        <td>08:00PM</td>
                        <td>12:00AM</td>
                    </tr>
                    </tbody>
                </Table>
        </Col>
      </Row>
    </div>
  )
}

export default Reports