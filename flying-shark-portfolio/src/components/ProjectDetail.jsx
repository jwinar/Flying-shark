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
      {/*
        Direction contract — "The Arrivals Board" (locked 2026-08-10, see
        PORTFOLIO_REDESIGN_PLAN.md). This div is the visual boundary between
        the dark/gold historical intro above (siblings, untouched) and the
        light stone/plaster "arrivals board" world below. Pale ground, warm
        charcoal ink, three enamel accents (amber = most-recent, teal =
        settled, crimson = contact/alert). Board-tile flip-in is the one
        authored motion moment, reused consistently across every section.
        Scope is visuals only — content, copy, and behavior are unchanged.
      */}
      <div className="portfolio-world">
        <div className="pf-nav-scrim" aria-hidden="true" />
        <PortfolioNavigation />
        <div id="hero"><PortfolioHero /></div>
        <div id="work"><PortfolioWork /></div>
        <div id="about"><PortfolioAbout /></div>
        <PortfolioExperience />
        <PortfolioCapabilities />
        <div id="contact"><PortfolioContact /></div>
        <PortfolioFooter />
      </div>
    </>
  );
};
export default ProjectDetail;
