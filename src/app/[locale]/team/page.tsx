"use client";

import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function TeamPage() {
  const t = useTranslations();

  const teamMembers = [
    
    {
      name: "Andrés",
      role: t('team.andres.role'),
      description: t('team.andres.description'),
      image: "/team/andres.png"
    },
    {
      name: "Raquel",
      role: t('team.raquel.role'),
      description: t('team.raquel.description'),
      image: "/team/raquel.png"
    },
    {
      name: "Martí",
      role: t('team.marti.role'),
      description: t('team.marti.description'),
      image: "/team/marti.png"
    },
    {
      name: "Ot",
      role: t('team.ot.role'),
      description: t('team.ot.description'),
      image: "/team/ot.png"
    },
    {
      name: "Laia",
      role: t('team.laia.role'),
      description: t('team.laia.description'),
      image: "/team/laia.png"
    }
  ];

  return (
    <>
      <NavBar />
      <main className="pt-16">
        {/* Team Section */}
        <section className="py-24 bg-linear-to-br from-stone-50 via-white to-stone-200 text-black">
          <div className="max-w-5xl mx-auto px-8">
            <div className="text-center mb-32">
              <h2 className="text-5xl md:text-4xl font-bold text-black mb-6 border-b-4 border-black pb-4 inline-block">{t('team.title')}</h2>
              <p className="text-lg md:text-base text-black/70 max-w-2xl mx-auto mt-8">
                {t('team.subtitle')}
              </p>
            </div>
            
            <div className="space-y-24">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-1 overflow-hidden border-4 border-black bg-white shadow-[14px_14px_0_0_rgba(0,0,0,1)] lg:min-h-80 lg:grid-cols-[320px_minmax(0,1fr)] ${
                    index % 2 === 0 ? '' : 'lg:grid-cols-[minmax(0,1fr)_320px]'
                  }`}
                >
                  {/* Image Section */}
                  <div 
                    className={`relative aspect-3/4 lg:aspect-auto lg:h-full border-b-4 lg:border-b-0 ${
                      index % 2 === 0 ? 'lg:border-r-4' : 'lg:border-l-4 lg:order-2'
                    } border-black overflow-hidden bg-white`}
                  >
                    <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 320px"
                      className="object-cover object-top"
                    />
                    {/* Overlay number brutalista */}
                    <div className="absolute top-4 left-4 bg-black text-white border-4 border-black px-4 py-3">
                      <span className="text-lg font-bold tracking-[0.25em]">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div 
                    className={`bg-white text-black p-8 lg:p-14 flex flex-col justify-center ${
                      index % 2 === 0 ? '' : 'lg:order-1'
                    }`}
                  >
                    <div className="space-y-5">
                      <div>
                        <h3 className="text-4xl md:text-3xl font-bold mb-2 border-b-4 border-black pb-2 inline-block text-black">
                          {member.name}
                        </h3>
                      </div>
                      
                      <div className="border-l-4 border-black pl-5">
                        <p className="text-lg font-bold tracking-wider mb-3 text-black uppercase">
                          {member.role}
                        </p>
                      </div>
                      
                      <div className="mt-4 max-w-xl">
                        <p className="text-base leading-relaxed text-black/75">
                          {member.description}
                        </p>
                      </div>
                      
                      {/* Decorative element */}
                      <div className="flex gap-2 mt-6 pt-6 border-t-2 border-black">
                        <div className="w-4 h-4 bg-black"></div>
                        <div className="w-4 h-4 border-2 border-black"></div>
                        <div className="w-4 h-4 bg-black"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
