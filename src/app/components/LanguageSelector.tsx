'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const locales = [
  { code: 'ca', label: 'CA' },
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' }
];

export default function LanguageSelector() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (newLocale: string) => {
    const currentPath = pathname.replace(`/${currentLocale}`, '');
    const newPath = `/${newLocale}${currentPath}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1">
      {locales.map((locale, index) => (
        <span key={locale.code} className="flex items-center">
          <button
            onClick={() => changeLocale(locale.code)}
            className={`px-3 py-1 text-xs font-bold transition-all duration-100 border-2 ${
              currentLocale === locale.code 
                ? 'text-black bg-white border-white' 
                : 'text-white bg-transparent border-white hover:bg-white hover:text-black'
            }`}
          >
            {locale.label}
          </button>
          {index < locales.length - 1 && (
            <span className="text-white mx-1 font-bold">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
