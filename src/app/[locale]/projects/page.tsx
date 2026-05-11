"use client";

import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import VideoSlider from '@/app/components/videoSlider';
import { useTranslations } from 'next-intl';

export default function ProjectsPage() {
  const t = useTranslations();

  return (
    <>
      <NavBar />
      <main className="pt-16">
        {/* Featured Projects Section */}
          <section id="projects" className="py-24 bg-linear-to-br from-stone-50 via-white to-stone-200 text-black">
          <div className="max-w-7xl mx-auto px-8 text-center mb-2">
              <h2 className="text-6xl md:text-4xl font-bold text-black mb-6 border-b-4 border-black pb-4 inline-block">{t('projects.title')}</h2>
              <p className="text-base md:text-base text-black/70 max-w-3xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>
          <VideoSlider />
        </section>
      </main>
      <Footer />
    </>
  );
}
