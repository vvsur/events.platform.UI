import React from "react";
import Link from "next/link";

export default function EventsGroupsList(props) {
  const selectItem = props.selectItem ? props.selectItem : null;

  return (
    <div className="items-center pb-6">
      <div class="text-left px-3">
        {props.items ? (
          props.items.map((item) => (
            <div
              key={item.sysname}
              class="items-center text-indigo-100 leading-none rounded-full inline-flex"
            >
              <Link
                href={
                  item.sysname === selectItem
                    ? `/[language]/events/[city]/[moment]/`
                    : `/[language]/events/[city]/[moment]/[group]`
                }
                as={
                  item.sysname === selectItem
                    ? `${props.baseUrl}`
                    : `${props.baseUrl}/${item.sysname}`
                }
              >
                <a
                  className={`inline-block align-middle text-gray-500 no-underline border-b-2 border-white ml-1 mr-3 pt-3 pb-1 text-lg ${
                    item.sysname === selectItem
                      ? `border-teal-500  text-gray-900`
                      : `hover:border-teal-500 hover:text-gray-900`
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            </div>
          ))
        ) : (
          <div className="m-10">
            <p>
              На это время нет актуальных мероприятий, но скоро обязательно
              появятся :)
            </p>
            <p className="mt-4 mb-4">
              <a
                className="align-middle no-underline border-b-2 border-white hover:border-teal-500 hover:text-gray-900"
                href="/"
              >
                Посмотреть все мероприятия.
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
