import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ width: '100%', textAlign: 'right' }}>
      <p>&copy; {new Date().getFullYear()} Mrs. Nicole Reiss</p>
    </footer>
  );
};

export default Footer;
