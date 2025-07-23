import ImageKit from "imagekit";
import { unstable_noStore } from "next/cache";
import { ResultsList } from "./results-list";
import { UploadMemeButton } from "./upload-meme-button";

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  unstable_noStore();

  const files = await imagekit.listFiles({
    tags: searchParams.q
  });

  return (
    <>
      <div className="container mx-auto space-y-8 py-8 px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Search Results</h1>
          <UploadMemeButton />
        </div>
        <div className="p-4">
          {files.length > 0 ? (
            <ResultsList files={files} />
          ) : (
            <p className="text-center text-gray-500 mt-10">
              No results found for "{searchParams.q}"
            </p>
          )}
        </div>
      </div>
    </>
  );
}
