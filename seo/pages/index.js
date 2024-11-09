// pages/index.js
"use client"; // Ensures this is treated as a client component

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

function Home() {
  const pathname = usePathname();
  const isDarkMode = pathname === '/dark-mode';

  return (
    <div className={clsx('container', { 'dark-mode': isDarkMode })}>
      <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'} Page</h1>

      <Link href="/dark-mode">
        <button>Dark Mode</button>
      </Link>

      <Link href="/light-mode">
        <button>Light Mode</button>
      </Link>
    </div>
  );
}

export default Home;
