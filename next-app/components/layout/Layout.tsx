import React from 'react';
import Head from 'next/head';
import { Grid } from '../grid';
import HeaderComponent from './header/Header';
import { FooterComponent } from './footer/Footer';

interface LayoutProps {
  helmetTags: JSX.Element;
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ helmetTags, children }: LayoutProps) => {
  return (
    <>
      <Head>
        {helmetTags}
      </Head>
      <Grid>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </Grid>
    </>
  );
};
