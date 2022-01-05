import React, { ReactNode } from 'react';

import PropTypes from 'prop-types';

import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="flex flex-col min-h-screen layout">
    <Header />
    <div className="flex-1">{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
