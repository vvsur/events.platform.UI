import { useRouter } from 'next/router'
import PageDetails from '../../../components/contentPages/PageApp';
import fetch from 'isomorphic-unfetch'

import { setCurrentCityAndMoment, setFooter, static_GetCitiesList, static_GetMomentsList } from '../../../store/actions'
import { connect } from 'react-redux'

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import LayoutToolbar from '../../../components/LayoutToolbar';
import LayoutFooter from '../../../components/LayoutFooter';

import Head from 'next/head'


function Page({ data }) {
  const router = useRouter()

  const { pid, language } = router.query
  
  const citiesList = static_GetCitiesList(language);
  const momentsList = static_GetMomentsList(language);
  const city = 'all-cities';
  const moment = 'all-times';

  //const dispatch = useDispatch()
  // dispatch(setCurrentCityAndMoment('all-cities', 'all-times'));
  // dispatch(setFooter(data.footer));
  
  function jsUcfirst(string) {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } else return '';
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{jsUcfirst(data.content.title)} | GonnaVisit.com</title>
        <meta name="keywords" content={data.content.keywords} />
        <meta name="description" content={data.content.description} />
      </Head>
      <LayoutToolbar language={language} city={city} moment={moment} cities={citiesList} moments={momentsList} />
      <div className="container shadow-lg mx-auto bg-white mt-24 md:mt-18 mb-20">
        {/* <p>data: {JSON.stringify(data.event.city)}</p> */}
        <PageDetails data={data.content} />

      </div>
      <LayoutFooter language={language} content={data.footer} />
    </>
  )

}

Page.getInitialProps = async ({ query }) => {

  const { contentSysName, language } = query;

  const footerRes = await fetch(`${process.env.API_URL}/content-page-block?sysname=main-footer`)
  const footerJson = await footerRes.json()

  const pageRes = await fetch(`${process.env.API_URL}/content-page?sysname=${contentSysName}`)
  const pageJson = await pageRes.json()

  return {
    data: {
      content: pageJson.result,
      footer: footerJson.result
    }
  }
}


export default connect()(Page)