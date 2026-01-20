import Image from "next/image";
import imageSample from "@assets/contoh-1.jpeg";
import imageSample2 from "@assets/contoh.png";
import anime from "@assets/anime.png";

function FeaturedNews() {
  return (
    <div className="border-2 border-black p-4">
      <h1 className="pt-2 text-center text-2xl font-semibold">
        Berita Terbaru
      </h1>
      <div className="space-y-2 px-3 pt-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div className="flex w-full gap-4 pt-3">
            <div>
              <div className="h-24 w-36">
                <Image
                  src={imageSample}
                  alt="Featured News"
                  width={200}
                  height={200}
                  className="size-full"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Judul Berita</h3>
              <p className="line-clamp-3 text-sm [overflow-wrap:anywhere]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        ))}
        {Array.from({ length: 4 }).map((_, i) => (
          <div className="flex w-full gap-4 pt-3">
            <div>
              <div className="h-24 w-36">
                <Image
                  src={anime}
                  alt="Featured News"
                  width={200}
                  height={200}
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Judul Berita</h3>
              <p className="line-clamp-3 text-sm [overflow-wrap:anywhere]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { FeaturedNews };
