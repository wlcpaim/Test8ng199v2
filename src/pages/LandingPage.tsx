import React, { useRef } from 'react';
import { Navbar } from '../components/Navbar';
import { BookingForm } from '../components/BookingForm';
import { SERVICES } from '../hooks/useBooking';
import { Scissors, MapPin, Phone, Clock, Star } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const bookingRef = useRef<HTMLDivElement>(null);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#FFFFFF]">
      <Navbar onBookClick={scrollToBooking} />

      {/* Hero Section */}
      <header className="relative bg-[#1E1E1E] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#FFFFFF] mb-4">
            Estilo e Tradição na <span className="text-[#D4AF37]">Navalha Fina</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            O melhor atendimento, cortes modernos e barbas impecáveis em um ambiente clássico exclusivo para você.
          </p>
          <button
            onClick={scrollToBooking}
            className="bg-[#D4AF37] text-[#121212] font-bold px-8 py-3 rounded-lg text-lg hover:bg-[#c19b2e] transition-colors min-h-[44px] inline-flex items-center justify-center"
          >
            Agendar Agora
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#D4AF37]">Nossos Serviços</h2>
          <p className="text-gray-400 mt-2">Profissionais qualificados e produtos de primeira linha</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-[#1E1E1E] p-6 rounded-lg border border-[#D4AF37]/20 flex flex-col justify-between">
              <div>
                <Scissors className="h-8 w-8 text-[#D4AF37] mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-bold text-[#D4AF37]">R$ {service.price},00</span>
                <button
                  onClick={scrollToBooking}
                  className="bg-[#D4AF37]/20 text-[#D4AF37] font-semibold px-3 py-2 rounded hover:bg-[#D4AF37] hover:text-[#121212] transition-colors min-h-[44px] flex items-center"
                >
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-[#1E1E1E] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#D4AF37]">Galeria</h2>
            <p className="text-gray-400 mt-2">Conheça nosso espaço e alguns dos nossos trabalhos</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="h-64 bg-[#121212] rounded-lg border border-[#D4AF37]/20 flex items-center justify-center text-gray-500">
                <span className="text-lg font-medium">Foto do Trabalho #{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#D4AF37]">O que dizem nossos Clientes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[ 
            { name: "Carlos Eduardo", text: "Melhor barbearia da região! Atendimento top e cerveja gelada." },
            { name: "Marcos Vinícius", text: "Corte impecável e barba feita com maestria. Recomendo demais!" },
            { name: "Rafael Souza", text: "Ambiente agradável, pontualidade e profissionais de alto nível." }
          ].map((t, idx) => (
            <div key={idx} className="bg-[#1E1E1E] p-6 rounded-lg border border-[#D4AF37]/20">
              <div className="flex text-[#D4AF37] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"{t.text}"</p>
              <h4 className="font-bold text-[#FFFFFF]">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section ref={bookingRef} className="py-16 bg-[#1E1E1E] px-4 sm:px-6 lg:px-8 border-y border-[#D4AF37]/20">
        <BookingForm />
      </section>

      {/* Location / Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#D4AF37]">Onde Estamos</h2>
          <p className="text-gray-400 mt-2">Venha tomar um café conosco</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-[#1E1E1E] p-6 rounded-lg border border-[#D4AF37]/20 flex flex-col items-center">
            <MapPin className="h-8 w-8 text-[#D4AF37] mb-3" />
            <h3 className="font-bold mb-1">Endereço</h3>
            <p className="text-gray-400 text-sm">Rua da Navalha, 123 - Centro</p>
          </div>
          <div className="bg-[#1E1E1E] p-6 rounded-lg border border-[#D4AF37]/20 flex flex-col items-center">
            <Phone className="h-8 w-8 text-[#D4AF37] mb-3" />
            <h3 className="font-bold mb-1">Contato</h3>
            <p className="text-gray-400 text-sm">(11) 99999-9999</p>
          </div>
          <div className="bg-[#1E1E1E] p-6 rounded-lg border border-[#D4AF37]/20 flex flex-col items-center">
            <Clock className="h-8 w-8 text-[#D4AF37] mb-3" />
            <h3 className="font-bold mb-1">Horário</h3>
            <p className="text-gray-400 text-sm">Seg a Sáb: 09h às 20h</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E1E1E] border-t border-[#D4AF37]/20 py-8 px-4 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Barbearia Navalha Fina. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};