import { useState, useEffect, useRef } from 'react';
// import './Header.css'; 

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event) => {
    // Check if the click is outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const preventClose = (event) => {
    // Prevent closing when clicking inside the dropdown content
    event.stopPropagation();
  };

  // Add event listeners to close dropdown when clicking outside of it
  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <header className="header-container">
      <div>
        {/* Ntwist logo or text */}
        <img src="/path-to-your-logo.png" alt="Ntwist logo" className="logo" />
      </div>

      <nav>
        <ul className="nav-list">
          <li><a href="/" className="bold-black">Home</a></li>
          <li className="dropdown" onClick={handleDropdownToggle} ref={dropdownRef}>
            <a href="/industries" className="bold-black">Industries</a>
            {isDropdownOpen && (
              <div className="dropdown-content" onClick={preventClose}>
                <a href="/sustainability" className="bold-black">Sustainability</a>
                <a href="/mineral-processing" className="bold-black">Mineral Processing</a>
                <a href="/mine-optimization" className="bold-black">Mine-To-Mill-To-Mine Optimization</a>
                <a href="/oil-gas" className="bold-black">Oil & Gas</a>
              </div>
            )}
          </li>
          <li><a href="/ai-software" className="bold-black">AI Software</a></li>
          <li><a href="/blog" className="bold-black">Blog</a></li>
          <li><a href="/contact" className="bold-black">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
