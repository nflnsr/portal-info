"use client";
import { Card } from "@repo/ui/card";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Article } from "@repo/dto";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@components/carousel/carousel";
import Autoplay from "embla-carousel-autoplay";

import imageSample from "@assets/contoh-1.jpeg";
import trumpCrypto from "@assets/trump-and-crypto-2026.png";
import usStocks from "@assets/us-stocks-2026.png";
import disasterSumatera from "@assets/disaster-sumatera.png";
import indonesiaStocks from "@assets/indonesia-stocks.png";


function News() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [chunkedCategories, setChunkedCategories] = useState<Article[][]>([]);

  const plugin = useRef(Autoplay({ delay: 3500, stopOnInteraction: true }));

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice =
      /mobile|android|ios|iphone|ipad|ipod|windows phone/i.test(userAgent);
    const windowWidth = window.innerWidth;
    if (windowWidth < 640) {
      setIsMobile(true);
    } else {
      setIsMobile(isMobileDevice);
    }
  }, []);

  useEffect(() => {
    const splitCategories = isMobile ? 1 : 2;
    const chunkedCategoriesTemp = [];
    const chunkSize = Math.ceil(
      articleCategory.length / (articleCategory.length / splitCategories),
    );
    for (let i = 0; i < articleCategory.length; i += chunkSize) {
      chunkedCategoriesTemp.push(articleCategory.slice(i, i + chunkSize));
    }
    setChunkedCategories(chunkedCategoriesTemp);
  }, [isMobile]);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  return (
    <>
      <fieldset className="flex w-full gap-8 rounded-md border-2 border-gray-600 px-4 pt-2 shadow-2xl outline-sky-700 sm:p-6 sm:pr-2 sm:pt-2.5">
        <legend className="ml- font px-2 font-mono text-[1.6rem] font-semibold text-cyan-600 underline underline-offset-4 sm:mx-24">
          Berita Pilihan
        </legend>
        <Carousel
          setApi={setCarouselApi}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full"
        >
          <CarouselContent className="w-full">
            {chunkedCategories.map((chunk, i) => (
              <CarouselItem key={i}>
                <div className="flex h-full items-center justify-around gap-5 text-center">
                  {chunk.map((category, j) => (
                    <div className="relative w-full sm:w-1/2" key={j}>
                      <div className="h-72 w-full sm:w-1/2">
                        <Image
                          src={category.image || imageSample}
                          alt="news"
                          layout="fill"
                          objectFit="cover"
                          className=""
                        />
                      </div>
                      <div className="absolute bottom-0 z-20 h-full max-h-20 w-full bg-white bg-opacity-90 px-4 pb-2 ">
                        <h4 className="line-clamp-1 w-full text-left text-lg font-semibold text-cyan-600">
                          {category.title}
                        </h4>
                        <p className="z-20 line-clamp-2 text-left">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -bottom-3.5 left-1/2 flex -translate-x-1/2 translate-y-1/2 gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <span
                key={i}
                className={`block h-1 w-5 cursor-default text-lg ${i + 1 === current ? "bg-gray-600" : "bg-neutral-300"}`}
              />
            ))}
          </div>
          {/* <CarouselPrevious className="text-gray-900 disabled:text-gray-400" />
            <CarouselNext className="text-gray-900 disabled:text-gray-400" /> */}
        </Carousel>
      </fieldset>
    </>
  );
}

const beritaPilihan: Article[] = [];

const articleCategory: Article[] = [
  {
    id: 1,
    user_id: 1,
    user: {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      phone_number: "123-456-7890",
      role: "Admin",
      created_at: new Date(),
    },
    title:
      "Trump and Crypto in 2026: A New Era for Digital Assets in U.S. Politics",
    description:
      "In 2026, Donald Trump’s stance on cryptocurrency draws renewed attention as policies, market reactions, and political influence converge, shaping the future of crypto adoption in the United States.",
    category: "Edukasi",
    topic:
      "Trump and Crypto in 2026: A New Era for Digital Assets in U.S. Politics",
    image: trumpCrypto.src,
    writter: "John Doe",
    tags: ["typescript", "programming", "javascript"],
    liked_by: [],
    like_count: 2,
    comment: [
      {
        id: "",
        comment: "Great article!",
        user_id: 2,
        article_id: 1,
        created_at: new Date(),
      },
    ],
    comment_count: 1,
    created_at: new Date(),
  },
  {
    id: 1,
    user_id: 1,
    user: {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      phone_number: "123-456-7890",
      role: "Admin",
      created_at: new Date(),
    },
    title: "U.S. Stocks in 2026: Market Momentum Amid Policy and Tech Shifts",
    description: "In 2026, U.S. stock markets face renewed volatility and opportunity as economic policy, interest rates, and technology-driven growth reshape investor strategies and market sentiment.",
    category: "Edukasi",
    topic: "TypeScript",
    image: usStocks.src,
    writter: "John Doe",
    tags: ["typescript", "programming", "javascript"],
    liked_by: [],
    like_count: 2,
    comment: [
      {
        id: "",
        comment: "Great article!",
        user_id: 2,
        article_id: 1,
        created_at: new Date(),
      },
    ],
    comment_count: 1,
    created_at: new Date(),
  },
  {
    id: 1,
    user_id: 1,
    user: {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      phone_number: "123-456-7890",
      role: "Admin",
      created_at: new Date(),
    },
    title: "Natural Disaster Strikes Sumatra, Thousands Affected",
    description: "A major natural disaster has hit parts of Sumatra, causing severe damage to homes, infrastructure, and livelihoods. Authorities report thousands of residents affected, with evacuation and emergency response efforts still underway as weather conditions remain unpredictable.",
    category: "Edukasi",
    topic: "TypeScript",
    image: disasterSumatera.src,
    writter: "John Doe",
    tags: ["typescript", "programming", "javascript"],
    liked_by: [],
    like_count: 2,
    comment: [
      {
        id: "",
        comment: "Great article!",
        user_id: 2,
        article_id: 1,
        created_at: new Date(),
      },
    ],
    comment_count: 1,
    created_at: new Date(),
  },
  {
    id: 1,
    user_id: 1,
    user: {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      phone_number: "123-456-7890",
      role: "Admin",
      created_at: new Date(),
    },
    title: "Indonesian Stocks Rally as Investor Confidence Improves",
    description: "Indonesia’s stock market shows positive momentum as investor confidence strengthens, driven by stable economic growth, rising commodity prices, and optimism toward domestic corporate earnings and government policy direction.",
    category: "Edukasi",
    topic: "TypeScript",
    image: indonesiaStocks.src,
    writter: "John Doe",
    tags: ["typescript", "programming", "javascript"],
    liked_by: [],
    like_count: 2,
    comment: [
      {
        id: "",
        comment: "Great article!",
        user_id: 2,
        article_id: 1,
        created_at: new Date(),
      },
    ],
    comment_count: 1,
    created_at: new Date(),
  },
  {
    id: 1,
    user_id: 1,
    user: {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      phone_number: "123-456-7890",
      role: "Admin",
      created_at: new Date(),
    },
    title: "Introduction to TypeScript",
    description: "Learn the basics of TypeScript in this comprehensive guide.",
    category: "Edukasi",
    topic: "TypeScript",
    image: "",
    writter: "John Doe",
    tags: ["typescript", "programming", "javascript"],
    liked_by: [],
    like_count: 2,
    comment: [
      {
        id: "",
        comment: "Great article!",
        user_id: 2,
        article_id: 1,
        created_at: new Date(),
      },
    ],
    comment_count: 1,
    created_at: new Date(),
  },
  {
    id: 1,
    user_id: 1,
    user: {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      phone_number: "123-456-7890",
      role: "Admin",
      created_at: new Date(),
    },
    title: "Introduction to TypeScript",
    description: "Learn the basics of TypeScript in this comprehensive guide.",
    category: "Edukasi",
    topic: "TypeScript",
    image: "",
    writter: "John Doe",
    tags: ["typescript", "programming", "javascript"],
    liked_by: [],
    like_count: 2,
    comment: [
      {
        id: "",
        comment: "Great article!",
        user_id: 2,
        article_id: 1,
        created_at: new Date(),
      },
    ],
    comment_count: 1,
    created_at: new Date(),
  },
  {
    id: 1,
    user_id: 1,
    user: {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      phone_number: "123-456-7890",
      role: "Admin",
      created_at: new Date(),
    },
    title: "Introduction to TypeScript",
    description: "Learn the basics of TypeScript in this comprehensive guide.",
    category: "Edukasi",
    topic: "TypeScript",
    image: "",
    writter: "John Doe",
    tags: ["typescript", "programming", "javascript"],
    liked_by: [],
    like_count: 2,
    comment: [
      {
        id: "",
        comment: "Great article!",
        user_id: 2,
        article_id: 1,
        created_at: new Date(),
      },
    ],
    comment_count: 1,
    created_at: new Date(),
  },
  {
    id: 1,
    user_id: 1,
    user: {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      phone_number: "123-456-7890",
      role: "Admin",
      created_at: new Date(),
    },
    title: "Introduction to TypeScript",
    description: "Learn the basics of TypeScript in this comprehensive guide.",
    category: "Edukasi",
    topic: "TypeScript",
    image: "",
    writter: "John Doe",
    tags: ["typescript", "programming", "javascript"],
    liked_by: [],
    like_count: 2,
    comment: [
      {
        id: "",
        comment: "Great article!",
        user_id: 2,
        article_id: 1,
        created_at: new Date(),
      },
    ],
    comment_count: 1,
    created_at: new Date(),
  },
  {
    id: 1,
    user_id: 1,
    user: {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      phone_number: "123-456-7890",
      role: "Admin",
      created_at: new Date(),
    },
    title: "Introduction to TypeScript",
    description: "Learn the basics of TypeScript in this comprehensive guide.",
    category: "Edukasi",
    topic: "TypeScript",
    image: "",
    writter: "John Doe",
    tags: ["typescript", "programming", "javascript"],
    liked_by: [],
    like_count: 2,
    comment: [
      {
        id: "",
        comment: "Great article!",
        user_id: 2,
        article_id: 1,
        created_at: new Date(),
      },
    ],
    comment_count: 1,
    created_at: new Date(),
  },
];

export { News };
