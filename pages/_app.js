import React from 'react'
import App from 'next/app'

import Layout from '../components/Layout';
import '../styles/index.css';

import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import { initStore } from '../store'

// import NProgress from "next-nprogress/component";
//import withNProgress from "next-nprogress";
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'

//const msDelay = 1000; // default is 300


Router.events.on('routeChangeStart', url => {
    console.log(`Loading: ${url}`)
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


class GonnaVisit extends App {

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps, store } = this.props
        //console.log("store", store);
        console.log("pageProps", pageProps);
        if (pageProps && pageProps.withoutLayout) return (<Component {...pageProps} />)
        else
            return (
                <>
                    <Head>
                        {/* Import CSS for nprogress */}
                        <meta name="yandex-verification" content="191fadd2ddb425e5" />
                        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
                    </Head>

                    <Provider store={store}>
                        {/* <Theme> */}
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                        {/* </Theme> */}
                    </Provider>

                </>
            )
    }
}

export default withRedux(initStore, { debug: true })(GonnaVisit)