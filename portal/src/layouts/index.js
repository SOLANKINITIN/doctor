import React from 'react';
import MainLayout from './MainLayout';

export const withLayout = (Component, Layout)=>(props) => {
  if (!Layout) {
    Layout = MainLayout;
  }

  return (
    <Layout>
      <Component {...props}/>
    </Layout>
  );
};
