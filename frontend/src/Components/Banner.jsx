import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stories from './Stories';
import Feed from './Feed';
import Post from './Post';
import avatar from '../Components/assets/junaid.jpg'

const Banner = () => {
  const [junior ,setJunior]=useState(false)
  const [junior2,setJunior2]=useState(false)
  return (
    <>
      <div className="banner mt-2">
        <div className="sidebar_main">






        <h5>
          hello this is junior code and changes 
        </h5>
         <h5>
          hello this is junior2 code and changes 
        </h5>
          <Row>
            <Col md={3} sm={3} >
              <Sidebar />
            </Col>
            <Col xs={12} md={6} className="text-center">
              <Stories />
              <Feed />
              <Post 
              avatar={avatar}
              name=" Muhammad Junaid"
              date="2 june, 2017"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia quam aliquam animi magni consectetur laborum adipisci tempore nam sapiente! Eaque quod illo nam id. Placeat ducimus tenetur eius consectetur nisi molestiae modi veniam rerum odit! Consectetur perspiciatis quaerat delectus"

               />
            </Col>
            <Col xs={6} md={3}>
              <div id="fb-root"></div>

              {/* <!-- Your embedded video player code --> */}
              <div class="fb-video" data-href="https://www.facebook.com/facebook/videos/10153231379946729/" data-width="500" data-show-text="false">
                <div class="fb-xfbml-parse-ignore">
                  <blockquote cite="https://www.facebook.com/facebook/videos/10153231379946729/">
                    <a href="https://www.facebook.com/facebook/embed/videos/10153231379946729/">How to Share With Just Friends</a>
                    <p>How to share with just friends.</p>
                    Posted by <a href="https://www.facebook.com/facebook/">Facebook</a> on Friday, December 5, 2014
                  </blockquote>
                </div>
                <div class="embed-responsive embed-responsive-16by9 ">
                  <iframe src="https://www.youtube.com/embed/watch?v=7CqJlxBYj-M&t=446" frameborder="0"></iframe>
                </div>
                <div class="embed-responsive embed-responsive-16by9 ">
                  <iframe class="embed-responsive-item mt-4" src="https://www.youtube.com/embed/P3RiSG77HV8" ></iframe>
                </div>
              </div>
             
            </Col>

          </Row>

        </div>
      </div>
    </>
  )
}

export default Banner