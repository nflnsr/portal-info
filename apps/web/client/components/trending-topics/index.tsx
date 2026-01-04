import { cn } from "@repo/web-utils";

export function TrendingTopics({ className }: { className?: string }) {
  return (
    <div className={cn("border-2 border-black p-4", className)}>
      <h1 className="pt-2 text-center text-xl font-semibold">
        Trending Topics
      </h1>
      <div className="pt-3">
        <ul>
          <li className="text-lg font-semibold">1. Trending Topic 1</li>
          <li className="text-lg font-semibold">2. Trending Topic 2</li>
          <li className="text-lg font-semibold">3. Trending Topic 3</li>
          <li className="text-lg font-semibold">4. Trending Topic 4</li>
          <li className="text-lg font-semibold">5. Trending Topic 5</li>
        </ul>
      </div>
    </div>
  );
}
