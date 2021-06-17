import React from 'react'
import FirstM8Logo from '../First_M8_Logo-C.png'


//main about the team item. gives a description of team members
//and what they did(?)
const Team = () => {
  return (
      <div className="aboutdiv">
        <h2 id='myh2'>
            <div className="teamContainer">
              <div className="teamContainerHeader">Meet the Team</div>
              <div className="profileHolder">
                <div className="profileCards">
                  <img id="alexpropic" src='../logo/alexpic.jpg'></img>
                  <h3>Jung Ho (Alex) Lee</h3>
                  <p className='desc'>Passionate Fisherman and Foodie.</p>
                  <a href='https://www.linkedin.com/in/jungholee27/'>LinkedIn</a>
                  <a href='https://github.com/jungholee27'>GitHub</a>
                </div>
                <div className="profileCards">
                  <img id="derekpropic" src='../logo/derekpic.jpg'></img>
                  <h3>Derek Chen</h3>
                  <p className='desc'>Coffee Enthusiast and Keyboard Builder.</p>
                  <a href='https://www.linkedin.com/in/derek-junhao-chen/'>LinkedIn</a>
                  <a href='https://github.com/poofywater'>GitHub</a>
                </div>
                <div className="profileCards">
                  <img id="nisapropic" src='../logo/nisapic.jpeg'></img>
                  <h3>Nisa Lintakoon</h3>
                  <p className='desc'>#1 Fan of Beyonce, BBQ, Tacos, and Pizza.</p>
                  <a href='https://www.linkedin.com/in/nisalintakoon/'>LinkedIn</a>
                  <a href='https://github.com/nisalintakoon'>GitHub</a>
                </div>
                <div className="profileCards">
                  <img id="kevinpropic" src='../logo/kevinpic.jpeg'></img>
                  <h3>Kevin MacCoy</h3>
                  <p className='desc'>Cake Connoisseur and Gamer.</p>
                  <a href='https://www.linkedin.com/in/kevin-maccoy/'>LinkedIn</a>
                  <a href='https://github.com/kmaccoy'>GitHub</a>
                </div>
              </div>
            </div>
          </h2>
      </div>
  )
}
export default Team;

