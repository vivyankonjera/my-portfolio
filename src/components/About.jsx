import React from 'react'
import {SiJavascript, SiCss3, SiHtml5, SiReact, SiAdobephotoshop, SiAdobexd} from 'react-icons/si'


const About = () => {
  return (
    <section id='about'>
      <div className='sectionContainer aboutBg'>
        <div className='border'></div>
          <h1 className='heading'>Allow me to <span className='keyword'>introduce</span> myself...</h1>
          <p id='aboutText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et risus at purus feugiat porttitor. Sed fermentum nisi ut nibh luctus, quis feugiat sapien cursus. Etiam eu venenatis magna. Vivamus sed volutpat lacus. Nulla efficitur neque tortor, a vulputate enim pellentesque sed. Curabitur tincidunt dolor sollicitudin nunc tincidunt aliquam. Etiam placerat et tellus sit amet faucibus. Curabitur venenatis dolor et ex interdum ullamcorper. Nam nulla ipsum, tincidunt et sem ut, eleifend ultrices nisi. Quisque vehicula metus neque, et consectetur enim elementum sit amet. Nunc consequat ligula vel metus dapibus, vitae ornare velit commodo. Mauris vitae tempus nunc.</p>
          <div id='aboutIcons'>

              <i className='icon'><SiReact/></i>
              <i className='icon'><SiJavascript/></i>
              <i className='icon'><SiHtml5/></i>
              <i className='icon'><SiCss3/></i>
              <i className='icon'><SiAdobephotoshop/></i>
              <i className='icon'><SiAdobexd/></i>
          </div>
          <div id ='aboutBtns'>
              <a href="#experience"><button className='aboutBtn'>Learn more</button></a>
              <div id='btnSeperator'></div>
              <a href="#contact"><button className='aboutBtn'>Get in touch</button></a>
          </div>
      </div>
    
    
    </section>

  )
}

export default About