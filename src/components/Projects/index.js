import React, { useState } from "react";
import { projects } from "../../data/constants";
import ProjectCard from "../Cards/ProjectCards";
import {
  CardContainer,
  Container,
  Desc,
  Divider,
  Title,
  ToggleButton,
  ToggleButtonGroup,
  Wrapper,
} from "./ProjectsStyle";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Some of my Projects</Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "full stack" ? (
            <ToggleButton
              active
              value="full stack"
              onClick={() => setToggle("full stack")}
            >
              FULL STACK
            </ToggleButton>
          ) : (
            <ToggleButton
              value="web app"
              onClick={() => setToggle("full stack")}
            >
              FULL STACK
            </ToggleButton>
          )}
          <Divider />
          {toggle === "other" ? (
            <ToggleButton
              active
              value="other"
              onClick={() => setToggle("other")}
            >
              OTHER TECH
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle("other")}>
              OTHER TECH
            </ToggleButton>
          )}
          {/* <Divider /> */}
          {/* {toggle === "frontend" ? (
            <ToggleButton
              active
              value="frontend"
              onClick={() => setToggle("frontend")}
            >
              FRONTEND
            </ToggleButton>
          ) : (
            <ToggleButton value="other" onClick={() => setToggle("frontend")}>
              FRONTEND
            </ToggleButton>
          )} */}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
