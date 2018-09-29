import React from 'react';
import './skills.scss';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";


const Skills = () => {
  return(
    <div id="skills">
      <div className="title">
        <h1>Skills</h1>
      </div>
      <div className="mainSkills">
        <div className="javascript">JavaScript 
          <Progress percent={95} theme={{ active: {trailColor: '#535B63', color: '#D05353'}}}/>
        </div>
        <div className="react">React
          <Progress percent={90} theme={{ active: {trailColor: '#535B63', color: '#D05353'}}}/>
        </div>
        <div className="node">Node
          <Progress percent={85} theme={{ active: {trailColor: '#535B63', color: '#D05353'}}}/>
        </div>
        <div className="htmlcss">HTML5/CSS3
          <Progress percent={92} theme={{ active: {trailColor: '#535B63', color: '#D05353'}}}/>
        </div>
        <div className="sql">SQL/NoSQL
          <Progress percent={90} theme={{ active: {trailColor: '#535B63', color: '#D05353'}}}/>
        </div>
        <div className="graphql">GraphQL
          <Progress percent={85} theme={{ active: {trailColor: '#535B63', color: '#D05353'}}}/>
        </div>
        <div className="enthusiasm">Enthusiasm
          <Progress percent={100} status="active" theme={{ active: {symbol: '👍🏻', trailColor: '#535B63', color: '#D05353'}}} />
        </div>
      </div>
      <div className="title2">
        <h1>More Skills</h1>
      </div>
      <div className="moreSkills">
        <Progress className="check1"
        type="circle" percent={100} status="active" theme={{ active: {trailColor: '#535B63', color: '#D05353'}}} />
        <div className="aws">AWS EC2</div>
        <Progress className="check2"
        type="circle" percent={100} status="active" theme={{ active: {trailColor: '#535B63', color: '#D05353'}}} />       
        <div className="jquery">jQuery</div>
        <Progress className="check3"
        type="circle" percent={100} status="active" theme={{ active: {trailColor: '#535B63', color: '#D05353'}}} />
        <div className="git">Git Workflow</div>
      </div>
    </div>
  )
};

export default Skills;
          // #D05353
          // #535B63
