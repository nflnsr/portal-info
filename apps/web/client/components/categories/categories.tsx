import Image from "next/image";
import brandSample from "@assets/brand-sample.png";
import Link from "next/link";
import { articleCategory } from "@repo/dto";
import { cn } from "@repo/web-utils";

function Categories({ className }: { className?: string }) {
  return (
    <div className={cn("w-full px-4", className)}>
      {articleCategory.map((category, i) => (
        <div key={i} className="mx-auto max-w-screen-md px-2 pb-4 sm:pb-6">
          <div className="flex items-center justify-between pb-1">
            <h1 className="pr-2 font-mono text-2xl font-bold text-cyan-600 sm:pl-5 sm:text-left">
              {category.replaceAll("_", " ")}
            </h1>
            <h2 className="text-lg underline">
              <Link href={`/category/${category.replaceAll("_", "-").toLowerCase()}`} className="text-wrap">Lihat Semua</Link>
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-4 rounded-lg border-2 border-black p-5 sm:flex-row">
            <div className="relative w-full sm:w-1/2">
              <div className="h-56 w-full sm:w-1/2">
                <Image
                  src={brandSample}
                  alt="news"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="absolute bottom-0 w-full rounded-b-lg bg-slate-200 bg-opacity-90 px-2.5">
                <h2 className="line-clamp-1 font-semibold">Judul</h2>
                <p className="line-clamp-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div className="relative w-full sm:w-1/2">
              <div className="h-56 w-full sm:w-1/2">
                <Image
                  src={brandSample}
                  alt="news"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="absolute bottom-0 w-full rounded-b-lg bg-slate-200 bg-opacity-90 px-2.5">
                <h2 className="line-clamp-1 font-semibold">Judul</h2>
                <p className="line-clamp-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { Categories };
