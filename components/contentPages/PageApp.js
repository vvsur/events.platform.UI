import React, { useEffect } from "react";

const PageApp = (props) => {
  const content = props.data;
  return (
    <div>
      <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal mb-10">
        <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-1 text-3xl md:text-4xl">
          {content.title}
        </h1>
        <blockquote
          className="border-l-4 border-teal-500 italic my-8 pl-8 md:pl-12"
          dangerouslySetInnerHTML={{ __html: content.description }}
        />
        <div
          className="py-6 event_body_text"
          dangerouslySetInnerHTML={{ __html: content.body }}
        ></div>
      </div>
    </div>
  );
};

export default PageApp;
