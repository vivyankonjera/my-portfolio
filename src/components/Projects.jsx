import React from 'react'

const Projects = () => {
  return (
    <section id='projects'>
        <div className='sectionContainer aboutBg'>
        <h1 className="heading" id="projectsPrompt">
          A glimpse of my <span className="keyword">Projects</span>... 
        </h1>

            <div className='projectWrapper'>
                
                 
                  <img src={require('../images/deskmob.png')} alt="" className='deskView' />
                  <img src={require('../images/mobView.png')} alt="" className='mobView' />
              
            </div>

            <div className='projectWrapper'>

                  
                  <img src={require('../images/fdeskmob.png')} alt="" className='deskView' />
                  <img src={require('../images/fmobView.png')} alt="" className='mobView' />
                  
                  
            </div>
            
        </div>
    </section>
  )
}

export default Projects