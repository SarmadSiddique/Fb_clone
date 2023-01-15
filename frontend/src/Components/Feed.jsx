import React from 'react'
import { Avatar } from '@mui/material'

import { useState } from 'react';
import './Feed.css';
import profile from '../Components/assets/profile.jpg'
import VideocamIcon from '@mui/icons-material/Videocam';
import CollectionsIcon from '@mui/icons-material/Collections';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const style = {
  position: 'absolute',
  top: '50%',
  left: "48%",
  transform: 'translate(-50%, -50%)',
  width: 650,
  height:430,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Feed = (prop) => {
  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value , setvalue]=useState("");
    const func=(e)=>{
      e.preventDefault()
      setvalue(e.target.value)
      console.log(e.target.value)
    }
    const submit=(e)=>{
      alert(value)


    }
      
  return (
    <> 
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            <h4 className='text-center'>Create post</h4>
          </Typography>
          <hr />
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <div className="d-flex align-items-center poster">
            <Avatar src={profile}/>
            <span className='ml-2'>Sarmad Jutt</span>
  
            </div>
            <form onSubmit={submit}>
            <span className='p-2'>  <input type="text" placeholder="What's on your mind, Sarmad?" onChange={func} /></span>
    
    <button className='btn btn-block btn-primary w-100 ' onClick={submit}>Post</button>
            </form>
          

          </Typography>
        </Box>
      </Modal>
    <div className="feed row d-flex align-items-center">
        <div className="col-md-1">
        <Avatar sx={{ height: '30px', width: '30px' }} src={profile}/>

        </div>
        <div className="col-md-7 whats_upp">
        <input type="text" placeholder= "What's on Your Mind, Sarmad? "/>
    <Button onClick={handleOpen}>Open modal</Button>

        </div>
        <div className="col-md-2 file">
        <input type="file" />

        </div>
<div className="activities">
  <div className="d-flex justify-content-around align-items-center ">
<div className="video">
  <VideocamIcon className='fs-2'  style={{ color: '#E73F5A', marginRight: "0.2rem"  }}/>
  <span>Live Video</span>
</div>
<div className="photo">
  <CollectionsIcon style={{ color: '#41B35D', marginRight: "0.2rem"  }}/>
  <span>Photo/Video</span>

</div>
<div className="activity">
  <SentimentSatisfiedAltIcon style={{ color: '#ECC058', marginRight: "0.2rem"  }}/>
  <span>Feeling/Ativities</span>
</div>
  </div>
</div>
    </div>
    </>
  )
}

export default Feed