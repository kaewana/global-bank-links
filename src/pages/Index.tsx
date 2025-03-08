
import NavigationHeader from '@/components/NavigationHeader';
import Hero from '@/components/Hero';
import RegionSection from '@/components/RegionSection';
import SearchBar from '@/components/SearchBar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main>
        <Hero />
        <RegionSection />
        <SearchBar />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
