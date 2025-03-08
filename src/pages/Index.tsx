
import NavigationHeader from '@/components/NavigationHeader';
import Hero from '@/components/Hero';
import RegionSection from '@/components/RegionSection';
import SearchBar from '@/components/SearchBar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main>
        <Hero />
        <div className="container mx-auto mb-8 flex justify-center">
          <Link to="/login">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Login to Transfer Money
            </Button>
          </Link>
        </div>
        <RegionSection />
        <SearchBar />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
