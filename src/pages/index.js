import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tyler Solosko Dev</title>
        <html lang="en" />
        <meta name="description" content="Tyler Solosko's Web Development Portfolio Website." />
        <script src={withPrefix('fluidScript.js')} type="text/javascript" defer />
      </Helmet>
      <App />
    </>
  );
};
