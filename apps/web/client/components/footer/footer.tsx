import { FaFacebook, FaFacebookF } from "react-icons/fa";
import { FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import AppDownloadImage from "@assets/app-download.png";
import Image from "next/image";
import { cn } from "@repo/web-utils";
import Link from "next/link";

function Footer({ className }: { className?: string }) {
  return (
    <div className={cn("bg-sky-900", className)}>
      <div className="mx-auto grid w-full max-w-[calc(1280px-120px)] grid-cols-2 grid-rows-2 space-y-0 px-1.5 pt-14 sm:grid-cols-4 sm:grid-rows-1 sm:space-y-0">
        <div className="">
          <div>
            <h1 className="self-center whitespace-nowrap text-xl font-bold leading-[24.5px] text-transparent text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] md:text-4xl">
              <span className="block leading-none tracking-tighter">
                PORTAL
              </span>
              <span className="block pl-7 leading-none tracking-tighter">
                INFO
              </span>
            </h1>
          </div>
          <div className="pt-14">
            <p className="font-mono text-xl font-extrabold text-white">
              Social Media
            </p>
            <div className="flex w-full flex-wrap gap-1.5">
              <div className="rounded-full bg-white p-1">
                <FaXTwitter className="size-5" />
              </div>
              <div className="">
                <FaFacebook
                  viewBox="10 10 480 480"
                  className="size-7 rounded-full bg-black fill-white stroke-white p-0 outline-0"
                />
              </div>
              <div className="rounded-full bg-white p-[0.2rem]">
                <IoLogoInstagram className="size-[1.4rem]" />
              </div>
              <div className="rounded-full bg-white p-1">
                <FaYoutube className="size-5" />
              </div>
              <div className="rounded-full bg-white p-1">
                <FaWhatsapp className="size-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="size-full text-white">
          <p className="font-bold">Menu</p>
          <ul className="pt-2">
            <li className="cursor-pointer">Beranda</li>
            <li className="cursor-pointer">Tentang Kami</li>
            <li className="cursor-pointer">Kontak</li>
            <li className="cursor-pointer">Berlangganan</li>
            <li className="cursor-pointer">Beriklan</li>
          </ul>
        </div>
        <div className="size-full text-white">
          <p className="font-bold">Lainnya</p>
          <ul className="pt-2">
            <li className="cursor-pointer">
              <Link href="/privacy-policy">Kebijakan Privasi</Link>
            </li>
            <li className="cursor-pointer">Ketentuan Pengguna</li>
            <li className="cursor-pointer">FAQ</li>
          </ul>
        </div>
        <div className="size-full text-white">
          <p className="font-bold">Portal Info</p>
          <p>
            Jl. Raya Jurnalitas No 23, Kec. Media, Kota Informasi, Jakarta
            Tenggara 15699
          </p>
          <div className="-ml-3 pt-2">
            <Image
              src={AppDownloadImage}
              alt="download app"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="w-full py-2">
        <p className="font- text-center text-xs text-white">
          Copyright © 2025 • Portal Info
        </p>
      </div>
    </div>
  );
}

export { Footer };
