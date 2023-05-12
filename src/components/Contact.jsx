import React from 'react'
import {SiLinkedin, SiGithub, SiGmail} from 'react-icons/si'

const Contact = () => {
  return (
    <section id='contact'>
      
        <h1 className='heading'><span className='keyword'>Thank you</span> for viewing my portfolio!</h1>
        <h3 id='contactFollowUp'> This doesn't have to be the end, please do not hesitate to <br/> reach out on the following...</h3>

        <div >
          <i className='bannerIcon contactIcon'><SiGmail/></i>
          <i className='bannerIcon contactIcon'><SiGithub/></i>
          <i className='bannerIcon contactIcon'><SiLinkedin/></i>
        </div>


    </section>
  )
}

export default Contact