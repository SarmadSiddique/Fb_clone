import React from 'react'
import './Stories.css'

function StoryReels({img,profilesrc}) {
  return (
    <>
    <div className="reels" style={{backgroundImage:`url(${img})`}}>
      <div>
      {profilesrc && profilesrc}

      </div>

   </div>
    <div></div>
    </>
  )
}

export default StoryReels