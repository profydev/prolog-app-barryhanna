import styled from "styled-components";
import { breakpoint, color, space } from "@styles/theme";
import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import Image from "next/image";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: ${space(6)};

  // reset list styles
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: ${breakpoint("desktop")}) {
    grid-template-columns: repeat(auto-fit, 400px);
  }
`;

const Alert = styled.div`
  display: flex;
  gap: ${space(4)};
  align-items: center;
  justify-content: space-between;
  color: ${color("error", 700)};
  border: 1px solid ${color("error", 300)};
  border-radius: 8px;
  padding: ${space(4)};

  div {
    display: flex;
    align-items: center;
    gap: ${space(4)};
  }
`;

export function ProjectList() {
  const { data, isLoading, isError, error } = useGetProjects();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    console.error(error);
    return (
      <Alert>
        <div>
          <Image width={20} height={20} src="/icons/alert-circle.png" alt="" />
          <p>There was a problem while loading the project data</p>
        </div>
        <div>
          <p>Try again</p>
          <Image width={20} height={20} src="/icons/arrow-right.png" alt="" />
        </div>
      </Alert>
    );
  }

  return (
    <List>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </List>
  );
}
