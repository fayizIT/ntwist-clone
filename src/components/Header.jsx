// Header.jsx


const Header = () => {
  return (
    <header style={{ backgroundColor: 'white', color: 'black', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        {/* Ntwist logo or text */}
        <img src="/path-to-your-logo.png" alt="Ntwist logo" style={{ width: '50px', height: 'auto' }} />
      </div>

      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0 }}>
          <li><a href="/">Home</a></li>
          <li>
            <a href="/industries">Industries</a>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li><a href="/sustainability">Sustainability</a></li>
              <li><a href="/mineral-processing">Mineral Processing</a></li>
              <li><a href="/mine-optimization">Mine-To-Mill-To-Mine Optimization</a></li>
              <li><a href="/oil-gas">Oil & Gas</a></li>
            </ul>
          </li>
          <li><a href="/ai-software">AI Software</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
