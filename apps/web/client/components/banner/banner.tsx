// "use client";
import React, { useEffect } from "react";
import { cn } from "@repo/web-utils";

interface BannerProps {
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
  dataAdLayout: string;
  className?: string;
}

function Banner({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
  dataAdLayout,
  className,
}: BannerProps) {
  useEffect(() => {
    try {
      if ((window as any).adsbygoogle && !(window as any).adsbygoogle.loaded) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {},
        );
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  return (
    <ins
      className={cn(`adsbygoogle size-full`, className)}
      style={{ display: "block", textAlign: "center" }}
      data-ad-layout={dataAdLayout}
      data-ad-format={dataAdFormat}
      data-ad-client={`ca-pub-${process.env.PID!}`}
      data-ad-slot={dataAdSlot}
      data-full-width-responsive={dataFullWidthResponsive}
      suppressHydrationWarning
    />
  );
}

export { Banner };
