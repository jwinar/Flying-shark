import { personal } from '../../data/personal';
const PortfolioFooter = () => {
  return <footer style={{ padding:'40px', textAlign:'center', borderTop:'1px solid var(--color-text-muted)', color:'var(--color-text-muted)', fontFamily:'var(--font-ui)', fontSize:'12px', letterSpacing:'0.1em' }}>© {new Date().getFullYear()} {personal.name}</footer>;
};
export default PortfolioFooter;
