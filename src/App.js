import React, { useState,useEffect } from "react";
import "./App.css";
// import database
import timelineElements from "./timelineElements";
//import plugins
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  const handleEmailClick = () => {
    window.location.href = "mailto:jackmkj@gmail.com";
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>
    <button className="theme-toggle-button" onClick={toggleTheme}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
      <h1 className="title">Hi, I'm Jack Zhou</h1>
      <h2 className="subtitle">Data Enthusiast</h2>
      <a className="linkedin" href="https://www.linkedin.com/in/jzhou-da/" target="_blank" rel="noopener noreferrer">
        <strong>LinkedIn:</strong> linkedin.com/in/jzhou-da
      </a>
      <h2 className="email" onClick={handleEmailClick}><strong>Email:</strong> jackmkj@gmail.com</h2>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={{ background: "white" }}
              icon={<img src={element.icon} alt="icon" className="timeline-icon"  />}
            >
              
              <h3 className="vertical-timeline-element-title">
                {element.position} 
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.company}
              </h5>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p className="description" dangerouslySetInnerHTML={{ __html: element.description }}></p>

              {showButton && (
                <a
                     className="button workButton"
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <h6 className="footer">"WOOHOO"</h6>
    </div>
  );
}

export default App;
