'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { HiBars3, HiXMark } from 'react-icons/hi2';

const links = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [date, setDate] = useState(new Date());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 30 * 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <nav className="lg:px-24 lg:py-4 flex items-center justify-between px-4 py-2">
        <Link href="/" className="md:flex-1 flex items-center">
          <Image
            src="/atmoshtap.png"
            alt="AtmoshTap logo"
            width={72}
            height={72}
            priority
          />
          <span className="font-sofia-sans sm:block hidden text-lg font-black text-white">
            AtmoshTap
          </span>
        </Link>

        <div className="bg-[#FFFFFF66] rounded-full hidden md:block">
          <ul className="flex items-center gap-3 p-3">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    className={[
                      'inline-block px-4 py-2 font-semibold rounded-full',
                      `${isActive ? 'bg-[#000080] text-white' : 'bg-white'}`,
                    ].join(' ')}
                    href={link.path}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="font-sofia-sans flex items-center justify-end flex-1 gap-1">
          <span className="mr-1 text-3xl font-semibold text-white">
            {format(date, 'H:mm')}
          </span>
          <span className="bg-white leading-normal px-3 py-2 text-xs font-semibold rounded-full text-[#000080]">
            {format(date, 'EEEE, d MMMM yyyy')}
          </span>
        </div>

        <div
          className="md:hidden ms-3"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {!mobileMenuOpen ? (
            <HiBars3 className="text-3xl text-white" />
          ) : (
            <HiXMark className="text-3xl text-white" />
          )}
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="top-20 absolute left-0 z-20 w-full h-screen">
          <div className="rounded-3xl backdrop-blur m-6 text-center border border-white">
            <ul className="flex flex-col items-center gap-3 p-3">
              {links.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li className="w-full" key={link.path}>
                    <Link
                      className={[
                        'inline-block w-full px-4 py-2 font-semibold rounded-full',
                        `${isActive ? 'bg-[#000080] text-white' : 'bg-white'}`,
                      ].join(' ')}
                      href={link.path}
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
