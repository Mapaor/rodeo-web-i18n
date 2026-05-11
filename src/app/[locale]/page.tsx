import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import Hero from '@/app/components/Hero';

export default function LocalePage() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        {/* Hero Section */}
        <Hero />
      </main>
      <Footer />
    </>
  );
}
