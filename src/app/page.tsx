import SearchBar from '@/components/SearchBar';
import SearchSuggestions from '@/components/SearchSuggestions';

export default async function Home({
  searchParams,
}: {
  searchParams: {
    search: string;
  };
}) {
  const { search = '' } = await searchParams;

  return (
    <>
      <div className="sm:flex-row sm:px-6 relative flex flex-col items-center justify-between gap-3 px-12 py-6 mb-6 border border-white rounded-full bg-[linear-gradient(193.25deg,rgba(255,255,255,0.12)4.58%,rgba(255,255,255,0.24)95.62%)]">
        <div className="font-sofia-sans drop-shadow text-2xl font-bold text-white">
          Weather
        </div>
        <div className="sm:w-80 relative w-full">
          <SearchBar>
            <SearchSuggestions query={search} />
          </SearchBar>
        </div>
      </div>
    </>
  );
}
