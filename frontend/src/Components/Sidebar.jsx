import React from 'react'
import SidebarRow from './SidebarRow'
import src from '../Components/assets/profile.jpg'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Sidebar = (prop) => {
  return (
    <>
      <div className="sidebar d-flex flex-column align-items-start gap-4 ">
       <SidebarRow src={src} title="Sarmad Jutt" />
       <SidebarRow  Icon={LocalHospitalIcon}  title="Covid 19 Information Center" />
       <SidebarRow  Icon={EmojiFlagsIcon} title="Pages"/>
       <SidebarRow  Icon={MessageIcon} title="Messages"/>
       <SidebarRow Icon={PeopleIcon} title="Friends "/>
       <SidebarRow Icon={StorefrontIcon} title="Market "/>
       <SidebarRow Icon={OndemandVideoIcon} title="Videos"/>
       <SidebarRow Icon={ExpandMoreIcon} title="More"/>
      </div>

    </>
  )
}

export default Sidebar