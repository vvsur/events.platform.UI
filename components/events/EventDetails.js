import React, { useEffect } from "react";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import "moment-timezone";
import Swiper from "../Swiper";
import clsx from "clsx";
import Link from "next/link";
import RandomEvents from "./RandomEvents";

const useStyles = makeStyles({
  myswiper: {
    height: 350,
  },
});

function EventDetails(props) {
  const { event, categories, cities } = props.data;

  const classes = useStyles();

  let momentSysName = "all-times";

  function formatMonth(d) {
    if (!d) return "";
    else {
      if (moment().format("DD MMM YYYY") === d) {
        d = "Сегодня, " + d;
      }

      d = d.replace(" " + moment().format("YYYY"), "");

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

        .replace("Mo", "Понедельник")
        .replace("Tu", "Вторник")
        .replace("We", "Среда")
        .replace("Th", "Четверг")
        .replace("Fr", "Пятница")
        .replace("Sa", "Суббота")
        .replace("Su", "Воскресенье");
    }
  }

  function formatDates(momentStartUnix, momentEndUnix) {
    const momentStart = moment.unix(momentStartUnix);
    const momentEnd = moment.unix(momentEndUnix);

    let momentText = "";

    if (moment().diff(momentEnd, "days") > 0) return null;

    if (momentStart.format("DDMMYYYY") === momentEnd.format("DDMMYYYY")) {
      momentText = formatMonth(momentStart.format("dd, DD MMM YYYY"));
    } else {
      momentText =
        formatMonth(momentStart.format("DD MMM YYYY")) +
        " - " +
        formatMonth(momentEnd.format("DD MMM YYYY"));
    }

    if (momentStart.format("HH:mm") === momentEnd.format("HH:mm")) {
      if (momentStart.format("HH") !== "00") {
        momentText += " в " + momentStart.format("HH:mm");
      }
    } else {
      if (momentStart.format("HH") !== "00") {
        momentText +=
          " c " +
          momentStart.format("HH:mm") +
          " до " +
          momentEnd.format("HH:mm");
      }
    }

    if (momentStart.format("YYYY") === "0001") {
      momentText = "Любой день";
    }

    return momentText;
  }

  function formatDatesAll(dates) {
    let datesNum = 0;
    let i = 0;
    let result = [];

    if (dates) {
      dates.map((item) => {
        if (moment().unix() < item.from) {
        } else if (datesNum === 0) {
          datesNum = i;
        }

        i++;
      });

      i = 0;
      dates.map((item) => {
        const val = formatDates(item.from, item.to);
        if (val) {
          if (datesNum === i) {
            result.push({ datesText: val, selected: true });
          } else {
            result.push({ datesText: val, selected: false });
          }
        }
        i++;
      });
    }

    return result;
  }

  function jsUcfirst(string) {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } else return "";
  }

  if (!event || !categories || !cities) return null;

  const eventMoments = formatDatesAll(event.moments);

  return (
    <div>
      <div className="w-full px-3 md:px-5 text-x2 md:text-xl text-gray-800 leading-normal">
        <div className="font-sans">
          <div>
            {event.categories &&
              event.categories.map((item) => (
                <Link
                  href={`/[language]/events/[city]/[moment]/[group]`}
                  as={`/ru/events/${event.city_sysname}/${momentSysName}/${item}`}
                >
                  <a className="text-base uppercase text-teal-500 font-bold no-underline hover:underline mr-2">
                    {_.find(categories, { sysname: item }).name}
                  </a>
                </Link>
              ))}

            <span className="text-base uppercase text-teal-500 font-bold mr-2">
              в {_.find(cities, { sysname: event.city_sysname }).name2}
            </span>
          </div>
          <h1 className="font-bold font-sans break-normal text-gray-900 my-6 text-2xl md:text-4xl">
            {jsUcfirst(event.title)}
          </h1>
          <div className="border-t-4 border-teal-500 italic pt-3">
            <div className="flex mb-4">
              <div className="w-1/2 text-left">
                <p>
                  {event.age_restriction && event.age_restriction !== "0" ? (
                    <span className="block font-semibold text-gray-100 mb-2">
                      <span className="inline-block bg-teal-500 px-2 rounded-full ">
                        {event.age_restriction}
                      </span>
                    </span>
                  ) : (
                    <span></span>
                  )}

                  <span className="text-indigo-600">
                    {event.is_free === true ? (
                      <span>Бесплатно</span>
                    ) : (
                      <span>
                        {event.price && event.price.indexOf("уточн") > -1 && (
                          <span>Цену </span>
                        )}
                        {event.price}
                      </span>
                    )}
                  </span>
                </p>

                {event.moments && (
                  <div className="font-semibold ">
                    {eventMoments && eventMoments.length > 0 ? (
                      eventMoments.map((item) => (
                        <div key={`moment-${item.datesText}`}>
                          {item.selected === true &&
                          event.moments.lenght > 1 ? (
                            <p className="font-bold">{item.datesText}</p>
                          ) : (
                            <p>{item.datesText}</p>
                          )}
                        </div>
                      ))
                    ) : (
                      <div>Мероприятие пришло</div>
                    )}
                  </div>
                )}
              </div>

              {event.place ? (
                <div className="w-1/2 text-right">
                  <div>{jsUcfirst(event.place.title)} </div>
                  <div>
                    {event.place.subway
                      ? "м. " + jsUcfirst(event.place.subway) + ", "
                      : ""}{" "}
                    {event.place.address
                      ? jsUcfirst(event.place.address) + ", "
                      : ""}
                    {_.find(cities, { sysname: event.city_sysname }).name}{" "}
                  </div>
                  <div>{jsUcfirst(event.place.phone)} </div>
                </div>
              ) : (
                <div className="w-1/2 text-right">
                  <div>
                    {_.find(cities, { sysname: event.city_sysname }).name}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <blockquote
          className="border-l-4 border-teal-500 italic my-8 pl-4 md:pl-8"
          dangerouslySetInnerHTML={{ __html: event.description }}
        />
        {event.images && event.images.length > 0 && (
          <div className="flex md:mb-4">
            <div
              className={clsx(classes.myswiper, "w-full bg-gray-200 rounded")}
            >
              {<Swiper title={jsUcfirst(event.title)} images={event.images} />}
            </div>
          </div>
        )}

        <div
          className="py-6 event_body_text"
          dangerouslySetInnerHTML={{ __html: event.body }}
        ></div>
        <div class="pb-20">
          <div className="border-t-4 border-teal-500 pt-4 pb-3 pl-6">
            <span>В </span>
            {cities &&
              cities.map((item) => {
                if (item.sysname === event.city_sysname)
                  return <span key={`city-${item.sysname}`}>{item.name2}</span>;
              })}
            <span> в ближайщее время:</span>
          </div>

          <RandomEvents data={event.related_events} />
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
