'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSelector from './LanguageSelector';

export default function NavBar() {
  const t = useTranslations();
  const locale = useLocale();
  const basePath = `/${locale}`;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else {
        if (window.innerWidth <= 768) {
          setIsVisible(false);
          setIsMobileMenuOpen(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center px-6 md:px-10 py-4 bg-black text-white border-b-2 border-white transition-transform duration-150 ${!isVisible ? '-translate-y-full' : ''}`}>
      <a href={basePath} className="z-[1001] flex items-center">
        <Image
          src="/branding/logo-rodeo-studio-normal.png"
          alt="Rodeo Studio"
          width={140}
          height={30}
          priority
          className="h-auto"
        />
      </a>
      
      {/* Hamburger Menu Button */}
      <button 
        className="md:hidden flex flex-col p-2 z-[1001] border-2 border-white hover:bg-white hover:invert transition-all duration-100"
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <span className={`w-[20px] h-[2px] bg-white my-[2px] transition-all duration-150 ${isMobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
        <span className={`w-[20px] h-[2px] bg-white my-[2px] transition-all duration-150 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-[20px] h-[2px] bg-white my-[2px] transition-all duration-150 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
      </button>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <ul className="flex gap-6 m-0 p-0 list-none">
          <li><a href={basePath} className="text-white hover:bg-white hover:text-black px-3 py-1 border border-transparent hover:border-white transition-all duration-100 font-bold text-sm">{t('nav.home')}</a></li>
          <li><a href={`${basePath}/projects`} className="text-white hover:bg-white hover:text-black px-3 py-1 border border-transparent hover:border-white transition-all duration-100 font-bold text-sm">{t('nav.projects')}</a></li>
          <li><a href={`${basePath}/about`} className="text-white hover:bg-white hover:text-black px-3 py-1 border border-transparent hover:border-white transition-all duration-100 font-bold text-sm">{t('nav.about')}</a></li>
          <li><a href={`${basePath}/team`} className="text-white hover:bg-white hover:text-black px-3 py-1 border border-transparent hover:border-white transition-all duration-100 font-bold text-sm">{t('nav.team')}</a></li>
          <li><a href={`${basePath}/services`} className="text-white hover:bg-white hover:text-black px-3 py-1 border border-transparent hover:border-white transition-all duration-100 font-bold text-sm">{t('nav.services')}</a></li>
          <li><a href={`${basePath}/contact`} className="text-white hover:bg-white hover:text-black px-3 py-1 border border-transparent hover:border-white transition-all duration-100 font-bold text-sm">{t('nav.contact')}</a></li>
        </ul>
        <LanguageSelector />
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`fixed top-0 w-[280px] sm:w-full h-screen bg-black border-l-2 border-white transition-all duration-200 z-[999] pt-20 ${isMobileMenuOpen ? 'right-0' : '-right-full'}`}>
        <ul className="list-none p-0 m-0">
          <li className="border-b-2 border-white"><a href={basePath} className="block px-6 py-4 text-white hover:bg-white hover:text-black transition-all duration-100 font-bold" onClick={closeMobileMenu}>{t('nav.home')}</a></li>
          <li className="border-b-2 border-white"><a href={`${basePath}/projects`} className="block px-6 py-4 text-white hover:bg-white hover:text-black transition-all duration-100 font-bold" onClick={closeMobileMenu}>{t('nav.projects')}</a></li>
          <li className="border-b-2 border-white"><a href={`${basePath}/about`} className="block px-6 py-4 text-white hover:bg-white hover:text-black transition-all duration-100 font-bold" onClick={closeMobileMenu}>{t('nav.about')}</a></li>
          <li className="border-b-2 border-white"><a href={`${basePath}/team`} className="block px-6 py-4 text-white hover:bg-white hover:text-black transition-all duration-100 font-bold" onClick={closeMobileMenu}>{t('nav.team')}</a></li>
          <li className="border-b-2 border-white"><a href={`${basePath}/services`} className="block px-6 py-4 text-white hover:bg-white hover:text-black transition-all duration-100 font-bold" onClick={closeMobileMenu}>{t('nav.services')}</a></li>
          <li className="border-b-2 border-white"><a href={`${basePath}/contact`} className="block px-6 py-4 text-white hover:bg-white hover:text-black transition-all duration-100 font-bold" onClick={closeMobileMenu}>{t('nav.contact')}</a></li>
          <li className="px-6 py-4 border-b-2 border-white">
            <LanguageSelector />
          </li>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/80 z-[998]" onClick={closeMobileMenu}></div>
      )}
    </nav>
  );
}
