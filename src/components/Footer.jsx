
// Footer.jsx
// import React from 'react';

const Footer = () => {
    return (
      <footer style={{ backgroundColor: 'black', color: 'white', padding: '20px 0' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <p>NTWIST(logo)</p>
          <nav>
            <a href="/">Home</a> | <a href="/about">About Us</a> | <a href="/contact">Contact Us</a> |{' '}
            <a href="/privacy">Privacy Policy</a> | <a href="/sitemap">Sitemap</a>
          </nav>
          <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
          <p>&copy; 2022. Ntwist Inc.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;