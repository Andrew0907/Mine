import { useRef } from "react";
import { Page } from "../../components/Page";
import { projects } from "../../data";
import { NextButton } from "./ProjectButton";
import { ProjectItem } from "./ProjectItem";
import { ProjectButton, ProjectContainer } from "./Projects.styled";

const Projects = () => {
  const ref = useRef(null);

  const moveLeft = () => {
    console.log(ref.current.scrollLeft);
    document.querySelector(".wrapper").scrollLeft += 600;
  };
  const moveRight = () => {
    document.querySelector(".wrapper").scrollLeft -= 650;
  };

  return (
    <Page header="Projects">
      <ProjectContainer ref={ref}>
        <div className="wrapper">
          {projects.map((data, index) => (
            <ProjectItem data={data} key={index} index={index} />
          ))}
        </div>
      </ProjectContainer>
      <ProjectButton>
        <NextButton flip onClick={moveRight} />
        <NextButton onClick={moveLeft} />
      </ProjectButton>
    </Page>
  );
};

export default Projects;
