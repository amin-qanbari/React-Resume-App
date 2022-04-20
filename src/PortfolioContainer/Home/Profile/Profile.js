import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css"

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">

            <div className="colz-icon">
            <a href="https://t.me/amin_qanbarii">
              <i className="fa fa-telegram"></i>
            </a>
            <a href="mailto:aminqanbarii1992@gmail.com">
              <i className="fa fa-envelope-square"></i>
            </a>
            <a href="https://www.instagram.com/amin_qanbarii">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.github.com/amin-qanbari">
              <i className="fa fa-github"></i>
            </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M <span className="highlighted-text">Amin</span>
            </span>
          </div>

          <div className="profile-details role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Front End Developer 🔴",
                    1000,
                    "Web Programing & Design 💻",
                    1000,
                    "React.js  🌐",
                    1000,
                    "Redux 😎",
                    1000,
                    "JavaScript 😎",
                    1000,
                    "HTML, CSS, Sass 😎",
                    1000,
                    "Bootstrap 😎",
                    1000,
                    "Responsive Design 😎",
                    1000,
                    "REST api 😎 ",
                    1000,
                    "Git, GitHub 😎",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications or website with front end operations.
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>Hire Me</button>
            <a href="resume-file-amin.pdf" download="resume-file-amin.pdf">
                  <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>

        </div>

        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
