import { findCities } from '@/lib/openweathermap';
import { CommandEmpty, CommandList } from '@/components/ui/command';
import { SearchSuggestion } from './SearchSuggestion';

export default async function SearchSuggestions({ query }: { query: string }) {
  let data = null;
  let error = '';

  if (query.length >= 3) {
    data = await findCities(query).catch((err) => {
      error = err;
      return null;
    });
  }

  const cities = data?.list || [];

  return (
    <div className="rounded-3xl top-11 absolute left-0 w-full p-0 overflow-hidden bg-white">
      <CommandList>
        {error && (
          <CommandEmpty>
            <span className="text-red-500">{error}</span>
          </CommandEmpty>
        )}
        {query.length != 0 && query.length < 3 && (
          <CommandEmpty>Type at least 3 letters.</CommandEmpty>
        )}
        {data?.count == 0 && <CommandEmpty>No results found.</CommandEmpty>}
        {cities.map((city) => (
          <SearchSuggestion city={city} key={city.id} />
        ))}
      </CommandList>
    </div>
  );
}
