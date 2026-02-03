import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Header background on scroll
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navItems.map(item => 
        document.getElementById(item.href.substring(1))
      );

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href.substring(1));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: any) => {
    const element = document.getElementById(href.substring(1));
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className={`transition-all duration-500 ${scrolled ? 'pt-4 px-4 md:px-[200px]' : 'pt-0'} `}>
          <nav className={`max-w-7xl mx-auto transition-all duration-300 ${
            scrolled 
              ? 'bg-dark-primary/80 backdrop-blur-lg rounded-2xl px-4 sm:px-6 lg:px-8' 
              : 'px-4 sm:px-6 lg:px-8'
          }`}
          style={{
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: scrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            transition: 'border-color 0.3s ease'
          }}>
            <div className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
            }`}>
              {/* Logo */}
              <div className="flex-shrink-0">
                <button
                  onClick={() => scrollToSection('#home')}
                  className="text-xl md:text-2xl font-bold font-montserrat text-primary hover:text-primary/80 transition-colors"
                >
                  DG
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className={`flex items-center transition-all duration-300 ${
                  scrolled ? 'gap-0.5' : 'gap-1'
                }`}>
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href.substring(1);
                    return (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className={`relative transition-all duration-200 ${
                          scrolled ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'
                        } font-medium ${
                          isActive
                            ? 'text-primary'
                            : 'text-light-primary/70 hover:text-light-primary'
                        }`}
                      >
                        {item.name}
                        {isActive && (
                          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-lg text-light-primary/70 hover:text-light-primary hover:bg-white/5 transition-all"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className={`space-y-2 transition-all duration-300 ${
            scrolled 
              ? 'mx-4 mb-4 px-4 pt-2 pb-4 bg-dark-primary/95 backdrop-blur-lg rounded-2xl' 
              : 'px-4 pt-2 pb-6 bg-dark-primary/95 backdrop-blur-lg'
          }`}
          style={{
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: scrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            transition: 'border-color 0.3s ease'
          }}>
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                    isActive
                      ? 'bg-primary/10 text-primary border border-primary/30'
                      : 'text-light-primary/70 hover:text-light-primary hover:bg-white/5'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isOpen ? 'slideIn 0.3s ease-out forwards' : 'none',
                  }}
                >
                  <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                    isActive ? 'bg-primary' : 'bg-light-primary/30'
                  }`} />
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
}