import React from "react";

import FiltersPanel from "./LayoutFiltersPanel/FiltersPanel";

import Link from "next/link";

function LayoutToolbar(props) {
  const { language, city, moment, cities, moments } = props;

  let mainPageUrl = {
    urlHref: { pathname: `/${language}/events/${city}/all-times` },
    urlAs: { pathname: `/${language}/events/${city}/all-times` },
  };

  return (
    <nav
      id="header"
      className="fixed w-full z-10 top-0 bg-white border-b border-gray-400"
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
        <div className="pl-4 flex items-center">
          <Link href={mainPageUrl.urlHref} as={mainPageUrl.urlAs}>
            <a
              className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl cursor-pointer"
              title="GonnaVisit.com"
            >
              <span className="block md:hidden">GV</span>
              <span className="hidden md:block">GonnaVisit.com</span>
            </a>
          </Link>
        </div>

        <div className="flex content-center items-center w-auto block mt-0 z-20">
          <ul className="list-reset justify-end items-center">
            <li className="mr-3 py-2 lg:py-0">
              <FiltersPanel
                language={language}
                city={city}
                moment={moment}
                cities={cities}
                moments={moments}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default LayoutToolbar;
