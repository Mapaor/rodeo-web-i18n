'use client';
import VideoGrid from '@/app/components/VideoGrid';
import NavBar from '@/app/components/NavBar';
import { useTranslations } from 'next-intl';
import Footer from '@/app/components/Footer';

export default function ProjectsPage() {
  const t = useTranslations();
  return (
    <>
      <NavBar />
      <main className="pt-24 min-h-screen bg-linear-to-br from-stone-50 via-white to-stone-200">
        {/* Featured Projects Section */}
        <section id="projects" className="py-16">
          <div className="max-w-7xl mx-auto px-8 text-center mb-16">
            <h2 className="text-4xl md:text-3xl font-bold text-black mb-6 border-b-4 border-black pb-4 inline-block">{t('all-projects.title')}</h2>
            <p className="text-base md:text-sm text-black/70 max-w-2xl mx-auto">
              {t('all-projects.subtitle')}
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-8">
            <VideoGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
