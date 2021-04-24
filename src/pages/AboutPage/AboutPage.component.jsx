import React from "react";
import { Image, Segment } from "semantic-ui-react";
import { AboutContainer } from "./AboutPage.styles";
import aboutImage from "../../assects/about.png";

const AboutPage = () => {
  return (
    <AboutContainer>
      <div className="about-container">
        <Image src={aboutImage} size="small" circular />
        <Segment>
          <h1>
            Developed by{" "}
            <a href="GITHUB_PROFILE_LINK" target="_blank">
              #Ray
            </a>
          </h1>
        </Segment>
      </div>

      <p>{new Date().getFullYear()}</p>
    </AboutContainer>
  );
};

export default AboutPage;
