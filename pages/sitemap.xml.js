// import { NextContext } from 'next';
import React from 'react'


const HOST = process.env.MAIN_HOST;

// Add any static site routes here
const SITEMAP_HEADER = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
const SITEMAP_FOOTER = `
</urlset>`;


export default function SiteMap() {
  return null;
}

SiteMap.getInitialProps = async ({ res }) => {
  if (res) {
    //let sitemap = `${SITEMAP_HEADER}`;

    const itemsRes = await fetch(`${process.env.API_URL}/for-sitemap`)
    const items = await itemsRes.json()

    let nodes = [];

    if (items && items.result && items.result.events) {

      items.result.events.map(item => {
        nodes.push({ _id: `/${item.lang}/event/${item.sysName}-${item.id}`, createdAt: item.created_at, updatedAt: item.updated_at });
      });

    }

    const sitemap = `${SITEMAP_HEADER}
    ${nodes.map(node => mapEntry(node, '/pathToNode'))}
    ${SITEMAP_FOOTER}`;
    res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate');
    res.setHeader('Content-Type', 'application/xml');
    res.statusCode = 200;
    res.end(sitemap);
  }

  return {
    done: true
  };
};

function mapEntry(
  node,
  priority = 0.5,
  changefreq = 'always'
) {
  return `
<url>
   <loc>${HOST}${node._id}</loc>
</url>`;
}
{/* <lastmod>${node.updatedAt ? node.updatedAt : node.createdAt}</lastmod>
<changefreq>${changefreq}</changefreq>
<priority>${priority}</priority> */}
