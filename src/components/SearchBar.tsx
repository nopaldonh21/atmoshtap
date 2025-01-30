'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebounce } from 'use-debounce';
import { Command, CommandInput } from '@/components/ui/command';

export default function SearchBar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('search')?.toString());
  const [debouncedSearch] = useDebounce(search, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (debouncedSearch) {
      params.set('search', debouncedSearch);
    } else {
      params.delete('search');
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, [debouncedSearch]);

  return (
    <Command shouldFilter={false} className="rounded-3xl">
      <CommandInput
        placeholder="Search city..."
        value={search}
        onValueChange={(value) => setSearch(value)}
      />
      {children}
    </Command>
  );
}
