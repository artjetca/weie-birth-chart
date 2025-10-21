import React, { useState } from 'react';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { BirthChartFormProps, CalculationInput } from '../types';

const BirthChartForm: React.FC<BirthChartFormProps> = ({ onCalculate, isLoading }) => {
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('12:00');
  const [timezone, setTimezone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!birthDate) {
      alert('Por favor selecciona tu fecha de nacimiento');
      return;
    }

    const input: CalculationInput = {
      birthDate: new Date(birthDate),
      birthTime,
      timezone: timezone || undefined
    };

    onCalculate(input);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Ingresa tu Información de Nacimiento
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Birth Date */}
        <div>
          <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-2">
            Fecha de Nacimiento
          </label>
          <div className="relative">
            <input
              type="date"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-12"
              required
            />
            <CalendarIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Birth Time */}
        <div>
          <label htmlFor="birthTime" className="block text-sm font-medium text-gray-700 mb-2">
            Hora de Nacimiento
          </label>
          <div className="relative">
            <input
              type="time"
              id="birthTime"
              value={birthTime}
              onChange={(e) => setBirthTime(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-12"
              required
            />
            <ClockIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Usa formato de 24 horas (ej., 14:30 para 2:30 PM)
          </p>
        </div>

        {/* Timezone (Optional) */}
        <div>
          <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-2">
            Zona Horaria (Opcional)
          </label>
          <select
            id="timezone"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Seleccionar zona horaria (opcional)</option>
            <option value="UTC+8">UTC+8 (Hora Estándar de China)</option>
            <option value="UTC+0">UTC+0 (Hora Media de Greenwich)</option>
            <option value="UTC-5">UTC-5 (Hora Estándar del Este)</option>
            <option value="UTC-8">UTC-8 (Hora Estándar del Pacífico)</option>
            <option value="UTC+9">UTC+9 (Hora Estándar de Japón)</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Calculando...
            </div>
          ) : (
            'Calcular Carta Natal'
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          Tu carta natal será calculada usando métodos tradicionales de astrología china
        </p>
      </div>
    </div>
  );
};

export default BirthChartForm;