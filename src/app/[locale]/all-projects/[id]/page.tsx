"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import NavBar from '@/app/components/NavBar';
import React, { use } from "react";
import projects from '@/app/lib/projectes';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const t = useTranslations();
  const locale = useLocale();
  const { id } = use(params);

  const project = projects[parseInt(id)];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-stone-50 via-white to-stone-200">
        <NavBar />
        <h1 className="text-4xl font-bold text-black mb-6">{t('project.notFound')}</h1>
        <Link href={`/${locale}`} className="text-black underline hover:bg-black hover:text-white px-4 py-2 border-2 border-black transition-all duration-100">{t('project.returnHome')}</Link>
      </div>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const projectData: any = t.raw(`project.projects.${id}`);

  return (
    <div className="min-h-screen bg-linear-to-br from-stone-50 via-white to-stone-200">
      <NavBar />
      <div className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-5xl md:text-4xl font-bold text-black mb-12 text-center border-b-4 border-black pb-4">{projectData.title}</h1>
        </div>
        <div className="w-full aspect-video max-w-6xl mx-auto px-8 mb-16">
          <iframe
            src={project.videoUrl}
            title={projectData.title}
            className="w-full h-full border-4 border-black"
            style={{ border: 0 }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="max-w-4xl mx-auto px-8 mb-0">
          <p className="text-base text-black/70 leading-normal mb-16">{projectData.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16 space-y-16  mt-0">
        <div className="bg-white text-black p-8 border-4 border-black shadow-[10px_10px_0_0_rgba(0,0,0,1)]">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-black pb-2">{t('project.projectDetails')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border-2 border-black hover:bg-gray-100">
              <strong className="font-bold">{t('project.client')}:</strong> 
              <span className="ml-2">{projectData.client}</span>
            </div>
            <div className="p-4 border-2 border-black hover:bg-gray-100">
              <strong className="font-bold">{t('project.year')}:</strong> 
              <span className="ml-2">{projectData.year}</span>
            </div>
            <div className="p-4 border-2 border-black hover:bg-gray-100">
              <strong className="font-bold">{t('project.duration')}:</strong> 
              <span className="ml-2">{projectData.duration}</span>
            </div>
            <div className="p-4 border-2 border-black hover:bg-gray-100 hover:bg-gray-100">
              <strong className="font-bold">{t('project.category')}:</strong> 
              <span className="ml-2">{projectData.category}</span>
            </div>
            <div className="p-4 border-2 border-black hover:bg-gray-100">
              <strong className="font-bold">{t('project.director')}:</strong> 
              <span className="ml-2">{projectData.director}</span>
            </div>
            <div className="p-4 border-2 border-black hover:bg-gray-100">
              <strong className="font-bold">{t('project.cinematographer')}:</strong> 
              <span className="ml-2">{projectData.cinematographer}</span>
            </div>
          </div>
        </div>

        <div className="bg-white text-black p-8 border-4 border-black shadow-[10px_10px_0_0_rgba(0,0,0,1)]">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-black pb-2">{t('project.aboutProject')}</h2>
          <div className="prose prose-lg max-w-none">
            {projectData.fullDescription.split('\n\n').map((paragraph: string, index: number) => (
              <p key={index} className="mb-6 leading-normal">{paragraph.trim()}</p>
            ))}
          </div>
        </div>

        <div className="bg-white text-black p-8 border-4 border-black shadow-[10px_10px_0_0_rgba(0,0,0,1)]">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-black pb-2">{t('project.gallery')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image: string, index: number) => (
              <div key={index} className="relative aspect-video border-4 border-black overflow-hidden transition-all duration-100 hover:border-3">
                <Image
                  src={image}
                  alt={`${projectData.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center py-8">
          <Link 
            href={`/${locale}/projects`} 
            className="inline-block bg-black text-white px-8 py-3 border-4 border-black font-bold hover:bg-white hover:text-black transition-all duration-100"
          >
            {t('project.backToProjects')}
          </Link>
        </div>
      </div>
    </div>
  );
}
