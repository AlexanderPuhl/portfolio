import React from 'react';
import { Helmet } from 'react-helmet';

function SEO() {
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title="Alex Puhl"
      author="Alex Puhl"
      meta={[
        {
          name: `author`,
          content: 'Alex Puhl',
        },
        {
          name: `description`,
          content: "Alex Puhl's portfolio.",
        },
        {
          property: `og:url`,
          content: 'https://www.alexpuhl.com',
        },
        {
          property: `og:type`,
          content: 'website',
        },
        {
          property: `og:site_name`,
          content: "Alex Puhl's Portfolio",
        },
        {
          property: `og:title`,
          content: 'Alex Puhl',
        },
        {
          property: `og:description`,
          content: "Alex Puhl's portfolio.",
        },
        {
          property: 'og:image',
          content:
            'https://www.alexpuhl.com/static/ea452c3fbc41df239c57ee6feacbc72b/ee604/openGraphScreenShot.png',
        },
        {
          property: 'og:image:url',
          content:
            'https://www.alexpuhl.com/static/ea452c3fbc41df239c57ee6feacbc72b/ee604/openGraphScreenShot.png',
        },
        {
          property: `og:image:type`,
          content: 'image/png',
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: `twitter:title`,
          content: 'Alex Puhl',
        },
        {
          name: `twitter:description`,
          content: "Alex Puhl's portfolio.",
        },
        {
          name: `twitter:site`,
          content: '@AlexPuhl',
        },
        {
          name: `twitter:creator`,
          content: '@AlexPuhl',
        },
        {
          name: `twitter:image`,
          content:
            'https://www.alexpuhl.com/static/ee9ab1bf483dbd6001dcc88e814f1682/0edbf/twitterScreenShot.png',
        },
      ]}
    />
  );
}

export default SEO;
