'use client';

import Link from "next/link";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const NavBar = () => {
  const t = useTranslations('nav');
  
  return (
    <nav className="flex flex-wrap shadow-md items-center justify-around p-4 bg-gray-100">
      <div>
        <Link href="/" className="text-xl items-center flex font-bold text-[#C09059] cursor-pointer">
          <img src="/reframebuilds.png" width={50} alt="ReframeBuilds"/> 
        </Link>
      </div>
      <div className="flex gap-6 text-[#C09059] items-center">
        <Link href="/contact" className="hover:text-[#ddac73] transition-colors duration-200">
          {t('contact')}
        </Link>
        <Link href="/about" className="hover:text-[#ddac73] transition-colors duration-200">
          {t('about')}
        </Link>
        <Link href="/service" className="hover:text-[#ddac73] transition-colors duration-200">
          {t('services')}
        </Link>
        <Link href="/projects" className="hover:text-[#ddac73] transition-colors duration-200">
          {t('projects')}
        </Link>
        <Link href="/" className="hover:text-[#ddac73] transition-colors duration-200">
          {t('home')}
        </Link>
        <LanguageSwitcher />
      </div>
      <div>
        {/* Optional: Get Quote button */}
      </div>
    </nav> 
  );
};

export default NavBar;
