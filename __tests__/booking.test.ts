import { describe, it, expect } from 'vitest';

describe('Booking Validation Logic', () => {
  const validate = (data: { name: string; phone: string; serviceId: string; date: string }) => {
    if (!data.name.trim()) return 'Nome é obrigatório';
    if (!data.phone.trim() || data.phone.length < 8) return 'Telefone inválido';
    if (!data.serviceId) return 'Selecione um serviço';
    if (!data.date) return 'Data é obrigatória';
    return null;
  };

  it('should return error if name is empty', () => {
    const error = validate({ name: '', phone: '11999999999', serviceId: '1', date: '2023-12-01T10:00' });
    expect(error).toBe('Nome é obrigatório');
  });

  it('should return error if phone is too short', () => {
    const error = validate({ name: 'João', phone: '123', serviceId: '1', date: '2023-12-01T10:00' });
    expect(error).toBe('Telefone inválido');
  });

  it('should return error if serviceId is missing', () => {
    const error = validate({ name: 'João', phone: '11999999999', serviceId: '', date: '2023-12-01T10:00' });
    expect(error).toBe('Selecione um serviço');
  });

  it('should return error if date is missing', () => {
    const error = validate({ name: 'João', phone: '11999999999', serviceId: '1', date: '' });
    expect(error).toBe('Data é obrigatória');
  });

  it('should return null (no error) for valid data', () => {
    const error = validate({ name: 'João', phone: '11999999999', serviceId: '1', date: '2023-12-01T10:00' });
    expect(error).toBeNull();
  });
});