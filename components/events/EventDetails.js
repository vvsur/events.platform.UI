import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
//import * as Actions from './store/actions/index';
//import * as FilterActions from '../layouts/layoutBase/components/filtersPanel/store/actions/index';

import { makeStyles } from '@material-ui/core/styles';

// import withReducer from 'app/store/withReducer';
// import reducer from './store/reducers';

import moment from 'moment';
import 'moment-timezone';

import Swiper from '../Swiper';
import clsx from 'clsx';

import Link from 'next/link'
// import { Link } from 'react-router-dom'


const useStyles = makeStyles(({
    myswiper: {
        height: 350
    }
}));

function EventDetails(props) {

    const { event, categories, cities } = props.data;

    const classes = useStyles();

    let momentSysName = 'all-times';
    const data = useSelector(({ eventsReducer }) => eventsReducer);
    if (data && data.current && data.current.moment) {
        momentSysName = data.current.moment;
    }

    //"current": { "city": "sch", "moment": "all-times" }
    //console.log("eventsReducer:", eventsReducer);

    //const dispatch = useDispatch();

    // const event = useSelector(({ eventsApp }) => eventsApp.event);
    // const categories = useSelector(({ eventsApp }) => eventsApp.categories);
    // const cities = useSelector(({ eventsApp }) => eventsApp.cities);

    // useEffect(() => {

    //     if (itemId > 0) {
    //         dispatch(Actions.getEvent(itemId));
    //         dispatch(Actions.getCategories());
    //         dispatch(Actions.getCities());
    //     }

    // }, [dispatch, itemId]);


    function formatMonth(d) {

        if (!d) return ''
        else {


            if (moment().format('DD MMM YYYY') === d) {
                d = "Сегодня, " + d;
            }

            d = d.replace(' ' + moment().format('YYYY'), '');

            return d
                .replace("Jan", "Января")
                .replace("Feb", "Февраля")
                .replace("Mar", "Марта")
                .replace("Apr", "Апреля")
                .replace("May", "Мая")
                .replace("Jun", "Июня")
                .replace("Jul", "Июля")
                .replace("Aug", "Августа")
                .replace("Sep", "Сентября")
                .replace("Oct", "Октября")
                .replace("Nov", "Ноября")
                .replace("Dec", "Декабря")


                // .replace("Mo", "Понедельник")
                // .replace("Tu", "Вторник")
                // .replace("We", "Среда")
                // .replace("Th", "Четверг")
                // .replace("Fr", "Пятница")
                // .replace("Sa", "Суббота")
                // .replace("Su", "Воскресенье");

                .replace("Mo", "Понедельник")
                .replace("Tu", "Вторник")
                .replace("We", "Среда")
                .replace("Th", "Четверг")
                .replace("Fr", "Пятница")
                .replace("Sa", "Суббота")
                .replace("Su", "Воскресенье");
        }
    };

    function formatDates(momentStartUnix, momentEndUnix) {
        const momentStart = moment.unix(momentStartUnix);
        const momentEnd = moment.unix(momentEndUnix);

        let momentText = "";

        if (moment().diff(momentEnd, 'days') > 0) return null;

        if (momentStart.format('DDMMYYYY') === momentEnd.format('DDMMYYYY')) {
            momentText = formatMonth(momentStart.format('dd, DD MMM YYYY'));
        } else {
            momentText = formatMonth(momentStart.format('DD MMM YYYY')) + " - " + formatMonth(momentEnd.format('DD MMM YYYY'));
        }


        if (momentStart.format('HH:mm') === momentEnd.format('HH:mm')) {
            if (momentStart.format('HH') !== "00") {
                momentText += " в " + momentStart.format('HH:mm');
            }
        } else {
            if (momentStart.format('HH') !== "00") {
                momentText += " c " + momentStart.format('HH:mm') + " до " + momentEnd.format('HH:mm');
            }
        }

        if (momentStart.format('YYYY') === "0001") {
            momentText = 'Любой день';
        }

        return momentText;
    }

    function formatDatesAll(dates) {

        let datesNum = 0;
        let i = 0;
        let result = [];

        if (dates) {

            // eslint-disable-next-line array-callback-return
            dates.map(item => {

                if (moment().unix() < item.from) {
                    //    result += formatDates(item.start, item.end);
                } else if (datesNum === 0) {
                    datesNum = i;
                }

                i++;
            })

            i = 0;
            // eslint-disable-next-line array-callback-return
            dates.map(item => {
                const val = formatDates(item.from, item.to);
                if (val) {
                    if (datesNum === i) {
                        result.push({ datesText: val, selected: true });
                    } else {
                        result.push({ datesText: val, selected: false });
                    }
                }
                i++;
            })

        }

        return result;
    }

    function jsUcfirst(string) {
        if (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        } else return '';
    }

    function handleCategoryClick(event, value) {
        console.log("event", event);
        console.log(">>value", value);
        // history.push({
        //     pathname: '/account/profile/tab/' + value
        // });
    };

    if (!event || !categories || !cities)
        // {
        return null;
    // } else {
    //     //dispatch(FilterActions.setEventCity(event.city));
    // }

    const eventMoments = formatDatesAll(event.moments);

    return (
        <div>
            <div className="w-full px-3 md:px-5 text-x2 md:text-xl text-gray-800 leading-normal">

                <div className="font-sans">

                    <div>
                        {
                            event.categories && (
                                event.categories.map(item => (


                                    <Link

                                        href={`/[language]/events/[city]/[moment]/[group]`}
                                        as={`/ru/events/${event.city}/${momentSysName}/${item}`}

                                    //key={`category-${item}`} href={{ pathname: `/ru/events/${event.city}/${momentSysName}`, query: { group: item } }} 
                                    //as={{ pathname: `/ru/events/${event.city}/${momentSysName}`, query: { group: item } }}
                                    >
                                        <a
                                            // key={item}
                                            // onClick={() => handleCategoryClick(`/ru/events/${event.city}/this-month?group=${item}`)}
                                            //to={`/ru/events/${event.city}/${props.momentSysName}?group=${item}`}
                                            className="text-base uppercase text-teal-500 font-bold no-underline hover:underline mr-2"
                                        >
                                            {_.find(categories, { sysName: item }).name}
                                        </a>
                                    </Link>
                                ))
                            )
                        }

                        <span className="text-base uppercase text-teal-500 font-bold mr-2">в {_.find(cities, { sysName: event.city }).name2}</span>
                    </div>
                    <h1 className="font-bold font-sans break-normal text-gray-900 my-6 text-2xl md:text-4xl">{jsUcfirst(event.title)}</h1>
                    <div className="border-t-4 border-teal-500 italic pt-3">

                        <div className="flex mb-4">
                            <div className="w-1/2 text-left">
                                <p>
                                    {
                                        (event.ageRestriction && event.ageRestriction !== "0") ? (
                                            <span className="block font-semibold text-gray-100 mb-2">
                                                <span className="inline-block bg-teal-500 px-2 rounded-full ">
                                                    {event.ageRestriction}
                                                </span>
                                            </span>
                                        ) : (
                                                <span></span>
                                            )
                                    }

                                    <span className="text-indigo-600">
                                        {
                                            event.isFree === true ? (
                                                <span>Бесплатно</span>
                                            ) : (
                                                    <span>
                                                        {
                                                            (event.price && event.price.indexOf("уточн") > -1) && (
                                                                <span>Цену </span>
                                                            )
                                                        }
                                                        {event.price}
                                                    </span>
                                                )
                                        }

                                    </span>
                                </p>

                                {
                                    event.moments && (
                                        <div className="font-semibold ">
                                            {
                                                (eventMoments && eventMoments.length > 0) ? (
                                                eventMoments.map(item => (
                                                    <div key={`moment-${item.datesText}`}>
                                                        {
                                                            item.selected === true && event.moments.lenght > 1 ? (
                                                                <p className="font-bold">{item.datesText}</p>
                                                            ) : (
                                                                    <p>{item.datesText}</p>
                                                                )
                                                        }
                                                    </div>
                                                ))
                                                ) : (
                                                    <div>Мероприятие пришло</div>
                                                )
                                            }
                                        </div>
                                    )
                                }

                            </div>

                            {
                                event.place ? (
                                    <div className="w-1/2 text-right">
                                        <div>{jsUcfirst(event.place.title)} </div>
                                        <div>{(event.place.subway) ? "м. " + jsUcfirst(event.place.subway) + ", " : ""} {(event.place.address) ? jsUcfirst(event.place.address) + ", " : ""}{_.find(cities, { sysName: event.city }).name} </div>
                                        <div>{jsUcfirst(event.place.phone)} </div>
                                    </div>
                                ) : (
                                        <div className="w-1/2 text-right">
                                            <div>{_.find(cities, { sysName: event.city }).name}</div>
                                        </div>
                                    )
                            }

                        </div>
                    </div>
                </div>

                <blockquote className="border-l-4 border-teal-500 italic my-8 pl-4 md:pl-8" dangerouslySetInnerHTML={{ __html: event.description }} />
                {
                    event.images && event.images.length > 0 && (
                        <div className="flex md:mb-4">
                            <div
                                className={
                                    clsx(
                                        classes.myswiper,
                                        "w-full bg-gray-200 rounded"
                                    )}
                            >


                                {
                                    <Swiper title={jsUcfirst(event.title)} images={event.images} />
                                }
                            </div>
                        </div>
                    )
                }

                <div className="py-6 event_body_text" dangerouslySetInnerHTML={{ __html: event.body }}></div>

                <div className="flex m-20"></div>
            </div>
        </div>
    );
}

export default EventDetails;