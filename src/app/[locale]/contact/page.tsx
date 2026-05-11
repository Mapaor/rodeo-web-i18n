"use client";

import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations();
  const [form, setForm] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (result.success) {
        setStatus('success');
        setForm({ name: '', email: '', project: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <main className="pt-16">
        {/* Contact Us Section */}
        <section id="contact" className="py-24 bg-linear-to-br from-stone-50 via-white to-stone-200">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-4xl md:text-3xl font-bold text-black text-center mb-6 border-b-4 border-black pb-4 inline-block w-full">{t('contact.title')}</h2>
            <p className="text-base md:text-base text-black/70 text-center mb-16 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white text-black p-8 border-4 border-black shadow-[10px_10px_0_0_rgba(0,0,0,1)]">
                <div>
                  <h3 className="text-xl font-bold mb-8 border-b-2 border-black pb-2">{t('contact.info')}</h3>
                  <p className="mb-5 flex items-center text-sm">
                    <span className="w-5 h-5 mr-4 border-2 border-black inline-block"></span>
                    info@rodeostudio.net
                  </p>
                  <p className="mb-5 flex items-center text-sm">
                    <span className="w-5 h-5 mr-4 border-2 border-black inline-block"></span>
                    +34 123 456 789
                  </p>
                  <p className="flex items-center text-sm">
                    <span className="w-5 h-5 mr-4 border-2 border-black inline-block"></span>
                    Barcelona, Spain
                  </p>
                </div>
                <div className='mt-8'>
                  <h3 className="text-xl font-bold mb-8 border-b-2 border-black pb-2">{t('contact.social')}</h3>
                  <p className="mb-5 flex items-center text-sm">
                    <span className="w-5 h-5 mr-4 border-2 border-black inline-block"></span>
                    <a href="https://www.instagram.com/rodeosstudio/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-700">
                      Instagram
                    </a>
                  </p>
                  <p className="mb-5 flex items-center text-sm">
                    <span className="w-5 h-5 mr-4 border-2 border-black inline-block"></span>
                    <a href="https://www.youtube.com/rodeostudio" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-700">
                      YouTube
                    </a>
                  </p>
                  <p className="flex items-center text-sm">
                    <span className="w-5 h-5 mr-4 border-2 border-black inline-block"></span>
                    <a href="https://www.tiktok.com/@rodeostudio" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-700">
                      TikTok
                    </a>
                  </p>
                </div>
              </div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder={t('contact.name')}
                  className="w-full px-4 py-3 border-2 border-black bg-white text-black focus:outline-none focus:border-gray-700 transition-all placeholder:text-black/45"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.email')}
                  className="w-full px-4 py-3 border-2 border-black bg-white text-black focus:outline-none focus:border-gray-700 transition-all placeholder:text-black/45"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="project"
                  placeholder={t('contact.project')}
                  className="w-full px-4 py-3 border-2 border-black bg-white text-black focus:outline-none focus:border-gray-700 transition-all placeholder:text-black/45"
                  value={form.project}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder={t('contact.message')}
                  className="w-full px-4 py-3 border-2 border-black bg-white text-black h-56 focus:outline-none focus:border-gray-700 resize-none transition-all placeholder:text-black/45"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full bg-black text-white py-3 px-6 border-4 border-black font-bold hover:bg-white hover:text-black transition-all duration-100 disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? t('contact.sending') || 'Enviant...' : t('contact.send')}
                </button>
                {status === 'success' && (
                  <p className="text-black text-center border-2 border-black p-2 bg-white">{t('contact.success') || 'Missatge enviat!'}</p>
                )}
                {status === 'error' && (
                  <p className="text-black text-center border-2 border-black p-2 bg-white">{t('contact.error') || 'Error enviant missatge'}</p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
