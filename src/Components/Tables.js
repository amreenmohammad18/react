import React from 'react'
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { Link } from 'react-router-dom';

import { BarChart } from '@mui/x-charts/BarChart';
const chartSetting = {
  xAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 500,
  height: 400,
};
const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'Fev',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: 'Mar',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'Apr',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: 'July',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: 'Aug',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: 'Sept',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: 'Oct',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: 'Nov',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: 'Dec',
  },
];

const valueFormatter = (value) => `${value}mm`;

function Tables() {
  return (
    <div>
            <Row>
                <Col sm={8}>
                    <h4 className='mt-3'>RESULTS</h4>
     <Table striped="columns" className='mytab'>

      <tbody>
        <tr>
          <td><img className='img1' src={'https://i.pinimg.com/564x/e4/02/84/e4028438fa0e5152cd97f7faa812353b.jpg'}/></td>
          <td>EMIRATES</td>
          <td>NYK<br/>TO<br/>BOM</td>
          <td>11H 20M</td>
          <td>$1572<br/>
            <button className='btn btn-outline-success'>BOOK NOW</button></td>
        </tr>
        <tr>
          <td><img className='img2' src={'https://i.pinimg.com/564x/b4/59/da/b459da8df5ce916b17280a16f51840fe.jpg'}/></td>
          <td>QATAR</td>
          <td>JHK<br/>TO<br/>BOM</td>
          <td>12H 50M</td>
          <td>$2500<br/>
          <button className='btn btn-outline-success'>BOOK NOW</button></td>
        </tr>
        <tr>
          <td><img className='img3' src={'https://i.pinimg.com/736x/ba/20/e1/ba20e12046190ea196c88c4a088cce1d.jpg'}/></td>
          <td>SINGAPORE AIRLINES</td>
          <td>BOM<br/>TO<br/>DUBAI</td>
          <td>15H 40M</td>
          <td>$3000<br/>
          <button className='btn btn-outline-success'>BOOK NOW</button></td>
        </tr>
        <tr>
          <td><img className='img4' src={'https://i.pinimg.com/564x/91/37/09/913709c8027990ce9831efa1dd44f07c.jpg'}/></td>
          <td>ETHIHAD</td>
          <td>DEL<br/>TO<br/>NYK</td>
          <td>13H 10M</td>
          <td>$1400<br/>
          <button className='btn btn-outline-success'>BOOK NOW</button></td>
        </tr>
      </tbody>
    </Table>
    </Col>
   <Col sm={4}>
  



  
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
      layout="horizontal"
      grid={{ vertical: true }}
      {...chartSetting}
    />
  
   </Col>
    </Row>
    </div>
  )
}
export default Tables
