import React from "react";
import {
    SiReact,
    SiFirebase,
    SiWordpress,
    SiMysql,
    SiLaravel,
    SiBootstrap,
} from "react-icons/si";

const Projects = () => {
    return (
        <section>
            <div className='sectionContainer aboutBg' id='projects'>
                <h1 className='heading' id='projectsPrompt'>
                    A glimpse of my <span className='keyword'>Projects</span>
                </h1>

                <div className='projectWrapper'>
                    <div className='projectImgContainer'>
                        <img
                            src={require("../images/ticketly.png")}
                            alt=''
                            className='deskView'
                        />
                    </div>

                    <div className='projectInfo'>
                        <h2 className='projectTitle'>Ticketly</h2>
                        <p className='projectDetails'>
                            Ticketly is a helpdesk system that allows user to
                            raise tickets related to website issues. It's built
                            using React on the front-end accompanied by a
                            Firebase back-end.
                        </p>
                        <div className='techStack'>
                            <i className='icon'>
                                <SiReact />
                            </i>
                            <i className='icon'>
                                <SiFirebase />
                            </i>
                        </div>
                        <a
                            className='projectBtn'
                            href='https://github.com/vivyankonjera/ticketly'
                            target='_blank'
                        >
                            View project
                        </a>
                    </div>
                </div>

                <div className='projectWrapper'>
                    <div className='projectImgContainer'>
                        <img
                            src={require("../images/deskmob.png")}
                            alt=''
                            className='deskView'
                        />
                    </div>

                    <div className='projectInfo'>
                        <h2 className='projectTitle'>Jabz Abs</h2>
                        <p className='projectDetails'>
                            A wordpress website built for a client's business
                            needs, Jabz abs is a custom wordpress theme built
                            utilising PHP, JS, HTML and CSS. The site's data is
                            retireved from an SQL database similar to other wp
                            themes.
                        </p>
                        <div className='techStack'>
                            <i className='icon'>
                                <SiWordpress />
                            </i>
                            <i className='icon'>
                                <SiMysql />
                            </i>
                        </div>
                        <a
                            className='projectBtn'
                            href='https://github.com/vivyankonjera/jabzabs'
                            target='_blank'
                        >
                            View project
                        </a>
                    </div>
                </div>

                <div className='projectWrapper'>
                    <div className='projectImgContainer'>
                        <img
                            src={require("../images/fdeskmob.png")}
                            alt=''
                            className='deskView'
                        />
                    </div>

                    <div className='projectInfo'>
                        <h2 className='projectTitle'>Frugal</h2>
                        <p className='projectDetails'>
                            Frugal was developed as part of my web developement
                            module's assessment. It's a full-stack application
                            utilising the MVC architecture. The front-end is
                            comprised of blade templates supported by a Larevel
                            backend.
                        </p>
                        <div className='techStack'>
                            <i className='icon'>
                                <SiBootstrap />
                            </i>
                            <i className='icon'>
                                <SiLaravel />
                            </i>

                            <i className='icon'>
                                <SiMysql />
                            </i>
                        </div>
                        <a
                            className='projectBtn'
                            href='https://github.com/vivyankonjera/frugal'
                            target='_blank'
                        >
                            View project
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
