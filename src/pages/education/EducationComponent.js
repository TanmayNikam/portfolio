import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
// import Educations from "../../containers/education/Educations";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import "react-vertical-timeline-component/style.min.css";
import { education } from "../../portfolio";
import { RiBuildingLine } from "react-icons/ri";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

function Education(props) {
  const theme = props.theme;
  const linecolor = theme.name === "light" ? "black" : "white";
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              {/* <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Basic Qualification and Certifications
              </h3> */}
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I'm currently a final year B.Tech CSE student at IIIT Naya
                Raipur.
              </p>
            </div>
          </div>
        </Fade>
        <VerticalTimeline className="VerticalTimeline" lineColor={linecolor}>
          {education.education.map((Obj, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: Obj.color, color: Obj.text }}
              contentArrowStyle={{ borderRight: "7px solid " + Obj.color }}
              date={Obj.duration}
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
              }}
              icon={<RiBuildingLine />}
            >
              <h2
                className="vertical-timeline-element-title heading-text"
                style={{
                  fontFamily: "Google Sans Regular",
                  marginBottom: "3%",
                }}
              >
                {Obj.title}
              </h2>
              <p
                className="vertical-timeline-element-title heading-text"
                style={{
                  fontFamily: "Google Sans Regular",
                  marginBottom: "3%",
                  fontWeight: "1000",
                }}
              >
                {Obj.score}
              </p>
              <h5
                className="vertical-timeline-element-subtitle"
                style={{
                  fontFamily: "Google Sans Regular",
                  fontSize: "1.2rem",
                }}
              >
                {Obj.location_city}
              </h5>
              <h6
                className="vertical-timeline-element-subtitle"
                style={{
                  fontFamily: "Google Sans Regular",
                  fontSize: "1.2rem",
                }}
              >
                {Obj.location_state}
              </h6>
              <h6
                className="vertical-timeline-element-subtitle"
                style={{
                  fontFamily: "Google Sans Regular",
                  fontSize: "1.2rem",
                }}
              >
                {Obj.location_country}
              </h6>
              <p
                style={{
                  fontFamily: "Google Sans Regular",
                  fontSize: "1.2rem",
                }}
              >
                {Obj.description}
              </p>
              <p
                style={{
                  fontFamily: "Google Sans Regular",
                  fontSize: "1.2rem",
                }}
              >
                {Obj.sec_details}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Education;
