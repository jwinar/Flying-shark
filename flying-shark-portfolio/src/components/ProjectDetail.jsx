import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import Cursor from './Cursor';
import GateScene from './scenes/GateScene';
import LandscapeScene from './scenes/LandscapeScene';
import QinScene from './scenes/QinScene';
import SilkRoadScene from './scenes/SilkRoadScene';
import TangScene from './scenes/TangScene';
import SongMingScene from './scenes/SongMingScene';
import QingScene from './scenes/QingScene';
import ModernTransition from './scenes/ModernTransition';
import RedThreadScene from './scenes/RedThreadScene';
import PortfolioHero from './portfolio/PortfolioHero';
import PortfolioWork from './portfolio/PortfolioWork';
import PortfolioAbout from './portfolio/PortfolioAbout';
import PortfolioExperience from './portfolio/PortfolioExperience';
import PortfolioCapabilities from './portfolio/PortfolioCapabilities';
import PortfolioContact from './portfolio/PortfolioContact';
import PortfolioFooter from './portfolio/PortfolioFooter';
import PortfolioNavigation from './portfolio/PortfolioNavigation';
import ProjectCaseStudy from './ProjectCaseStudy';
import AudioToggle from './cinematic/AudioToggle';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id) || projects[0];
  if (id && id !== 'china-history') return <><Cursor /><ProjectCaseStudy project={project} /></>;
  return (
    <>
      <Cursor />
      <AudioToggle />
      <GateScene />
      <LandscapeScene />
      <QinScene />
      <SilkRoadScene />
      <TangScene />
      <SongMingScene />
      <QingScene />
      <ModernTransition />
      <RedThreadScene />
      <PortfolioNavigation />
      <div id="hero"><PortfolioHero /></div>
      <div id="work"><PortfolioWork /></div>
      <div id="about"><PortfolioAbout /></div>
      <PortfolioExperience />
      <PortfolioCapabilities />
      <div id="contact"><PortfolioContact /></div>
      <PortfolioFooter />
    </>
  );
};
export default ProjectDetail;
