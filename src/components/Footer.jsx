

import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <p>NTWIST(logo)</p>
        <nav>
          <a href="/" className="footerLink">Home</a>
          <a href="/about" className="footerLink">About Us</a>
          <a href="/contact" className="footerLink">Contact Us</a>
          <a href="/privacy" className="footerLink">Privacy Policy</a>
          <a href="/sitemap" className="footerLink">Sitemap</a>
        </nav>
        <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
        <p>&copy; 2022. Ntwist Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
