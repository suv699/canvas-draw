import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ToolsPnl from './tools-pnl/ToolsPnl';

interface Props {
  children?: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <ToolsPnl />
      <main className="content-wrapper">
        <div className="content">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
