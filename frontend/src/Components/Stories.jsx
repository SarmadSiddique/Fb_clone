import React from 'react'
import StoryReels from './StoryReels'
import reel1 from '../Components/assets/reel1.jpg'
import reel2 from '../Components/assets/reel2.jpg'
import reel3 from '../Components/assets/reel3.jpg'
// import junaid from '../Components/assets/junaid.jpg'

function Stories() {
    return (
        <>
            <div className="d-flex flex-md-row flex-sm-column justify-content-center ">
                <div className="px-1">
                    <StoryReels
                     img={reel2}
                    //  profilesrc={junaid}
                     title=""
                      />

                </div>
                <div className="px-1">
                    <StoryReels
                     img={reel1}
                    //  profilesrc="jhoisadnjkfawe"
                     title=""
                      />

                </div>
                <div className="px-1">
                    <StoryReels
                     img={reel3}
                    //  profilesrc="arhafuioejrio"
                     title=""
                      />

                </div>

            </div>



        </>)
}

export default Stories