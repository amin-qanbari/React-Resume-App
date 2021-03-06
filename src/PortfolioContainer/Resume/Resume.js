import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
// import index from "react-typical";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
        <div className="resume-heading-link">
          <span>
            {props.hrefProject ? (
              <span>
                Click <a href={props.hrefProject}>here</a> to show project.{" "}
              </span>
            ) : (
              ""
            )}
          </span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 80 },
    { skill: "React Hooks", ratingPercentage: 85 },
    { skill: "Redux", ratingPercentage: 80 },
    { skill: "Sass", ratingPercentage: 80 },
    { skill: "HTML , CSS", ratingPercentage: 85 },
    { skill: "Bootstrap", ratingPercentage: 75 },
    { skill: "Responsive Design", ratingPercentage: 90 },
  ];

  const projectsDetails = [
    {
      title: "Hacker News Api",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "In this project we use APIs with React. We're going to be creating a small application in React that calls the Hacker News API. We'll be looking at React memo, Axios (to make API calls), Material-UI, and finally we will test our work using React .",
      subHeading: "Technologies Used: React JS, Context , Material-UI , Axios",
      hrefProject:
        "https://news-api-application-react-and-api-s-material-ui.vercel.app/",
    },
    {
      title: "Personal Web Shop",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A Personal Web shop to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Redux",
      hrefProject:
        "https://react-shopping-site-ui-design-redux-main.vercel.app/",
    },
    {
      title: "Online Crypto Currency",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "In this mini-project, I created an app with a real API with which we can see the current price, cap-market, price change percentage, etc.",
      subHeading: "Technologies Used: React JS, Axios ",
      hrefProject: "https://online-crypto-currency.vercel.app/",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Azad University"}
        subHeading={"BACHELOR OF PETROLEUM ENGIINEERING"}
        fromDate={"2014"}
        toDate={"2017"}
      />

      <ResumeHeading
        heading={"Dr.Hesabi HighSchool"}
        subHeading={"HighSchool"}
        fromDate={"2009"}
        toDate={"2013"}
      />
      <ResumeHeading
        heading={"Kharazmi Elementary School "}
        subHeading={"Elementary"}
        fromDate={"2001"}
        toDate={"2006"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Freelance"}
          subHeading={"FRONT END DEVELOPER"}
          fromDate={"2021"}
          toDate={"2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Work as a Front end Developer
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
          hrefProject={projectsDetails.hrefProject}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can compromise with, skimming through soothing songs is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="bullet-logo"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };
  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
