import React from 'react';
import { useBooking } from '../hooks/useBooking';

export const BookingForm: React.FC = () => {
  const { booking, setBooking, error, success, submitBooking, SERVICES } = useBooking();

  return (
    <div className="bg-[#1E1E1E] p-6 rounded-lg border border-[#D4AF37]/30 max-w-lg mx-auto">
      <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 text-center">Agende seu Atendimento</h3>
      {success ? (
        <div className="bg-green-900/50 border border-green-500 text-green-200 p-4 rounded text-center">
          Agendamento realizado com sucesso! Entraremos em contato para confirmação.
        </div>
      ) : (
        <form onSubmit={submitBooking} className="space-y-4">
          {error && (
            <div className="bg-red-900/50 border border-red-500 text-red-200 p-3 rounded text-sm">
              {error}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-[#FFFFFF] mb-1">Nome Completo</label>
            <input
              type="text"
              value={booking.name}
              onChange={(e) => setBooking({ ...booking, name: e.target.value })}
              className="w-full bg-[#121212] border border-[#D4AF37]/30 rounded px-3 text-[#FFFFFF] min-h-[44px] focus:outline-none focus:border-[#D4AF37]"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#FFFFFF] mb-1">Telefone / WhatsApp</label>
            <input
              type="tel"
              value={booking.phone}
              onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
              className="w-full bg-[#121212] border border-[#D4AF37]/30 rounded px-3 text-[#FFFFFF] min-h-[44px] focus:outline-none focus:border-[#D4AF37]"
              placeholder="(00) 00000-0000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#FFFFFF] mb-1">Serviço</label>
            <select
              value={booking.serviceId}
              onChange={(e) => setBooking({ ...booking, serviceId: e.target.value })}
              className="w-full bg-[#121212] border border-[#D4AF37]/30 rounded px-3 text-[#FFFFFF] min-h-[44px] focus:outline-none focus:border-[#D4AF37]"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} - R$ {s.price},00
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#FFFFFF] mb-1">Data e Horário</label>
            <input
              type="datetime-local"
              value={booking.date}
              onChange={(e) => setBooking({ ...booking, date: e.target.value })}
              className="w-full bg-[#121212] border border-[#D4AF37]/30 rounded px-3 text-[#FFFFFF] min-h-[44px] focus:outline-none focus:border-[#D4AF37]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#D4AF37] text-[#121212] font-bold py-3 rounded hover:bg-[#c19b2e] transition-colors min-h-[44px] flex items-center justify-center"
          >
            Confirmar Agendamento
          </button>
        </form>
      )}
    </div>
  );
};