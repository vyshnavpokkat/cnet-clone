import React from 'react'
import './nav.css'
export default function Nav() {
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <>
      <div class="topnav" id="myTopnav">
        <div className="LogoAlign">
          <p class="active"><span id='NavLogo'>CNET</span></p>
          <a id='NavLogoText'><span>Your guide to a better future</span></a>
        </div>
        <div id='NavRightElements'>
          <a>Tech</a>
          <a>Money</a>
          <a>Home</a>
          <a>Wellness</a>
          <a>News&Culture</a>
          <a>Science</a>
          <a>Deal&Reviews</a>
          <a>Price</a>
          <a>Cars</a>
          <a>More</a>
        </div>
        {/* <a  class="icon" onClick={myFunction}>
                    <i class="fa fa-bars"></i>
                </a> */}
      </div>
    </>
  )
}
