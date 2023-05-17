  import React from "react";
  import "./Footer.css";
  import appStore from "../../../images/Appstore.png";
  import playStore from "../../../images/playstore.png";

  const Footer = () => {
    return (
      <>
        <footer id="footer">
          <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>DOWNLOAD OUR APP FOR IOS AND ANDROID</p>
            <img src={appStore} alt="icon" />
            <img src={playStore} alt="icon" />
          </div>

          <div className="midFooter">
            <h1>BEND THE TREND</h1>
            <p>HIGH QUALITY IS OUR FIRST PRIORITY</p>
            <p>COPYRIGHTS &copy; Shoaib Khan</p>
          </div>

          <div className="rightFooter">
            <h1>FOLLOW US</h1>
            <a href="https://www.instagram.com/shoebism/">INSTAGRAM</a>

            <a href="https://www.instagram.com/shoebism/">FACEBOOK</a>
          </div>
        </footer>
      </>
    );
  };

  export default Footer;
