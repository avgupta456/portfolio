import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import { useTheme } from 'next-themes';

import { FaRegMoon, FaRegSun } from 'react-icons/fa';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>Abhijit Gupta</title>
        <meta
          name="description"
          content="Portfolio Website for Abhijit Gupta"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full shadow-md dark:bg-zinc-900 sticky top-0 z-50">
        <div className="container p-4 mx-auto flex flex-wrap">
          <div className="text-xl">Abhijit Gupta</div>
          <div className="flex ml-auto mr-4 items-center justify-center cursor-pointer">
            {theme === 'dark' ? (
              <FaRegSun
                className="w-6 h-6"
                style={{ color: '#FFE484' }}
                onClick={() => setTheme('light')}
              />
            ) : (
              <FaRegMoon
                className="w-6 h-6"
                style={{ color: '#122F50' }}
                onClick={() => setTheme('dark')}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
