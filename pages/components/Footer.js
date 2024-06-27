import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#007bff', height: '200px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', bottom: '0', left: '0' }}>
      <nav>
        <ul>
          <li>TU JEST FOOTER</li>
          {/* Dodaj więcej elementów nawigacji */}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;