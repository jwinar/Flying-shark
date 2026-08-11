const LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const PortfolioNavigation = () => {
  return (
    <nav className="pf-nav" aria-label="Portfolio sections">
      {LINKS.map(({ href, label }) => (
        <a key={href} href={href} className="pf-nav-tab">
          {label}
        </a>
      ))}
    </nav>
  );
};
export default PortfolioNavigation;
