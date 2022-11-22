import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

import Head from "next/head";

import EventsGroupsList from "../../../../../components/events/EventsGroupsList";
import EventsListItem from "../../../../../components/events/EventsListItem";
import Pagination from "../../../../../components/Pagination";

import LayoutToolbar from "../../../../../components/LayoutToolbar";
import LayoutFooter from "../../../../../components/LayoutFooter";

import {
  setCurrentCityAndMoment,
  setFooter,
  static_GetCitiesList,
  static_GetMomentsList,
} from "../../../../../store/actions";

function Page({ data, current }) {
  const router = useRouter();
  const { language, city, moment, group } = router.query;

  const { items, items_count, items_groups } = data.events;

  const citiesList = static_GetCitiesList(language);
  const momentsList = static_GetMomentsList(language);

  function getPageTitle(language, citySysName, momentSysName) {
    let result = ``;

    citiesList.map((item) => {
      if (item.sysname === citySysName) return (result = item.name2);
    });

    if (group) {
      items_groups.map((item) => {
        if (item.sysname === group) {
          return (result =
            item.name + " " + (language === "ru" ? "в" : "in") + " " + result);
        }
      });
    } else {
      momentsList.map((item) => {
        if (item.sysname === momentSysName)
          return (result =
            (momentSysName == "all-times"
              ? language === "ru"
                ? "Мероприятия"
                : "Events"
              : item.name2) +
            " " +
            (language === "ru" ? "в" : "in") +
            " " +
            result);
      });
    }
    return result;
  }

  let pageTitle = getPageTitle(language, city, moment, group);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{pageTitle} | GonnaVisit.com</title>
      </Head>

      <LayoutToolbar
        language={language}
        city={city}
        moment={moment}
        cities={citiesList}
        moments={momentsList}
      />
      <div className="container shadow-lg mx-auto bg-white mt-24 md:mt-18 mb-20">
        <EventsGroupsList
          language={language}
          items={items_groups}
          selectItem={group}
          baseUrl={current.baseUrl}
        />

        <Pagination
          language={language}
          currentPage={current.page ? current.page : 0}
          pageSize={current.pageSize}
          itemsCount={items_count}
          currentPageItemsNum={items ? items.length : 0}
          baseUrl={current.baseUrl}
          group={group}
        />

        {items &&
          items.map((item, index) => (
            <EventsListItem data={item} key={item.id} index={index} />
          ))}

        <Pagination
          language={language}
          currentPage={current.page ? current.page : 0}
          pageSize={current.pageSize}
          itemsCount={items_count}
          currentPageItemsNum={items ? items.length : 0}
          baseUrl={current.baseUrl}
          group={group}
        />
      </div>
      <LayoutFooter language={language} content={data.footer} />
    </>
  );
}

Page.getInitialProps = async ({ query }) => {
  function parsePage(x) {
    var parsed = parseInt(x);
    if (isNaN(parsed)) {
      return 0;
    }
    return parsed;
  }

  const pageSize = 20;
  const { language, city, moment, page, group } = query;

  const footerRes = await fetch(
    `${process.env.API_URL}/content/page-blocks/main-footer`
  );
  const footerJson = footerRes && (await footerRes.json());

  const url = `${process.env.API_URL}/events?page=${
    !page ? 0 : page
  }&page_size=${pageSize}&city=${city}&moment=${moment}`;

  const eventsRes = await fetch(url);
  const eventsJson = eventsRes && (await eventsRes.json());

  return {
    data: {
      events: eventsJson,
      footer: footerJson,
    },
    current: {
      groupSysName: null,
      baseUrl: `/${language}/events/${city}/${moment}`,
      page: parsePage(page),
      pageSize: pageSize,
    },
  };
};

export default Page;
