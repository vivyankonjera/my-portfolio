import React from "react";
import {
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiReact,
    SiAdobephotoshop,
    SiAdobexd,
    SiLinkedin,
    SiGmail,
    SiGithub,
} from "react-icons/si";

const About = () => {
    return (
        <>
            <section className='sectionContainer' id='intro'>
                <div className='introWrapper'>
                    <div className='introLeft'>
                        <div className='centreIntro'>
                            <h1 id='name'>Vivya Nkonjera</h1>
                            <h2 id='title'>Web developer</h2>
                            {/* <i className='bannerIcon'>
                                <SiLinkedin />
                            </i> */}
                            <a
                                href='https://github.com/vivyankonjera?tab=repositories'
                                target='_blank'
                            >
                                <i className='bannerIcon'>
                                    <SiGithub />
                                </i>
                            </a>
                            <a href='mailto:vivyajera@gmail.com'>
                                <i className='bannerIcon'>
                                    <SiGmail />
                                </i>
                            </a>
                        </div>
                    </div>

                    <div className='introRight'></div>
                </div>

                <div className='aboutBg'>
                    <div className='border'></div>
                    <h1 className='heading'>
                        Allow me to <span className='keyword'>introduce</span>{" "}
                        myself
                    </h1>
                    <p id='aboutText'>
                        My love for design along with an inclination for problem
                        solving has driven my desire for creating immersive and
                        enagaging digital experiences. I've found myself on a
                        perpertual journey of continuous growth and improvement
                        within web developement, as I aspire to stay at the
                        forefront of this dynamic field. Beginning my journey
                        studying Computing at University, to working as an email
                        developer, to developing my own personal projects. As a
                        result I've attained a good understanding with the
                        following technologies...
                    </p>
                    <p id='aboutText'></p>
                    <div id='aboutIcons'>
                        <i className='icon'>
                            <SiReact />
                        </i>
                        <i className='icon'>
                            <SiJavascript />
                        </i>
                        <i className='icon'>
                            <SiHtml5 />
                        </i>
                        <i className='icon'>
                            <SiCss3 />
                        </i>
                        <i className='icon'>
                            <SiAdobephotoshop />
                        </i>
                        <i className='icon'>
                            <SiAdobexd />
                        </i>
                    </div>
                    <div id='aboutBtns'>
                        <a href='#experience'>
                            <button className='aboutBtn'>Learn more</button>
                        </a>
                        <div id='btnSeperator'></div>
                        <a href='mailto:vivyajera@gmail.com'>
                            <button className='aboutBtn'>Get in touch</button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
