"use client";

import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ServicesPage() {
  const t = useTranslations();

  return (
    <>
      <NavBar />
      <main className="pt-16">
        {/* Services Section */}
        <section id="services" className="py-24 bg-linear-to-br from-stone-50 via-white to-stone-200 text-black">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-4xl md:text-3xl font-bold text-black text-center mb-16 border-b-4 border-black pb-4 inline-block w-full">{t('services.title')}</h2>
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              <div className="bg-white text-black p-6 border-4 border-black transition-all duration-100 hover:bg-black hover:text-white hover:border-white w-full">
                <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden border-3 border-black">
                  <Image
                    src="/bts/serveis/videoclips-1.jpg"
                    alt="Videoclips"
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">{t('services.music.title')}</h3>
                <p className="leading-normal text-sm">
                  {t('services.music.desc')}
                </p>
              </div>
              <div className="bg-white text-black p-6 border-4 border-black transition-all duration-100 hover:bg-black hover:text-white hover:border-white w-full">
                <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden border-3 border-black">
                  <Image
                    src="/bts/serveis/commercials.jpg"
                    alt="Promocionals"
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">{t('services.commercial.title')}</h3>
                <p className="leading-normal text-sm">
                  {t('services.commercial.desc')}
                </p>
              </div>
              <div className="bg-white text-black p-6 border-4 border-black transition-all duration-100 hover:bg-black hover:text-white hover:border-white w-full">
                <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden border-3 border-black">
                  <Image
                    src="/bts/serveis/documentals.jpg"
                    alt="Documentals"
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">{t('services.documentary.title')}</h3>
                <p className="leading-normal text-sm">
                  {t('services.documentary.desc')}
                </p>
              </div>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl justify-items-center">
                  <div className="bg-white text-black p-6 border-4 border-black transition-all duration-100 hover:bg-black hover:text-white hover:border-white w-full">
                    <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden border-3 border-black">
                      <Image
                        src="/bts/serveis/xxss.jpg"
                        alt="XXSS"
                        fill
                        sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{t('services.social.title')}</h3>
                    <p className="leading-normal text-sm">
                      {t('services.social.desc')}
                    </p>
                  </div>
                  <div className="bg-white text-black p-6 border-4 border-black transition-all duration-100 hover:bg-black hover:text-white hover:border-white w-full">
                    <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden border-3 border-black">
                      <Image
                        src="/bts/serveis/directes.jpeg"
                        alt="Directes"
                        fill
                        sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{t('services.live.title')}</h3>
                    <p className="leading-normal text-sm">
                      {t('services.live.desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
