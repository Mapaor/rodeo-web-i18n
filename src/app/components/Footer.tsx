'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  return (
    <footer className="text-white py-8"> 
        {/* <div className="flex flex-row items-center gap-4 text-center">
          <a href="#" className="text-sm text-gray-300 hover:bg-white hover:text-black px-2 py-1 transition-all duration-100 border border-transparent hover:border-white">Instagram</a>
          <a href="#" className="text-sm text-gray-300 hover:bg-white hover:text-black px-2 py-1 transition-all duration-100 border border-transparent hover:border-white">Vimeo</a>
          <a href="#" className="text-sm text-gray-300 hover:bg-white hover:text-black px-2 py-1 transition-all duration-100 border border-transparent hover:border-white">LinkedIn</a>
          <a href="#" className="text-sm text-gray-300 hover:bg-white hover:text-black px-2 py-1 transition-all duration-100 border border-transparent hover:border-white">Mail</a>
        </div> */}
        <div className="text-center">
        <p className="text-sm text-gray-400">&copy; {t('footer.copyright')} <a href="./contact">{t('footer.contact')}</a></p>
      </div>
    </footer>
  );
}
