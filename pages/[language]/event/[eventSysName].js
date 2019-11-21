import fetch from 'isomorphic-unfetch'

import { connect } from 'react-redux'
import Head from 'next/head'

import EventDetails from '../../../components/events/EventDetails'
import LayoutToolbar from '../../../components/LayoutToolbar';
import LayoutFooter from '../../../components/LayoutFooter';

import { useRouter } from 'next/router'

import { setCurrentEventCity, setFooter, static_GetCitiesList, static_GetMomentsList } from '../../../store/actions'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';


function jsUcfirst(string) {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else return '';
}

function Page({ data, current }) {

  const router = useRouter()
  const { language } = router.query

  const citiesList = static_GetCitiesList(language);
  const momentsList = static_GetMomentsList(language);

  //const dispatch = useDispatch()
  //dispatch(setCurrentEventCity(data.event.city));
  //dispatch(setFooter(data.footer));

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{jsUcfirst(data.event.title)} | GonnaVisit.com</title>
        <meta name="description" content={data.event.description} />
      </Head>
      <LayoutToolbar language={language} city={data.event.city} moment={null} cities={citiesList} moments={momentsList} />
      <div className="container shadow-lg mx-auto bg-white mt-24 md:mt-18 mb-20">
        <EventDetails data={data} />
      </div>
      <LayoutFooter language={language} content={data.footer} />
    </>
  )

}

Page.getInitialProps = async ({ req, query }) => {


  const { eventSysName } = query;

  function parsSysNameWithId(val) {

    function parseId(x) {
      var parsed = parseInt(x);
      if (isNaN(parsed)) { return 0 }
      return parsed;
    }

    let result = {
      sysName: '',
      id: 0
    };

    var arr = val.split('-');
    let val_id = parseId(arr[arr.length - 1]);
    let val_sysName = '';
    if (val_id > 0 && arr.length > 1) {
      let i = 0;
      for (const v in arr) {
        if (i < arr.length - 1) {
          if (val_sysName.length > 1) val_sysName += '-';
          val_sysName += arr[v];
        }
        i++;
      }
    }

    result = {
      sysName: val_sysName,
      id: val_id
    }

    return result;
  }

  const parsValue = parsSysNameWithId(eventSysName);
  const itemId = parsValue.id;

  const footerRes = await fetch(`${process.env.API_URL}/content-page-block?sysname=main-footer`)
  const footerJson = await footerRes.json()

  const eventRes = await fetch(`${process.env.API_URL}/event/?id=${itemId}`)
  const eventJson = await eventRes.json()

  const categoriesRes = await fetch(`${process.env.API_URL}/event-categories`)
  const categoriesJson = await categoriesRes.json()

  const citiesRes = await fetch(`${process.env.API_URL}/event-cities`)
  const citiesJson = await citiesRes.json()

  return {
    data: {
      event: eventJson.result,
      categories: categoriesJson.result.groups,
      cities: citiesJson.result,
      footer: footerJson.result
    },
    current: {
      eventId: itemId,
      eventSysName: parsValue.sysName
    }
  }
}


export default connect()(Page)