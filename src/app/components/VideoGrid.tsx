'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { getVideos } from '../lib/projectes';

export default function VideoGrid() {
  const t = useTranslations();
  const locale = useLocale();
  const videos = getVideos(t);

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <Link
          key={video.id}
          href={`/${locale}/all-projects/${video.id}`}
          className="group block border-4 border-black bg-white transition-all duration-150 hover:-translate-y-1"
        >
          <div className="relative aspect-video overflow-hidden border-b-4 border-black">
            <Image
              src={video.thumbnail}
              alt={`${video.title} thumbnail`}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-bold text-black mb-2 transition-colors duration-100 group-hover:bg-black group-hover:text-white px-2 py-1 inline-block">
              {video.title}
            </h3>
            <p className="text-sm text-black/70 px-2">{video.client}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
