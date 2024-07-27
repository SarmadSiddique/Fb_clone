import React from 'react'
import { Avatar } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReplyIcon from '@mui/icons-material/Reply';
const Post = ({ avatar, name, date, content }) => {
    return (
        <>
            <div className="post">

            </div>
            <div className="post ">
                <div className="post_profile d-flex align-items-center ">
                    <Avatar src={avatar} />
                    <div className='mx-2  d-flex flex-column align-items-start' style={{ color: "black" }}>
                        <span className='fs-5'>
                            {name}
                        </span>
                        <span className='date'>
                            {date}
                        </span>
                    </div>
                </div>
                <div className="post_mid p-2">
                    <div className="content">
                        {content}
                    </div>
                    <hr />
                    <div className="post_reactions d-flex justify-content-around" style={{ color: "#606266" }}>
                        <div className="like d-flex align-items-center " >
                            <ThumbUpOffAltIcon />
                            <span >Like</span>
                        </div>
                        <div className="comment d-flex align-items-center">
                            <ChatBubbleOutlineIcon />
                            <span>Comment</span>
                        </div>
                        <div className="share d-flex align-items-center justify-content-between ">
                            <ReplyIcon />
                            <span >Share</span>
                        </div>
                        <div className="user d-flex align-items-center justify-content-between ">
                            <Avatar src={avatar} sx={{ height: '25px', width: '25px' }} />
                            <ArrowDropDownIcon />
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Post