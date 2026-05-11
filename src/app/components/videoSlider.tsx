'use client';

import { useRef, useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { getVideos } from '../lib/projectes';
import { useSliderMovement } from '../lib/utils/movimentSlider';
import Link from 'next/link';
import Image from 'next/image';

export default function VideoSlider() {
  const t = useTranslations();
  const locale = useLocale();
  const videos = getVideos(t);
  const containerRef = useRef<HTMLDivElement>(null!);
  const [visibleVideos, setVisibleVideos] = useState(new Set<string>());
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  const { isInitialized } = useSliderMovement(containerRef);

  useEffect(() => {
    const preconnectLink = document.createElement('link');
    preconnectLink.rel = 'preconnect';
    preconnectLink.href = 'https://bucket-general-public-marti.s3.eu-west-1.amazonaws.com';
    document.head.appendChild(preconnectLink);

    const dnsPrefetchLink = document.createElement('link');
    dnsPrefetchLink.rel = 'dns-prefetch';
    dnsPrefetchLink.href = 'https://images.unsplash.com';
    document.head.appendChild(dnsPrefetchLink);

    return () => {
      if (document.head.contains(preconnectLink)) document.head.removeChild(preconnectLink);
      if (document.head.contains(dnsPrefetchLink)) document.head.removeChild(dnsPrefetchLink);
    };
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const updates = new Map();
        
        entries.forEach((entry) => {
          const videoKey = entry.target.getAttribute('data-video-key');
          if (videoKey) {
            updates.set(videoKey, entry.isIntersecting);
          }
        });

        if (updates.size > 0) {
          setVisibleVideos(prev => {
            const newSet = new Set(prev);
            updates.forEach((isIntersecting, videoKey) => {
              if (isIntersecting) {
                newSet.add(videoKey);
              } else {
                newSet.delete(videoKey);
              }
            });
            return newSet;
          });
        }
      },
      {
        rootMargin: '100% 0px 100% 0px',
        threshold: [0, 0.25]
      }
    );

    const timeoutId = setTimeout(() => {
      if (containerRef.current && observerRef.current) {
        const cards = containerRef.current.querySelectorAll('[data-video-key]');
        cards.forEach(card => observerRef.current!.observe(card));
      }
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isInitialized]);

  return (
    <div className="overflow-hidden h-[450px] w-screen relative left-1/2 -translate-x-1/2 bg-transparent p-0 m-0">
      <div 
        ref={containerRef} 
        className="flex h-full w-fit gap-8 will-change-transform pl-8 select-none cursor-default"
        style={{ 
          userSelect: 'none',
          opacity: isInitialized ? 1 : 0,
          transition: isInitialized ? 'none' : 'opacity 0.3s ease-in',
          backfaceVisibility: 'hidden',
          perspective: '1000px',
          contain: 'layout style paint'
        }}
      >
        {Array.from({ length: 3 }, (_, setIndex) => 
          videos.map((video, videoIndex) => {
            const uniqueKey = `${video.id}-set${setIndex}-${videoIndex}`;
            const isVisible = visibleVideos.has(uniqueKey);
            const shouldChangeOnHover = video.preferenceDefault !== video.preferenceHover;
            const shouldLoadVideo = isVisible || setIndex === 1;
            
            return (
              <Link
                key={uniqueKey}
                href={`/${locale}/all-projects/${video.id}`}
                className="flex h-full w-fit flex-col justify-end gap-4 no-underline text-inherit transition-all duration-100 hover:translate-x-1 group"
                draggable="false"
                data-video-key={uniqueKey}
              >
                <div
                  className="relative"
                  style={{
                    width: `min(100vw, calc(304px * ${video.aspectRatio}))`,
                    aspectRatio: `${video.aspectRatio}`
                  }}
                >
                  <div className="relative overflow-hidden bg-white w-full h-full border-4 border-black transition-colors duration-100">
                    {/* Thumbnail */}
                    <Image
                      src={video.thumbnail}
                      alt={`${video.title} thumbnail`}
                      className={`absolute top-0 left-0 w-full h-full object-cover ${
                        video.preferenceDefault === 'thumbnail' ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                      loading="lazy"
                      fill
                    />
                    {/* Video default */}
                    {video.preferenceDefault === 'videoSrc' && video.videoSrc && shouldLoadVideo && (
                      <video
                        className="absolute top-0 left-0 w-full h-full object-cover z-10"
                        src={video.videoSrc}
                        preload="metadata"
                        loop
                        muted
                        playsInline
                        draggable="false"
                        autoPlay
                        onLoadedMetadata={(e) => {
                          if (video.startTime && video.startTime > 0) {
                            e.currentTarget.currentTime = video.startTime;
                          }
                        }}
                      />
                    )}
                    
                    {/* Video hover */}
                    {video.preferenceHover === 'videoSrc' && shouldChangeOnHover && video.videoSrc && shouldLoadVideo && (
                      <video
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 z-20 transition-opacity duration-200"
                        src={video.videoSrc}
                        preload="metadata"
                        loop
                        muted
                        playsInline
                        draggable="false"
                        onLoadedMetadata={(e) => {
                          if (video.startTime && video.startTime > 0) {
                            e.currentTarget.currentTime = video.startTime;
                          }
                        }}
                        onMouseEnter={(e) => {
                          if (e.currentTarget.readyState >= 3) {
                            e.currentTarget.play().catch(() => {});
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          if (video.startTime && video.startTime > 0) {
                            e.currentTarget.currentTime = video.startTime;
                          } else {
                            e.currentTarget.currentTime = 0;
                          }
                        }}
                      />
                    )}
                    
                    {/* Thumbnail hover */}
                    {video.preferenceHover === 'thumbnail' && shouldChangeOnHover && (
                      <Image
                        src={video.thumbnail}
                        alt={`${video.title} hover thumbnail`}
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 z-20 transition-opacity duration-200"
                        loading="lazy"
                        fill
                      />
                    )}
                  </div>
                </div>
                <div className="text-left border-l-4 border-black pl-3">
                  <h3 className="text-xl font-bold text-black mb-1 group-hover:bg-black group-hover:text-white px-2 py-1 transition-colors duration-100">{video.title}</h3>
                  <h3 className="text-sm text-gray-700 px-2">{video.client}</h3>
                </div>
              </Link>
            );
          })
        ).flat()}
      </div>
    </div>
  );
}
