import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import FAQ from './sections/FAQ';
import Pricing from './sections/Pricing';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Pricing />
        <Skills />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
