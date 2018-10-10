import React from 'react';
import './skills.scss';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
// import { Icon } from 'react-icons-kit';
// import {check} from 'react-icons-kit/fa/check';
import check from '../../../dist/images/redcheck.jpg';



const Skills = () => {
  return(
    <div id="skills" >
      <div className="title" data-aos="fade-up">
        <h1>Skills</h1>
      </div>
      <div className="mainSkills" data-aos="fade-up">
        <div className="javascript" data-aos="fade-up">JavaScript 
          <Progress percent={95} theme={{ active: {trailColor: '#535B63', color: '#D05353'}}}/>
        </div>
        <div className="react" data-aos="fade-up">React
          <Progress percent={90} theme={{ active: {trailColor: '#535B63', color: '#D05353'}}}/>
        </div>
        <div className="node" data-aos="fade-up">Node
          <Progress percent={85} theme={{ active: {trailColor: '#535B63', color: '#D05353'}}}/>
        </div>
        <div className="htmlcss" data-aos="fade-up">HTML5/CSS3
          <Progress percent={92} theme={{ active: {trailColor: '#535B63', color: '#D05353'}}}/>
        </div>
        <div className="sql" data-aos="fade-up">SQL/NoSQL
          <Progress percent={90} theme={{ active: {trailColor: '#535B63', color: '#D05353'}}}/>
        </div>
        <div className="graphql" data-aos="fade-up">GraphQL
          <Progress percent={85} theme={{ active: {trailColor: '#535B63', color: '#D05353'}}}/>
        </div>
        <div className="enthusiasm" data-aos="fade-up">Enthusiasm
          <Progress percent={100} status="active" theme={{ active: {symbol: '👍🏻', trailColor: '#535B63', color: '#D05353'}}} />
        </div>
      </div>
      <div className="title2" data-aos="fade-up">
        <h1>More Skills</h1>
      </div>
      <div className="moreSkills">
        <div className="aws" data-aos="fade-up">
          <Progress className="check1"
          type="circle" percent={100} status="active" theme={{ active: {symbol: <img src={check} style={{width: "50%"}}/> , trailColor: '#535B63', color: '#D05353'}}} />
          AWS EC2
        </div>
        <div className="jquery" data-aos="fade-up">
          <Progress className="check2"
          type="circle" percent={100} status="active" theme={{ active: {symbol: <img src={check} style={{width: "50%"}}/>, trailColor: '#535B63', color: '#D05353'}}} />       
          jQuery
        </div>
        <div className="git" data-aos="fade-up">
          <Progress className="check3"
          type="circle" percent={100} status="active" theme={{ active: {symbol: <img src={check} style={{width: "50%"}}/>, trailColor: '#535B63', color: '#D05353'}}} />
          Git Workflow
        </div>
      </div>
    </div>
  )
};

export default Skills;
          // #D05353
          // #535B63
