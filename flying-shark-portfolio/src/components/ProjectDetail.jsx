import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import GateScene from './scenes/GateScene';
import LandscapeScene from './scenes/LandscapeScene';
import QinScene from './scenes/QinScene';
import SilkRoadScene from './scenes/SilkRoadScene';
import ModernTransition from './scenes/ModernTransition';
import PortfolioTransition from './scenes/PortfolioTransition';
import PortfolioHero from './portfolio/PortfolioHero';
import PortfolioWork from './portfolio/PortfolioWork';
import PortfolioAbout from './portfolio/PortfolioAbout';
import PortfolioExperience from './portfolio/PortfolioExperience';
import PortfolioCapabilities from './portfolio/PortfolioCapabilities';
import PortfolioContact from './portfolio/PortfolioContact';
import PortfolioFooter from './portfolio/PortfolioFooter';
import PortfolioNavigation from './portfolio/PortfolioNavigation';
import ProjectCaseStudy from './ProjectCaseStudy';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id) || projects[0];
  if (id && id !== 'china-history') return <ProjectCaseStudy project={project} />;
  return (
    <>
      <GateScene />
      <LandscapeScene />
      <QinScene />
      <SilkRoadScene />
      <ModernTransition />
      <PortfolioTransition />
      <PortfolioNavigation />
      <PortfolioHero />
      <PortfolioWork />
      <PortfolioAbout />
      <PortfolioExperience />
      <PortfolioCapabilities />
      <PortfolioContact />
      <PortfolioFooter />
    </>
  );
};
export default ProjectDetail;
