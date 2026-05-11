"use client";

import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function AboutPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      <NavBar />
      <main className="pt-16">
        {/* About Us Section */}
        <section id="about" className="py-24 bg-linear-to-br from-stone-50 via-white to-stone-200 text-black">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-3xl font-bold text-black mb-8 border-b-4 border-black pb-4">{t('about.title')}</h2>
              <p className="text-base text-black/75 mb-6 leading-normal">
                {t('about.text1')}
              </p>
              <p className="text-base text-black/75 mb-8 leading-normal">
                {t('about.text2')}
              </p>
              <Link href={`/${locale}/team`}>
                <button className="border-4 border-black bg-black px-8 py-4 text-base font-bold text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-white hover:text-black">
                  {t('about.meetTeam')}
                </button>
              </Link>
            </div>
            <div className="mx-auto w-full max-w-lg">
              <div className="relative aspect-4/5 overflow-hidden border-4 border-black bg-white shadow-[14px_14px_0_0_rgba(0,0,0,1)]">
                <Image 
                  src="/bts/bts-7.jpg" 
                  alt={t('about.alt')} 
                  fill
                  sizes='(max-width: 400px) 100vw, 100vw'
                  className="object-cover"
                />
                {/* <div className="absolute bottom-4 left-4 border-2 border-white bg-black px-3 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white">
                   BTS MARKUU
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
