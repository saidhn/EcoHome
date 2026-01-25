'use client';

import Link from "next/link";
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('hero');
  
  return (
    <section className="relative w-full h-[80vh]">
      <video
        src="/HERO.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      ></video>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          {t('title')}
        </h1>
        <p className="max-w-xl text-lg md:text-xl">
          {t('subtitle')}
        </p>
        <Link href='/projects'
          className="mt-4 bg-[#C09059] transition-colors duration-200 hover:bg-[#ddac73] px-6 py-3 rounded-lg text-white font-semibold"
        >
          {t('cta')}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
