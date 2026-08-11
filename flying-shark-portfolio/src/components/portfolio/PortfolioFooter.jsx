import { personal } from '../../data/personal';

const PortfolioFooter = () => {
  return (
    <footer
      style={{
        padding: '40px',
        textAlign: 'center',
        borderTop: '1px solid var(--pf-line)',
        color: 'var(--pf-ink-soft)',
        fontFamily: 'var(--pf-body)',
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '0.1em',
      }}
    >
      © {new Date().getFullYear()} {personal.name}
    </footer>
  );
};
export default PortfolioFooter;
