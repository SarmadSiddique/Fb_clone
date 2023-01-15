import React from 'react'
import { Avatar } from '@mui/material'
import './Sidebar.css'

const SidebarRow = ({ src, title, Icon }) => {
  return (
    <>
      <div className="d-flex justify-content-start  align-items-center">
        {src && <Avatar sx={{ height: '28px', width: '28px' }} src={src} />}
        <div className="sidebar_icons">{Icon && <Icon style={{ width: "1.4rem" }} className="fs-3" />}</div>
        <div className='px-2'>{title}</div>
      </div>
    </>
    
  )
}

export default SidebarRow