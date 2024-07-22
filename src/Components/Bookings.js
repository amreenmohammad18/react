import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import Table from 'react-bootstrap/Table';
import { PieChart } from '@mui/x-charts/PieChart';
import { Link } from 'react-router-dom';
function Bookings() {
  const data = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
  ];
  
  return (
    <div>
      <Row>
        <Col sm={4}>
        <h3>PERFORMANCE</h3>
        <Link to ='/Graphs'><LineChart
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
</Link>
        </Col>
        <Col sm={8} className='col1'>
            <h3>ALL BOOKINGS</h3>
        
            <Link to ='/Graphs1'><BarChart
      series={[
        { data: [3, 4, 1, 6, 5], stack: 'A', label: 'NEW YORK' },
        { data: [4, 3, 1, 5, 8], stack: 'A', label: 'LONDON' },
        { data: [4, 2, 5, 4, 1], stack: 'B', label: 'SINGAPORE' },
        { data: [4, 6, 2, 3, 5], stack: 'B', label:'EUROPE'},
      ]}
      width={500} 
      height={200}
    />
    </Link>

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
            <Row>
                <Col sm={6}>
                  <h3>REPORTS</h3>
                <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
        },
        {
          data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
        },
        {
          data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
          valueFormatter: (value) => (value == null ? '?' : value.toString()),
        },
      ]}
      height={100}
      width={500}
      margin={{ top: 10, bottom: 20 }}
    />
                </Col>
                <Col sm={6} className='pie'>
                <h2>INFORMATION</h2>
                <PieChart
  series={[
    {
      data,
      highlightScope: { faded: 'global', highlighted: 'item' },
      faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
    },
  ]}
  height={100}
/>
                </Col>
            </Row>
    </div>
  )
}

export default Bookings