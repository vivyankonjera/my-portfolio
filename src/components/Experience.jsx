import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { MdReadMore } from "react-icons/md";

const Experience = () => {
  return (
    <section id="experience" className="sectionContainer expSection">
      <div id="headingContainer">
        <h1 className="heading" id="experiencePrompt">
          My <span className="keyword">Experience</span> thus far...
        </h1>
      </div>

      <div id="timeline">
        <a href="#experience" id="timelineEnd">
          <BsArrowUpCircleFill />
        </a>
      </div>

      <div className="timelineRow rowLeft">
        <section>
          <div className="timelineMark">
            <div className="centerMark"></div>
          </div>
          <div className="expTop">
            <p className="timelineTitle">Boots UK</p>
            <p>January 2022 – present</p>
          </div>
          <p className="expDes">
            Ensuring marketing communications are delivered a timely manner,
            whilst coordinating with other marketing departments. Working
            primarily with Adobe campaign and adobe experience manager, emails
            were developed using a combination of HTML, CSS &amp; JavaScript.
            Providing a personalised marketing experience to customers. Also
            responsible for customer communications via the official Boots UK
            mobile application.
          </p>
          <div className="expBottom">
            <button className="readMoreBtn">
              <MdReadMore />
            </button>
          </div>
        </section>
      </div>

      <div className="timelineRow rowRight">
        <section>
          <div className="timelineMark">
            <div className="centerMark"></div>
          </div>
          <div className="expTop">
            <p className="timelineTitle">GoDaddy</p>
            <p>November 2020 – April 2021</p>
          </div>
          <p className="expDes">
            As part of hosting support, responsibilities consisted of diagnosing
            various web hosting related issues users may have been experiencing.
            Issues ranged from DNS matters, website migrations and general
            maintenance of their web servers. An additional duty included
            consulting customers on the various web services offered by the
            company and advising how they could be best utilised to fit their
            requirements.
          </p>
          <div className="expBottom">
            <button className="readMoreBtn">
              <MdReadMore />
            </button>
          </div>
        </section>
      </div>

      <div className="timelineRow rowLeft">
        <section>
          <div className="timelineMark">
            <div className="centerMark"></div>
          </div>
          <div className="expTop">
            <p className="timelineTitle">Impero Software</p>
            <p>June – October 2019</p>
          </div>
          <p className="expDes">
            First line of contact for users of the company’s bespoke education
            software package via phone and email. Incidents and requests could
            range from usability queries, server migrations, connectivity issues
            to bugs and workarounds for the software. Furthermore,
            responsibilities included resolving these issues within given SLAs
            as well as liaising with the sales team to ensure client accounts
            were up-to-date
          </p>
          <div className="expBottom">
            <button className="readMoreBtn">
              <MdReadMore />
            </button>
          </div>
        </section>
      </div>

      <div className="timelineRow rowRight">
        <section>
          <div className="timelineMark">
            <div className="centerMark"></div>
          </div>
          <div className="expTop">
            <p className="timelineTitle">Freelance Web &amp; Graphic Design</p>
            <p>January 2019 – Present</p>
          </div>
          <p className="expDes">
            Occasionally carry out Freelance work for web &amp; graphic design
            services via various online agencies. Have worked mainly with sole
            traders and small businesses. This has allowed me to become a
            proficient user of Adobe (Photoshop &amp; XD) and possess a solid grasp
            of HTML, CSS and JavaScript.
          </p>
          <div className="expBottom">
            <button className="readMoreBtn">
              <MdReadMore />
            </button>
          </div>
        </section>
      </div>

      <div className="timelineRow rowLeft">
        <section>
          <div className="timelineMark">
            <div className="centerMark"></div>
          </div>
          <div className="expTop">
            <p className="timelineTitle">Capita Plc</p>
            <p>May 2018 – January 2019</p>
          </div>
          <p className="expDes">
            Providing all around IT support for users via phone and email. With
            a variation of responsibilities ranging from diagnosing &amp;
            resolving system issues, administration within active directory to
            general software enquires &amp; installations. Warranting that the
            solutions are delivered within a timely manner.
          </p>
          <div className="expBottom">
            <button className="readMoreBtn">
              <MdReadMore />
            </button>
          </div>
        </section>
      </div>

    </section>
  );
};

export default Experience;
