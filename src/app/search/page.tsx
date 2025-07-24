import { unstable_noStore } from "next/cache";
import { ResultsList } from "./results-list";
import { UploadMemeButton } from "./upload-meme-button";
import { imagekit } from "@/app/lib/image-kit";
import { getFavoriteCounts } from "./loaders";
import Image from "next/image";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  unstable_noStore();

  const files = await imagekit.listFiles({
    tags: searchParams.q,
  });

  const favoriteCounts = await getFavoriteCounts(
    files.map((file) => file.fileId)
  );

  const noResults = files.length === 0;

  return (
    <div className="container mx-auto space-y-8 py-8 px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">Search Results</h1>
        <UploadMemeButton />
      </div>

      {noResults ? (
        <div className="flex flex-col items-center justify-center gap-4 py-12">
          <Image
            src="/no_result_found.png"
            width={200}
            height={200}
            alt="No results found"
          />
          <p className="text-center text-muted-foreground">
            No results found for "<strong>{searchParams.q}</strong>"
          </p>
        </div>
      ) : (
        <ResultsList files={files} counts={favoriteCounts} />
      )}
    </div>
  );
}
