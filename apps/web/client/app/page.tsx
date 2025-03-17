"use client";

import { Banner } from "@components/banner/banner";
import { Card, CardContent } from "@repo/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@components/carousel/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { News } from "@components/news/news";
import { TfiShareAlt } from "react-icons/tfi";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { articleCategory } from "@repo/dto";
import { Categories } from "@components/categories/categories";
import { Footer } from "@components/footer/footer";

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true }),
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const chunkedCategoriesDesktop = [];
  const chunkSizeDesktop = Math.ceil(articleCategory.length / 4);

  for (let i = 0; i < articleCategory.length; i += chunkSizeDesktop) {
    chunkedCategoriesDesktop.push(
      articleCategory.slice(i, i + chunkSizeDesktop),
    );
  }

  const chunkedCategories = [];
  const chunkSize = Math.ceil(articleCategory.length / 14);

  for (let i = 0; i < articleCategory.length; i += chunkSize) {
    chunkedCategories.push(articleCategory.slice(i, i + chunkSize));
  }

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      console.log("current");
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <main className="">
      <div className="mx-auto my-10 h-52 w-full bg-black sm:w-5/6">
        <Banner
          dataAdSlot="2939043628"
          dataAdFormat="fluid"
          dataFullWidthResponsive={true}
          dataAdLayout="in-article"
        />
      </div>
      <div className="mx-auto flex w-full max-w-screen-lg justify-center">
        <div className="relative flex w-full max-w-full justify-center border-[1px] border-b-0 border-gray-300 py-8 font-semibold shadow-xl md:rounded-lg">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="hidden w-full md:flex"
          >
            <CarouselContent className="w-full">
              {chunkedCategoriesDesktop.map((chunk, i) => (
                <CarouselItem key={i}>
                  <div className="flex h-full items-center justify-around text-center">
                    {chunk.map((category, j) => (
                      <Card key={j} className="border-0">
                        <CardContent>
                          {category.replaceAll("_", " ")}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 translate-y-1/2">
              {Array.from({ length: count }).map((_, i) => (
                <span
                  key={i}
                  className={`cursor-default text-lg ${i + 1 === current ? "text-black" : "text-gray-300"}`}
                >
                  &#x2022;
                </span>
              ))}
            </div>
            <CarouselPrevious className="hidden text-gray-900 disabled:text-gray-400 min-[1135px]:block" />
            <CarouselNext className="hidden text-gray-900 disabled:text-gray-400 min-[1135px]:block" />
          </Carousel>

          <Carousel
            // setApi={setApi}
            // plugins={[plugin.current]}
            // onMouseEnter={plugin.current.stop}
            // onMouseLeave={plugin.current.reset}
            className="w-full md:hidden"
          >
            <CarouselContent className="w-full">
              {chunkedCategories.map((chunk, i) => (
                <CarouselItem key={i}>
                  <div className="flex h-full items-center justify-around text-center">
                    {chunk.map((category, j) => (
                      <Card key={j}>
                        <CardContent>{category}</CardContent>
                      </Card>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              {Array.from({ length: count }).map((_, i) => (
                <>
                  <span
                    className={`cursor-default text-lg ${i + 1 === current ? "text-black" : "text-gray-300"}`}
                  >
                    &#x2022;
                  </span>
                </>
              ))}
            </div> */}
          </Carousel>
        </div>
      </div>
      <div className="mx-auto my-10 h-52 w-full bg-black sm:w-5/6">
        <Banner
          dataAdSlot="2939043628"
          dataAdFormat="fluid"
          dataFullWidthResponsive={true}
          dataAdLayout="in-article"
        />
      </div>
      <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-5 px-2 pb-10 sm:flex-row sm:pb-16">
        <div className="flex w-full items-center justify-around rounded-lg bg-neutral-200 py-5 sm:max-w-20 sm:flex-col sm:gap-3">
          <div className="text-center">
            <TfiShareAlt className="mx-auto size-6" />
            <h5 className="text pt-1 text-[0.7rem] font-medium leading-4">
              Bagikan <br /> Halaman
            </h5>
          </div>
          <div>
            <FaSquareWhatsapp className="size-8" />
          </div>
          <div>
            <RiInstagramFill className="size-8" />
          </div>
          <div>
            <FaFacebookSquare className="size-8" />
          </div>
          <div>
            <FaTelegram className="size-8" />
          </div>
          <div>
            <FaXTwitter className="size-8" />
          </div>
        </div>
        <div className="-mt-2 w-full">
          <News />
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[calc(1280px-120px)] flex-col justify-around py-4 sm:flex-row">
        <div className="top-[5.3rem] h-16 w-full px-5 sm:sticky sm:h-[635px] sm:w-52 sm:px-0">
          <Banner
            className="bg-black"
            dataAdSlot="2939043628"
            dataAdFormat="fluid"
            dataFullWidthResponsive={true}
            dataAdLayout="in-article"
          />
        </div>
        <Categories className="pt-5 sm:pt-0" />
        <div className="top-[5.3rem] h-16 w-full px-5 sm:sticky sm:h-[635px] sm:w-52 sm:px-0">
          <Banner
            className="bg-black"
            dataAdSlot="2939043628"
            dataAdFormat="fluid"
            dataFullWidthResponsive={true}
            dataAdLayout="in-article"
          />
        </div>
      </div>
      <div className="pt-5">
        <Footer />
      </div>
    </main>
  );
}
