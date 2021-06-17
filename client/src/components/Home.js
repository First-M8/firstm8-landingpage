import React from 'react'
import GithubCat from '../GithubCat.svg'
import FirstM8Logo from '../logo/Facebook-Cover.png'

//main home page item. the first thing everyone sees
const Home = () => {
    //tba
    //render SVG of our logo on the home page TODO when finalized
  return (
    <div classname="logoimg">
      <img src={FirstM8Logo}  width="100%" />
      <h1 id='description'>An easier way to do your PromQL queries</h1>
    <div className="banner"> 
      <a href= "https://github.com/oslabs-beta/First-M8" target = "_blank">
        <img src={GithubCat} alt="github" width="45px" className="githubLogo" title="Check out our Github!" />
      </a>
    </div>
  </div>
  )
}

export default Home;

//button sends us to:
// https://github.com/oslabs-beta/First-M8