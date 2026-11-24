import React, { useState } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-[#1E1E1E] border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Scissors className="h-7 w-7 text-[#D4AF37]" />
            <span className="text-xl font-bold tracking-wider text-[#FFFFFF]">NAVALHA FINA</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-[#FFFFFF] hover:text-[#D4AF37] transition-colors">Serviços</a>
            <a href="#gallery" className="text-[#FFFFFF] hover:text-[#D4AF37] transition-colors">Galeria</a>
            <a href="#testimonials" className="text-[#FFFFFF] hover:text-[#D4AF37] transition-colors">Depoimentos</a>
            <a href="#contact" className="text-[#FFFFFF] hover:text-[#D4AF37] transition-colors">Localização</a>
            <button
              onClick={onBookClick}
              className="bg-[#D4AF37] text-[#121212] font-semibold px-4 py-2 rounded hover:bg-[#c19b2e] transition-colors min-h-[44px] flex items-center justify-center"
            >
              Agendar Horário
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#FFFFFF] hover:text-[#D4AF37] p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#1E1E1E] border-b border-[#D4AF37]/20 px-4 pt-2 pb-4 space-y-2">
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded text-base font-medium text-[#FFFFFF] hover:bg-[#121212] hover:text-[#D4AF37] min-h-[44px] flex items-center"
          >
            Serviços
          </a>
          <a
            href="#gallery"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded text-base font-medium text-[#FFFFFF] hover:bg-[#121212] hover:text-[#D4AF37] min-h-[44px] flex items-center"
          >
            Galeria
          </a>
          <a
            href="#testimonials"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded text-base font-medium text-[#FFFFFF] hover:bg-[#121212] hover:text-[#D4AF37] min-h-[44px] flex items-center"
          >
            Depoimentos
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded text-base font-medium text-[#FFFFFF] hover:bg-[#121212] hover:text-[#D4AF37] min-h-[44px] flex items-center"
          >
            Localização
          </a>
          <button
            onClick={() => {
              setIsOpen(false);
              onBookClick();
            }}
            className="w-full text-center bg-[#D4AF37] text-[#121212] font-semibold px-4 py-2 rounded hover:bg-[#c19b2e] transition-colors min-h-[44px] flex items-center justify-center"
          >
            Agendar Horário
          </button>
        </div>
      )}
    </nav>
  );
};