import React, { useEffect } from "react";
import _ from "lodash";
import "moment-timezone";
import EventsListItem from "./EventsListItem";

function RandomEvents(props) {
  const items = props.data;

  return (
    <div>
      <div className="w-full px-3 md:px-5 text-x2 md:text-xl text-gray-800 leading-normal">
        {items &&
          items.map((item, index) => (
            <EventsListItem
              size="small"
              data={item}
              key={item.id}
              index={index}
            />
          ))}
      </div>
    </div>
  );
}

export default RandomEvents;
