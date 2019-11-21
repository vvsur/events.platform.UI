import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

import Head from 'next/head'

import EventsGroupsList from '../../../../../components/events/EventsGroupsList'
import EventsListItem from '../../../../../components/events/EventsListItem'
import Pagination from '../../../../../components/Pagination'

import LayoutToolbar from '../../../../../components/LayoutToolbar';
import LayoutFooter from '../../../../../components/LayoutFooter';

import { connect, useSelector, useDispatch } from 'react-redux'
import { setCurrentCityAndMoment, setFooter, static_GetCitiesList, static_GetMomentsList } from '../../../../../store/actions'


function Page({ data, current }) {
  const router = useRouter()
  const { language, city, moment, group } = router.query

  const { items, items_count, items_groups } = data.events


  // const dispatch = useDispatch()
  // dispatch(setCurrentCityAndMoment(city, moment));
  // dispatch(setFooter(data.footer));

  const citiesList = static_GetCitiesList(language);
  const momentsList = static_GetMomentsList(language);

  function getPageTitle(language, citySysName, momentSysName) {

console.log("language:", language);

    let result = ``;


    citiesList.map(item => {
      if (item.sysName === citySysName) return result = item.name2;
    });

    if (group) {
      items_groups.map(item => {
        if (item.sysName === group) {
          return result = item.name + " " + (language === 'ru' ? "в" : "in") + " " + result;
        }
      });
    } else {
      momentsList.map(item => {
        if (item.sysName === momentSysName)
          return result = ((momentSysName == "all-times") ? (language === 'ru' ? "Мероприятия" : "Events") : item.name2) + " " + (language === 'ru' ? "в" : "in") + " " + result;
      });
    }
    return result;
  }

  let pageTitle = getPageTitle(language, city, moment, group);


  //city, moment, group

  return (
    <>
      {/* <br/><br/><br/><br/><br/> */}
      {/* {JSON.stringify(current)} */}
      <Head>
        <meta charSet="utf-8" />
        <title>{pageTitle} | GonnaVisit.com</title>
      </Head>

      <LayoutToolbar language={language} city={city} moment={moment} cities={citiesList} moments={momentsList} />
      <div className="container shadow-lg mx-auto bg-white mt-24 md:mt-18 mb-20">
        {/* <p>content: {JSON.stringify(content.result.count)}</p> */}
        <EventsGroupsList language={language} items={items_groups} selectItem={group} baseUrl={current.baseUrl} />

        <Pagination
          language={language}
          currentPage={current.page ? current.page : 0}
          pageSize={current.pageSize}
          itemsCount={items_count}
          currentPageItemsNum={(items) ? items.length : 0}
          //handleGetPage={handleGetPage}
          baseUrl={current.baseUrl}
          //baseUrlAdditionParams={(group) ? [{ name: 'group', value: group }] : []}
          group={group}
        />

        {
          (items) &&
          items.map((item, index) => (

            <EventsListItem data={item} key={item.id} index={index} />
          ))

        }

        <Pagination
          language={language}
          currentPage={current.page ? current.page : 0}
          pageSize={current.pageSize}
          itemsCount={items_count}
          currentPageItemsNum={(items) ? items.length : 0}
          //handleGetPage={handleGetPage}
          baseUrl={current.baseUrl}
          //baseUrlAdditionParams={(current.groupSysName) ? [{ name: 'group', value: current.groupSysName }] : []}
          group={group}
        />

      </div>
      <LayoutFooter language={language} content={data.footer} />
    </>
  )

}

Page.getInitialProps = async ({ query }) => {

  function parsePage(x) {
    var parsed = parseInt(x);
    if (isNaN(parsed)) { return 0 }
    return parsed;
  }

  const pageSize = 20;
  const { language, city, moment, page, group } = query;

  console.log("process.env.API_URL:", process.env.API_URL);

  const footerRes = await fetch(`${process.env.API_URL}/content-page-block?sysname=main-footer`)
  const footerJson = await footerRes.json()

  const eventsRes = await fetch(`${process.env.API_URL}/events?page=${(!page) ? 0 : page}&page_size=${pageSize}&city=${city}&moment=${moment}`)
  const eventsJson = await eventsRes.json()

console.log("eventsJson>>>>>>>>>>>>>>>:", eventsJson);

  return {
    data: {
      events: eventsJson.result,
      footer: footerJson.result
    },
    current: {
      groupSysName: null,
      baseUrl: `/${language}/events/${city}/${moment}`,
      page: parsePage(page),
      pageSize: pageSize
    }
  }
}

export default connect()(Page)