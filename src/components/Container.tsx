import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/styles.css';

interface ContainerProps {
  children?: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  console.log('Rendering Container Component');

  return (
    <div style={{ width: '984px', margin: '0 auto', padding: '0 20px' }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Container;
