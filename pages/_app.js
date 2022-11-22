import React from "react";
import App from "next/app";

import Layout from "../components/Layout";
import "../styles/index.css";

import NProgress from "nprogress";
import Router from "next/router";
import Head from "next/head";

Router.events.on("routeChangeStart", (url) => {

  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class GonnaVisit extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    if (pageProps && pageProps.withoutLayout)
      return <Component {...pageProps} />;
    else
      return (
        <>
          <Head>
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="msapplication-config" content="/browserconfig.xml" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="stylesheet" type="text/css" href="/nprogress.css" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      );
  }
}

export default GonnaVisit;
