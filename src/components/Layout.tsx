import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children?: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="content-wrapper">
        <div className="content">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
