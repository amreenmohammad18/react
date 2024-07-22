import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import FlightIcon from '@mui/icons-material/Flight';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import WalletIcon from '@mui/icons-material/Wallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import Icon from './Icon';
function Sidebar() {
  return (
    <div className='Sidebar'>
      <h2>MakeMyTrip</h2>
      <Icon/>
  <ul className='myul'>
    <li><DashboardIcon/><Link to='/react'>Dashboard</Link></li>
    <li><FlightIcon/><Link to='/MyTrip'>MyTrip</Link></li>
    <li><LocalOfferIcon/><Link to='/Bookings'>Bookings</Link></li>
     
     <li><AccountCircleIcon/><Link to='/Overview'>Overview</Link></li>
    
    </ul>      
    </div>
  )
}

export default Sidebar
