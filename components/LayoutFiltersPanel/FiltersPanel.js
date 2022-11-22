import React from "react";

import FilterCity from "./FilterCity";
import FilterMoment from "./FilterMoment";
import FilterAnother from "./FilterAnother";

import { useRouter } from "next/router";

const FiltersPanel = (props) => {
  const { language, city, moment, cities, moments } = props;

  const router = useRouter();

  function handleCityAndMomentUpdate(value) {
    router.push({
      pathname: `/${language}/events/${city}/${value}`,
    });
  }

  function handleMomentUpdate(value) {
    router.push({
      pathname: `/${language}/events/${city}/${value}`,
    });
  }

  function handleCityUpdate(value) {
    router.push({
      pathname: `/${language}/events/${value}/${moment}`,
    });
  }

  return (
    <div>
      {router.query.eventSysName ? (
        <div>
          <FilterAnother
            handleUpdate={handleCityAndMomentUpdate}
            city={city}
            cities={cities}
            moment={moment}
            language={language}
            moments={moments}
          />
        </div>
      ) : (
        <>
          <div>
            <FilterMoment
              handleUpdate={handleMomentUpdate}
              moment={moment}
              language={language}
              moments={moments}
            />{" "}
            {language === "ru" ? "в" : "in"}{" "}
            <FilterCity
              handleUpdate={handleCityUpdate}
              city={city}
              language={language}
              cities={cities}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default FiltersPanel;
