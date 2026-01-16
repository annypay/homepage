import React, { useEffect } from 'react';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureList from './components/FeatureList';
import MarketTrend from './components/MarketTrend';
import Footer from './components/Footer';

const App: React.FC = () => {
    
  // Handle System Dark Mode
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
    }
    const listener = (event: MediaQueryListEvent) => {
        if (event.matches) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return (
    <>
      <Background />
      <main className="relative z-10 max-w-md mx-auto px-6 py-8 flex flex-col min-h-screen">
        <Header />
        
        <Hero />
        
        <section className="mb-12 space-y-6">
            <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-1 bg-primary rounded-full glow-icon"></div>
                <h3 className="font-display text-xl font-bold">
                    核心功能 <span className="text-xs font-normal text-slate-400 ml-2">Core Features</span>
                </h3>
            </div>
            
            <FeatureList />
            <MarketTrend />
        </section>

        <Footer />
      </main>
    </>
  );
};

export default App;