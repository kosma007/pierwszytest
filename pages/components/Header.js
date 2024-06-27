import React from 'react';

const Header = () => {
  return (
    <header style={{
      backgroundImage: `url('/img/strefawiedzylogo.png')`, // Ścieżka do obrazka w katalogu public
      backgroundSize: 'cover', // Dopasowanie rozmiaru tła
      backgroundPosition: 'center', // Pozycja tła
      height: '200px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: 1000,
    }}>
      <nav>
        <ul>
          <li>TU JEST HEADER</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;