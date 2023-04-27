import { useEffect, useState } from "react";
import { Container } from "../../components/styeles/container/style";
import ScreenTransition from "../../components/contents/screentransition";
import TitleScreen from "../../components/contents/title";
import Footer from "../../components/contents/footer";
import ProjectsList from "../../components/contents/projectslist";
import ResponsiveProjects from "./responsive";

const Projects = () => {

  const [initPage, setInitPage] = useState(false);


  useEffect(() => {
    setInitPage(true);
    setTimeout(() => {
      setInitPage(false)
    }, 2500)
  }, [])

  const options = {
    scale: 1.2,
    speed: 1500,
    max: 30,
    perspective: 1000,
  };

  return (
    <>
      <Container className="desktopProject">
        {
          initPage ? <div>
            <ScreenTransition />
          </div> :
            <Container>
              <TitleScreen title={"Projetos"} />
              <ProjectsList/>
              <Footer />

            </Container>
        }
      </Container>
      <ResponsiveProjects/>
    </>
  );
}

export default Projects;