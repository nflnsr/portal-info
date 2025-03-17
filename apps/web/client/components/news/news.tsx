"use client";
import { Card } from "@repo/ui/card";
import imageSample from "@assets/contoh-1.jpeg";
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

function News() {
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
      title: "Introduction to TypeScript",
      description:
        "Learn the basics of TypeScript in this comprehensive guide.",
      category: "Edukasi",
      topic: "TypeScript",
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
      description:
        "Learn the basics of TypeScript in this comprehensive guide.",
      category: "Edukasi",
      topic: "TypeScript",
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
      description:
        "Learn the basics of TypeScript in this comprehensive guide.",
      category: "Edukasi",
      topic: "TypeScript",
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
      description:
        "Learn the basics of TypeScript in this comprehensive guide.",
      category: "Edukasi",
      topic: "TypeScript",
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
      description:
        "Learn the basics of TypeScript in this comprehensive guide.",
      category: "Edukasi",
      topic: "TypeScript",
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
      description:
        "Learn the basics of TypeScript in this comprehensive guide.",
      category: "Edukasi",
      topic: "TypeScript",
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
      description:
        "Learn the basics of TypeScript in this comprehensive guide.",
      category: "Edukasi",
      topic: "TypeScript",
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
      description:
        "Learn the basics of TypeScript in this comprehensive guide.",
      category: "Edukasi",
      topic: "TypeScript",
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
      description:
        "Learn the basics of TypeScript in this comprehensive guide.",
      category: "Edukasi",
      topic: "TypeScript",
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
      <fieldset className="flex w-full gap-8 rounded-md border-2 border-gray-600 p-6 pr-2 pt-2 shadow-2xl sm:p-6 sm:pr-2">
        <legend className="mx-24 px-1 text-lg">Berita Terbaru</legend>
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
                          src={imageSample}
                          alt="news"
                          layout="fill"
                          objectFit="cover"
                          className=""
                        />
                      </div>
                      <div className="absolute bottom-0 z-20 bg-white bg-opacity-90 px-4 pb-2">
                        <h4 className="text-lg font-semibold text-cyan-500">
                          {category.topic}
                        </h4>
                        <p className="z-20 line-clamp-2">
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

export { News };
