import React from 'react';

import FilterCity from './FilterCity';
import FilterMoment from './FilterMoment';
import FilterAnother from './FilterAnother';

import { useRouter } from 'next/router'

const FiltersPanel = (props) => {

    const { language, city, moment, cities, moments } = props;

    const router = useRouter()
    // const data = props.data;

    // let currentCity = 'all-cities';
    // let currentMoment = 'all-times';

    // if (data && data.current && data.current.city && data.current.moment) {
    //     currentCity = data.current.city;
    //     currentMoment = data.current.moment;
    // }

    // let currentEventCitySysName = currentCity;

    // if (data && data.currentEventCity) {
    //     currentEventCitySysName = data.currentEventCity;
    // }

    function handleCityAndMomentUpdate(value) {
        router.push({
            pathname: `/${language}/events/${city}/${value}`
        })
    }

    function handleMomentUpdate(value) {
        router.push({
            pathname: `/${language}/events/${city}/${value}`
        })
    }

    function handleCityUpdate(value) {
        router.push({
            pathname: `/${language}/events/${value}/${moment}`
        })
    }

    return (
        <div>

            {/* //currentEventCity */}
            {/* {JSON.stringify(data)} */}
            {
                router.query.eventSysName ? (
                    <div>
                        <FilterAnother handleUpdate={handleCityAndMomentUpdate} city={city} cities={cities} moment={moment} language={language} moments={moments} />
                    </div>

                ) : (

                        <>
                            {/* <Head>
                                <meta charSet="utf-8" />
                                <title>{pageTitle} | GonnaVisit.com</title>
                            </Head> */}

                            <div>
                                <FilterMoment handleUpdate={handleMomentUpdate} moment={moment} language={language} moments={moments}  /> {(language === 'ru') ? "в" : "in"} <FilterCity handleUpdate={handleCityUpdate} city={city} language={language} cities={cities} />
                            </div>
                        </>
                    )
            }
        </div>

    );

}

export default FiltersPanel