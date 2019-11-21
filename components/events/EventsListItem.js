import React from 'react';
import moment from 'moment';
import 'moment-timezone';
import Link from 'next/link'

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

  if (momentStart.format('DDMMYYYY') === momentEnd.format('DDMMYYYY')) {
    momentText = formatMonth(momentStart.format('dd, DD MMM YYYY'));
  } else {
    momentText = formatMonth(momentStart.format('dd, DD MMM YYYY')) + " - " + formatMonth(momentEnd.format('dd, DD MMM YYYY'));
  }

  if (momentStart.format('HH:mm') === momentEnd.format('HH:mm')) {
    momentText += " в " + momentStart.format('HH:mm');
  } else {
    if (momentStart.format('HH') !== "00") {
      momentText += " c " + momentStart.format('HH:mm') + " до " + momentEnd.format('HH:mm');
    }
  }

  if (momentStart.format('YYYY') === "0001") {
    momentText = 'Любой день ';
  }

  return momentText;
}


function formatDatesAll(dates) {
  let result = '';
  if (dates) {
    dates.map(item => {
      result += formatDates(item.from, item.to) + ", ";
    })
  }
  return result;
}



const EventsListItem = (props) => {

  const item = props.data;

  function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  //const itemUrlAs = { pathname: `/ru/event/${item.sysName}-${item.id}` };
  //const itemUrlHref = itemUrlAs;//`/[language]/event/[eventSysName]`;

  const itemUrlHref = `/[language]/event/[eventSysName]`;
  const itemUrlAs = `/ru/event/${item.sysName}-${item.id}`;

  return (
    <div className={props.index === 0 ? "md:flex border-gray-400 p-4 py-6" : "md:flex border-t border-gray-400 p-4 py-6"}>
      {
        item.imageurl && (
          <div className="md:flex-shrink-0">
            {
              <Link href={itemUrlHref} as={itemUrlAs}>
                <a><img className="rounded-lg md:w-64" src={item.imageurl} alt={jsUcfirst(item.title) + " на GonnaVisit.com"} title={jsUcfirst(item.title) + " на GonnaVisit.com"} /></a>
              </Link>

            }
          </div>
        )
      }
      <div className="mt-4 md:mt-0 md:ml-6">
        <div className="block mb-2">
          <Link href={itemUrlHref} as={itemUrlAs}>
            <a className="text-lg font-semibold text-gray-900 no-underline border-b-2 border-white hover:border-teal-500 hover:text-gray-900">{jsUcfirst(item.title)}</a>
          </Link>
        </div>
        <div>
          {
            (item.age_restriction && item.age_restriction !== "0") ? (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {item.age_restriction}
              </span>
            ) : (
                <span></span>
              )
          }
          < span className="text-sm text-gray-600" >
            {formatDatesAll([{ from: item.moment_from, to: item.moment_to }])}
          </span>
          {
            item.is_free === true ? (
              <span className="text-sm text-indigo-600">
                Бесплатно
              </span>
            ) : (
                <span className="text-sm text-indigo-600">
                  {
                    (item.price && item.price.indexOf("уточн") > -1) && (
                      <span>Цену </span>
                    )
                  }
                  {item.price}
                </span>

              )
          }
        </div>

        <div className="mt-2 text-gray-600" dangerouslySetInnerHTML={{ __html: item.description }}></div>
        {/* <div className="py-3">
          {
            event.tags && (
              event.tags.map(item => (
                <a key={`a${item}`} href="#" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:underline">{item}</a>
              ))
            )
          }
        </div> */}
      </div>
    </div >
  );
}

export default EventsListItem;