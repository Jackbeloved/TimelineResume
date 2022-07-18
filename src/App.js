import "./App.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function App() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div>
      <h1 className="title">Jack Zhou</h1>
      <p className="linkedin"><a href="https://linkedin.com/in/feng-jack-zhou-b46a69111">LinkedIn</a></p>
      <h2 className="email">Email:jackmkj@gmail.com</h2>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              
              <div className="vertical-timeline-element-logo"> 
                {element.logo}
              </div>
              <h5 className="vertical-timeline-element-subtitle">
                {element.company}
                {/* {element.logo} */}
              </h5>
              <h3 className="vertical-timeline-element-title">
                {element.position} 
              </h3>

              <p id="description1">{element.description1}</p>
              <p id="description2">{element.description2}</p>
              {showButton && (
                <a
                  className={`button ${isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <h6 className="footer">"To be continued~~~~~"</h6>
    </div>
  );
}

export default App;
