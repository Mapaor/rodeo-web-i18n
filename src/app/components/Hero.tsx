'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-br from-stone-50 via-white to-stone-200 px-6 pb-16 pt-28 text-center text-black lg:px-10"
    >
      <div className="absolute -left-24 -top-24 h-48 w-48 rounded-full bg-black/5 blur-3xl" />
      <div className="absolute -bottom-20 -right-16 h-40 w-40 rounded-full bg-black/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:text-left">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <span className="mb-4 inline-flex border-2 border-black px-3 py-1 text-xs font-bold uppercase tracking-[0.35em]">
            Hola!
          </span>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {t('home.title')}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/75 sm:text-xl">
            {t('home.subtitle')}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a href="./contact">
            <button
              type="button"
              className="border-4 border-black bg-black px-8 py-4 text-base font-bold text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-white hover:text-black"
            >
              {t('home.cta')}
            </button>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
          <div className="relative aspect-4/5 overflow-hidden border-4 border-black bg-white shadow-[14px_14px_0_0_rgba(0,0,0,1)]">
            <Image
              src="/bts/bts-1.jpg"
              alt="Behind the scenes at Rodeo Studio"
              fill
              priority
              sizes="(min-width: 1024px)"
              className="object-cover"
            />
            {/* <div className="absolute bottom-4 left-4 border-2 border-white bg-black px-3 py-2 text-left text-xs font-bold uppercase tracking-[0.25em] text-white">
              Behind the scenes
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
