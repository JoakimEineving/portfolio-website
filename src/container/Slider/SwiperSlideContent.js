import React from "react";
import { motion } from "framer-motion";
import { RiFlutterFill } from "react-icons/ri";
import ReusableButton from "../../components/Buttons/ReusableButton";
import portfolio from "../../assets/portfolio.gif";
import chatbotdemo from "../../assets/chatbotdemo.gif";
import flutterexample from "../../assets/flutterexample.jpg";

const SwiperSlideContent = (props) => {
  const { project1, project2, project3 } = props;
  let project = {};
  let image = {};
  let name = "";
  let link = "";
  
  if (project1) {
    project = project1;
    image = chatbotdemo;
    name = "AI Chatbot";
    link =
      "https://drive.google.com/file/d/1nmTHyosEO99c-fRQozXfHEpaAZj2AIhL/view?usp=share_link";
  } else if (project2) {
    project = project2;
    image = portfolio;
    name = "Portfolio";
    link =
      "https://drive.google.com/file/d/1nmTHyosEO99c-fRQozXfHEpaAZj2AIhL/view?usp=share_link";
  } else if (project3) {
    project = project3;
    image = flutterexample;
    name = "Recipe App";
    link =
      "https://drive.google.com/file/d/1nmTHyosEO99c-fRQozXfHEpaAZj2AIhL/view?usp=share_link";
  }
  return (
    <div className="project-body">
      <h2>{name}</h2>
      <ul className="project-icons">
        {project === project3 ? <RiFlutterFill className="flutter" /> : null}
        {project.map((skills, i) => {
          return (
            <motion.li
              viewport={{ once: true }}
              initial={{ opacity: 0.1 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "easein",
                duration: 1,
                delay: i * 0.15,
              }}
              key={i}
              className="skill"
              name={skills.skill}
            >
              <i className={skills.fontAwesome}></i>
            </motion.li>
          );
        })}
      </ul>
      <img src={image} id="project-img" />
      <ReusableButton
        className="project-button"
        onClick={() => window.open({ link }, "_blank")}
      >
        Show on Github
      </ReusableButton>
    </div>
  );
};

export default SwiperSlideContent;