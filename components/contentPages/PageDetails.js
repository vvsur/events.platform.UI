import React from 'react';
import Head from 'next/head'

function EventDetails(props) {

  const page = props.page;

  if (!page) return null;
  return (
    <div>
      {
        (page.title && page.title.length > 0) && (
          <Head>
            <meta charSet="utf-8" />
            <title>{page.title} | GonnaVisit.com</title>
            <meta name="keywords" content={page.keywords} />
            <meta name="description" content={page.description} />
          </Head>
        )
      }
      <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
        <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-1 text-3xl md:text-4xl">{page.title}</h1>
        <div className="py-6 event_body_text" dangerouslySetInnerHTML={{ __html: page.body }}></div>
      </div>
    </div>
  );
}

export default EventDetails;