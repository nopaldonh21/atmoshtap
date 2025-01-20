import type { Metadata } from 'next';
import { Sofia_Sans, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

const sofiaSans = Sofia_Sans({
  variable: '--font-sofia-sans',
  subsets: ['latin'],
});

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | AtmoshTap',
    default: 'One Tap for Weather | AtmoshTap',
  },
  description: 'Clear or cloudy sky? With AtmoshTap, everything is clear.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[
          `${sofiaSans.variable} ${sourceSans.variable} font-source-sans antialiased`,
          'bg-[radial-gradient(50%_50%_at_50.64%_50%,#ACE4FE_0%,#1EA8FA_100%)] min-h-screen',
        ].join(' ')}
      >
        <Navbar />
        <main className="lg:px-24 lg:py-14 p-6">{children}</main>
      </body>
    </html>
  );
}
