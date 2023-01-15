import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchIcon from '@mui/icons-material/Search';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import './Header.css';
import { Avatar } from '@mui/material';
import profile from '../Components/assets/profile.jpg'
import Sidebar from './Sidebar';
const Header = () => {
  return (
    <>

      <div className="header_main ">
      
        <Row>
          <Col>
            <div className="d-flex align-items-center">
              <FacebookRoundedIcon className='fs-1 mt-1' color="primary" />
              <div className="Header">
                <div className="input">
                  <input placeholder='Search Facebook' type="text" />
                  <SearchIcon className='fs-5 ' style={{ color: '#65676B', marginRight: "0.2rem" }} />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="header_center mt-2">
              <div className="header_icon_active">
                <HomeIcon />

              </div>
              <div className="header_icon">
                <FlagIcon />

              </div>
              <div className="header_icon">
                <SubscriptionsIcon />

              </div>
              <div className="header_icon">
                <StorefrontIcon />
              </div>
              <div className="header_icon">
                <SupervisedUserCircleIcon />
              </div>
              <div className="header_icon">

              </div>

            </div>
          </Col>
          <Col>
            <div className="profile_main d-flex align-items-center justify-content-around pt-1">
              <div className="profile_icon_avatar ">
                <Avatar  sx={{ height: '35px', width: '35px' }} src={profile} />
                
              </div>
              <div className="profile_icon">
                <AddIcon />
              </div>
              <div className="profile_icon">
              <ForumIcon/>

              </div>
              <div className="profile_icon">
                <NotificationsActiveIcon />
              </div>
            
              <div className="profile_icon">
                <ArrowDropDownIcon />
              </div>
            </div>
          </Col>
        </Row>
    
        
  
      </div>
 
 


    </>


  )
}

export default Header