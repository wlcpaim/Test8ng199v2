import { useState } from 'react';

export type Service = {
  id: string;
  name: string;
  price: number;
};

export type Booking = {
  name: string;
  phone: string;
  serviceId: string;
  date: string;
};

export const SERVICES: Service[] = [
  { id: '1', name: 'Corte Clássico & Moderno', price: 45 },
  { id: '2', name: 'Barba Modelada na Navalha', price: 35 },
  { id: '3', name: 'Combo (Corte + Barba)', price: 70 },
  { id: '4', name: 'Tratamento & Hidratação', price: 50 },
];

export const useBooking = () => {
  const [booking, setBooking] = useState<Booking>({
    name: '',
    phone: '',
    serviceId: SERVICES[0].id,
    date: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const validate = (data: Booking): string | null => {
    if (!data.name.trim()) return 'Nome é obrigatório';
    if (!data.phone.trim() || data.phone.length < 8) return 'Telefone inválido';
    if (!data.serviceId) return 'Selecione um serviço';
    if (!data.date) return 'Data é obrigatória';
    return null;
  };

  const submitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate(booking);
    if (validationError) {
      setError(validationError);
      setSuccess(false);
      return;
    }
    setError(null);
    setSuccess(true);
  };

  return {
    booking,
    setBooking,
    error,
    success,
    submitBooking,
    validate,
    SERVICES,
  };
};