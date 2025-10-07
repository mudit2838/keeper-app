import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-yellow-400 text-white text-center py-2 mt-auto">
      <p>Copyright ⓒ {year} Keeper App</p>
    </footer>
  );
};

export default Footer;