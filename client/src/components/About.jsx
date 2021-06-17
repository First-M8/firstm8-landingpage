import React from 'react';


const About = () => {
  return (<div id='about'>
    <div id='aboutfirstm8'>
      <div id='about'>
      <p>First M8 was created to abstract away the difficulties of PromQL.
    Through an intuitive electron-based user interface, our application provides users the ability to drag and drop popular PromQL queries into input fields to maximize the user experience.
    Users start off by inputting the URIs for their respective Prometheus instances.
    Then, by simply selecting the query and moving it into the designated input field, the need to type out long exasperating queries is no longer necessary.</p>
    </div>
    <div className='picexplanation'>
      <div className='row'>
      <img id='example'src='../logo/settings.gif'></img>
      <h2 className='description'>Easily add your Prometheus instances</h2>
      </div>
      <div className='row'>
      <h2 className='description'>An easy to use drag and drop menu</h2>
      <img id='example' src='../logo/dragndrop.gif'></img>
      </div>
      <div className='row'>
      <img id='example' src='../logo/chart.png'></img>
      <h2 className='description'>Realtime charts to monitor your clusters and containers</h2>
      </div>
    </div>
    <div className='downloadinstructions'>
      <h1>Download</h1>
      <p>Coming soon!</p>
      <h2>Clone or Fork our Repo on Github to get started!!</h2>
      <h4>Make sure you're on the main branch</h4>
      <h4>Go to your terminal and type the following:</h4>
      <div id='codeblock'>
      <div className='codeblock'>
      <code>npm install</code><br></br>
      <code>npm run build</code><br></br>
      <code>// if you're running Intel based MacOS</code><br></br>
      <code>npm run package-mac-intel</code><br></br>
      <code>// if you're running Arm64 based MacOS</code><br></br>
      <code>npm run package-mac-arm</code><br></br>
      <code>// if you're running Windows</code><br></br>
      <code>npm run package-win-64</code>
      </div>
      </div>
      <p>In your FIRST-M8 folder, navigate to the release-builds folder and double-click on FirstM8.app/exe (executable).</p>
    </div>
    </div>
  </div>)
}

export default About;