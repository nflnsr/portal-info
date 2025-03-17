import Script from "next/script";
import React from "react";

function Adsense() {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.PID!}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

export { Adsense };
