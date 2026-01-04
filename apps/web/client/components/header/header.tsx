"use client";
import { CgProfile } from "react-icons/cg";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import React, { useState } from "react";
import { Search } from "lucide-react";

interface NavLink {
  icon: React.ReactElement;
  href: string;
}

function Header() {
  const localTime = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const navLink: NavLink[] = [
    { icon: <IoLogoYoutube />, href: "#help" },
    { icon: <FaXTwitter />, href: "#about-us" },
    { icon: <FaInstagram />, href: "#services" },
    { icon: <FaFacebook />, href: "#help" },
    { icon: <FaTiktok />, href: "#articles" },
  ];
  const toggleMenu = () => {
    const html = document.documentElement;
    const menu = document.getElementById("navbar-default") as HTMLDivElement;
    const button = document.getElementById(
      "navbar-button",
    ) as HTMLButtonElement;

    menu.classList.toggle("hidden");
    if (!menu.classList.contains("hidden")) {
      html.addEventListener("click", (e) => {
        if (
          e.target !== button &&
          !button.contains(e.target as Node) &&
          e.target !== menu &&
          !menu.contains(e.target as Node)
        ) {
          menu.classList.add("hidden");
        } else {
          const link = Array.from(
            document.querySelectorAll("#navbar-default a"),
          );
          if (link.some((el) => el === e.target)) {
            menu.classList.add("hidden");
          }
        }
      });
    }
  };

  const [searchValue, setSearchValue] = useState<string>("");
  console.log(searchValue);

  return (
    <header className="sticky top-0 z-50 mx-auto max-w-[3840px] bg-white">
      <nav className="border-b-[1px] border-black py-3">
        <div className="mx-auto flex justify-around sm:max-w-screen-xl">
          <div className="flex w-full items-center justify-between px-4 md:w-[60%] md:px-0 lg:w-4/12 lg:justify-end">
            <a href="/" className="flex space-x-2">
              {/* <Image src={LogoIMG} className="size-8" alt="Logo" /> */}
              <h1 className="self-center whitespace-nowrap bg-gradient-to-r from-cyan-300 via-sky-400 to-teal-500 bg-clip-text text-xl font-bold leading-[24.5px] text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] md:text-2xl">
              {/* <h1 className="self-center whitespace-nowrap bg-gradient-to-r from-cyan-300 via-sky-400 to-teal-500 bg-clip-text text-xl font-bold leading-[24.5px] text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] md:text-2xl"> */}
                <span className="block leading-none tracking-tighter">
                  PORTAL
                </span>
                <span className="block pl-7 leading-none tracking-tighter">
                  INFO
                </span>
              </h1>
            </a>
            <span className="text hidden px-8 font-sans font-medium sm:block">
              {localTime}
            </span>
            <button
              id="navbar-button"
              data-collapse-toggle="navbar-default"
              type="button"
              className="flex h-10 w-10 flex-col justify-around rounded-lg bg-zinc-100 py-2 text-sm text-gray-500 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => toggleMenu()}
            >
              <span className="sr-only">Open main menu</span>
              {/* <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-fit"
                  d="M3 1h30M2 7h15M2 13h15M2"
                />
              </svg> */}
              {Array.from({ length: 3 }).map((_, i) => (
                <span
                  key={i}
                  className="mx-auto block h-[2.4px] w-5 rounded-lg bg-slate-400"
                />
              ))}
            </button>
          </div>
          <div className="hidden w-0 lg:flex lg:w-4/12">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative h-full w-full p-1"
            >
              <div className="h-full">
                <input
                  type="text"
                  className="h-full w-full rounded-lg border-2 border-b-4 border-gray-600 pb-1 pl-4 outline-4 outline-gray-900 drop-shadow-xl focus:border-2 focus:border-gray-700 focus:drop-shadow-lg"
                  placeholder="cari berita dengan kata kunci..."
                />
              </div>
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <Search size={20} className="" />
              </button>
            </form>
          </div>
          <div
            className={`absolute top-16 z-10 hidden w-full overflow-y-scroll rounded-b-2xl bg-neutral-100 shadow-xl md:static md:ml-0 md:flex md:w-4/12 md:overflow-visible md:bg-transparent md:shadow-none [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-400 dark:[&::-webkit-scrollbar-thumb]:bg-slate-700 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-[8px]`}
            id="navbar-default"
          >
            <ul className="flex flex-row items-center justify-center p-5 pb-0 text-sm font-medium sm:px-12 md:space-y-0 md:bg-transparent md:p-0 md:px-4 md:text-base">
              {navLink.map((nav, i) => (
                <li
                  key={i}
                  className="w-full ring-1 ring-gray-400 md:w-auto md:ring-0"
                >
                  <a
                    href={nav.href}
                    className="mx-auto block w-fit px-3 py-2 text-center font-semibold text-black hover:text-gray-600 hover:underline md:hover:text-gray-100"
                  >
                    {nav.icon}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center gap-x-2 px-5 text-2xl md:justify-start md:gap-x-0 md:px-0">
              <div className="w-full py-2">
                <input
                  type="search"
                  className="h-8 w-full px-2 text-sm md:hidden"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
              <div>
                <CgProfile size={28} className="" />
              </div>
            </div>
            {searchValue && (
              <div className={`h-[50svh] space-y-1.5 px-5 text-justify`}>
                {Array.from({ length: 20 }).map((_, i) => (
                  <div>
                    <p className="line-clamp-1 font-semibold">
                      Lorem Ipsum is simply dummy text of the printing
                    </p>
                    <p className="line-clamp-2 leading-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                ))}
              </div>
            )}
            <div className="sticky bottom-0 block h-3 w-full bg-stone-100 md:hidden" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export { Header };
