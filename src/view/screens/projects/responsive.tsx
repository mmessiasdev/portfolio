import { Container } from "../../components/styeles/container/style";
import TitleScreen from "../../components/contents/title";
import Footer from "../../components/contents/footer";
import ProjectsList from "../../components/contents/projects/projectslist";
import gif from '../../assets/gifs/ProjectsPortfolio.gif'
import MobilePopup from "../../components/contents/mobilepopup";

const ResponsiveProjects = () => {

    return (
        <>
            <Container className="mobileProject" overflow="hidden">
                <Container width="100%" disp="flex" direc="column" justify="center" aligh="center">
                    <TitleScreen title={"Projetos"} />
                    <Container pad="100px 0px 0px 0px" width="100%" disp="flex" direc="column" justify="center" aligh="center">
                        <ProjectsList scale={"1"} max={"0"} />
                    </Container>
                    <Footer />
                </Container>

                <MobilePopup gif={gif} className="mobilePopup" data-aos="fade-up" data-aos-duration='2000' />

            </Container>
        </>
    );
}

export default ResponsiveProjects;