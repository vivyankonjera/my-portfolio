import {SiLinkedin, SiGithub, SiGmail} from 'react-icons/si'

const introduction = () => {
  return (
    <section className="sectionContainer" id="intro">
      <div className="introWrapper">
        <div className="introLeft">
          <div className="centreIntro">
            <h1 id="name">Vivya Nkonjera</h1>
            <h2 id="title">Web developer</h2>
            <i className='bannerIcon'><SiLinkedin/></i>
            <i className='bannerIcon'><SiGithub/></i>
            <i className='bannerIcon'><SiGmail/></i>
          </div>
        </div>

        <div className="introRight"></div>
      </div>
    </section>
  );
};

export default introduction;
