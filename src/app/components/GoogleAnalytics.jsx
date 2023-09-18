import React from "react";

const GoogleAnalytics = () => {
  const _trackId = process.env.TRACK_ID;

  return (
    <head>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${_trackId}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${_trackId}');
              `,
        }}
      />
    </head>
  );
};

export default GoogleAnalytics;
