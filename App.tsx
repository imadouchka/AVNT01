import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import SkillViz from './components/SkillViz';
import CreativeStudio from './components/CreativeStudio';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'skills', 'studio'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="portfolio" className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-syncopate font-bold mb-16 tracking-tighter uppercase border-b border-white/10 pb-8">
              Work<span className="text-orange-500">.</span>
            </h2>
            <Portfolio />
          </div>
        </section>

        <section id="skills" className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-syncopate font-bold mb-8 uppercase tracking-tighter">
                Visual <br />Logic
              </h2>
              <p className="text-xl text-zinc-400 max-w-lg mb-8 leading-relaxed">
                Beyond aesthetics lies the architecture of motion. We utilize data-driven insights to create visuals that don't just move—they communicate.
              </p>
              <div className="space-y-4">
                {['Procedural Generation', 'Real-time Analytics', 'Cinematic Narrative', 'Kinetic Systems'].map((item) => (
                  <div key={item} className="flex items-center space-x-4 group">
                    <div className="w-2 h-2 bg-orange-500 rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-lg font-medium border-b border-zinc-800 pb-2 flex-1 group-hover:border-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[500px] relative">
              <SkillViz />
            </div>
          </div>
        </section>

        <section id="studio" className="py-24 px-6 md:px-12 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
             <div className="mb-16">
              <h2 className="text-5xl font-syncopate font-bold uppercase tracking-tighter mb-4">
                Concept Lab<span className="text-orange-500">_</span>
              </h2>
              <p className="text-zinc-500 text-lg">Test our vision. Let AI generate an avant-garde creative brief for your next idea.</p>
            </div>
            <CreativeStudio />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;