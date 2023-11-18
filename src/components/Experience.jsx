import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { MdReadMore } from "react-icons/md";

const Experience = () => {
    return (
        <section id='experience' className='sectionContainer expSection'>
            <div id='headingContainer'>
                <h1 className='heading' id='experiencePrompt'>
                    My <span className='keyword'>Experience</span> thus far
                </h1>
            </div>

            <div id='timeline'>
                <a href='#experience' id=''>
                    <BsArrowUpCircleFill id='timelineEnd' />
                </a>
            </div>

            <div className='timelineRow rowLeft'>
                <section>
                    <div className='timelineMark'>
                        <div className='centerMark'></div>
                    </div>
                    <div className='expTop'>
                        <p className='timelineTitle'>RICS </p>
                        <p>Digital channels scheduler</p>
                        <p className='expDate'>October 2022 – Present </p>
                    </div>
                    <p className='expDes'>
                        As the businesses’ main point of contact for email
                        communications, the role’s comprised of managing the
                        business’s outbound email calendar, in addition to
                        building custom emails, allocating communication slots
                        for business departments & providing direction on best
                        email practices and brand guidelines.{" "}
                    </p>
                    <div className='expBottom'></div>
                </section>
            </div>

            <div className='timelineRow rowRight'>
                <section>
                    <div className='timelineMark'>
                        <div className='centerMark'></div>
                    </div>
                    <div className='expTop'>
                        <p className='timelineTitle'>Boots UK</p>
                        <p>HTML email developer </p>
                        <p className='expDate'>January 2022 – August 2022</p>
                    </div>
                    <p className='expDes'>
                        Ensuring marketing communications are delivered a timely
                        manner, whilst coordinating with other marketing
                        departments. Working primarily with Adobe campaign and
                        adobe experience manager, emails were developed using a
                        combination of HTML, CSS &amp; JavaScript. Providing a
                        personalised marketing experience to customers. Also
                        responsible for customer communications via the official
                        Boots UK mobile application.
                    </p>
                    <div className='expBottom'></div>
                </section>
            </div>

            <div className='timelineRow rowLeft'>
                <section>
                    <div className='timelineMark'>
                        <div className='centerMark'></div>
                    </div>
                    <div className='expTop'>
                        <p className='timelineTitle'>GoDaddy</p>
                        <p>Hosting Sales & Support </p>
                        <p className='expDate'>November 2020 – April 2021</p>
                    </div>
                    <p className='expDes'>
                        As part of hosting support, responsibilities consisted
                        of diagnosing various web hosting related issues users
                        may have been experiencing. Issues ranged from DNS
                        matters, website migrations and general maintenance of
                        their web servers. An additional duty included
                        consulting customers on the various web services offered
                        by the company and advising how they could be best
                        utilised to fit their requirements.
                    </p>
                    <div className='expBottom'></div>
                </section>
            </div>

            <div className='timelineRow rowRight'>
                <section>
                    <div className='timelineMark'>
                        <div className='centerMark'></div>
                    </div>
                    <div className='expTop'>
                        <p className='timelineTitle'>Impero Software</p>
                        <p>Technical support engineer </p>
                        <p className='expDate'>June – October 2019</p>
                    </div>
                    <p className='expDes'>
                        First line of contact for users of the company’s bespoke
                        education software package via phone and email.
                        Incidents and requests could range from usability
                        queries, server migrations, connectivity issues to bugs
                        and workarounds for the software. Furthermore,
                        responsibilities included resolving these issues within
                        given SLAs as well as liaising with the sales team to
                        ensure client accounts were up-to-date
                    </p>
                    <div className='expBottom'></div>
                </section>
            </div>

            <div className='timelineRow rowLeft'>
                <section>
                    <div className='timelineMark'>
                        <div className='centerMark'></div>
                    </div>
                    <div className='expTop'>
                        <p className='timelineTitle'>Capita Plc</p>
                        <p>IT Service Desk Analyst </p>
                        <p className='expDate'>May 2018 – January 2019</p>
                    </div>
                    <p className='expDes'>
                        Providing all around IT support for users via phone and
                        email. With a variation of responsibilities ranging from
                        diagnosing &amp; resolving system issues, administration
                        within active directory to general software enquires
                        &amp; installations. Warranting that the solutions are
                        delivered within a timely manner.
                    </p>
                    <div className='expBottom'></div>
                </section>
            </div>
        </section>
    );
};

export default Experience;
