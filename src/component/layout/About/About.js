import React from "react";
import "./aboutSection.css";
import { Typography } from "@material-ui/core";
import Avatar from '@mui/material/Avatar';
import { Button } from "@mui/material";
import shoaib from "../../../images/shoaib.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from "@mui/icons-material/Instagram";


const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/shoaib_k_97";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={shoaib}
              alt="Founder"
            />
            <Typography>shoaib khan</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              this is a sample website to show the  demonstration about me and my skills
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://github.com/shoaibkhan188626"
              target="blank"
            >
              <GitHubIcon className="github" />
            </a>

            <a href="https://www.instagram.com/shoaib_k_97" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
