'use client';

import { City } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CommandItem } from './ui/command';

export function SearchSuggestion({ city }: { city: City }) {
  const router = useRouter();

  function handleSelect() {
    router.push(`/weather/${city.id}`);
  }

  const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

  return (
    <CommandItem key={city.id} className="rounded-3xl" onSelect={handleSelect}>
      <Link href={`/weather/${city.id}`} className="font-sofia-sans flex gap-3">
        <div>
          <Image
            className="rounded-3xl bg-[#009ef977]"
            src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
            alt={city.weather[0].description}
            width={50}
            height={50}
          />
        </div>
        <div>
          <div className="font-semibold">
            {city.name}, {regionNames.of(city.sys.country)}
          </div>
          <div className="capitalize">{city.weather[0].description}</div>
          <div>
            <span className="rounded-xl px-1.5 py-0.5 text-xs text-white bg-gray-500">
              {city.main.temp}°C
            </span>
          </div>
        </div>
      </Link>
    </CommandItem>
  );
}
