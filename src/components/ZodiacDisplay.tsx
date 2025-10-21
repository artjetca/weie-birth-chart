import React from 'react';
import { getZodiacInfo, ZodiacAnimalInfo } from '../constants/zodiacData';
import { ELEMENT_COLORS } from '../constants';

interface ZodiacDisplayProps {
  zodiacAnimal: string;
  className?: string;
}

const ZodiacDisplay: React.FC<ZodiacDisplayProps> = ({ zodiacAnimal, className = '' }) => {
  const zodiacInfo = getZodiacInfo(zodiacAnimal);

  if (!zodiacInfo) {
    return (
      <div className={`bg-gray-50 rounded-lg p-6 ${className}`}>
        <p className="text-gray-500">Información del zodíaco no disponible</p>
      </div>
    );
  }

  const elementColors = ELEMENT_COLORS[zodiacInfo.element];

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="text-4xl">{zodiacInfo.icon}</div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {zodiacInfo.name} {zodiacInfo.chinese}
            </h3>
            <div className="flex items-center space-x-2 mt-1">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${elementColors.bg} ${elementColors.text} ${elementColors.border} border`}>
                {zodiacInfo.element}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                zodiacInfo.yinYang === 'Yang' 
                  ? 'bg-orange-100 text-orange-800 border-orange-300' 
                  : 'bg-purple-100 text-purple-800 border-purple-300'
              } border`}>
                {zodiacInfo.yinYang}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personality */}
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Personalidad</h4>
            <ul className="space-y-2">
              {zodiacInfo.personality.map((trait, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-700">{trait}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Características</h4>
            <ul className="space-y-2">
              {zodiacInfo.characteristics.map((characteristic, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-gray-700">{characteristic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lucky Elements and Info */}
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Elementos de la Suerte</h4>
            <div className="flex flex-wrap gap-2">
              {zodiacInfo.luckyElements.map((element, index) => {
                const colors = ELEMENT_COLORS[element];
                return (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text} ${colors.border} border`}
                  >
                    {element}
                  </span>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Colores de la Suerte</h4>
            <div className="flex flex-wrap gap-2">
              {zodiacInfo.luckyColors.map((color, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 border border-gray-300"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Números de la Suerte</h4>
              <div className="flex space-x-2">
                {zodiacInfo.luckyNumbers.map((number, index) => (
                  <span
                    key={index}
                    className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-sm font-bold"
                  >
                    {number}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Direcciones de la Suerte</h4>
              <div className="flex flex-wrap gap-1">
                {zodiacInfo.luckyDirections.map((direction, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800"
                  >
                    {direction}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compatibility */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Compatibilidad</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h5 className="font-medium text-green-700 mb-2">Mejor Compatibilidad</h5>
            <div className="flex flex-wrap gap-2">
              {zodiacInfo.compatibility.best.map((animal, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 border border-green-300"
                >
                  {animal}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-medium text-blue-700 mb-2">Buena Compatibilidad</h5>
            <div className="flex flex-wrap gap-2">
              {zodiacInfo.compatibility.good.map((animal, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 border border-blue-300"
                >
                  {animal}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-medium text-orange-700 mb-2">Compatibilidad Desafiante</h5>
            <div className="flex flex-wrap gap-2">
              {zodiacInfo.compatibility.challenging.map((animal, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800 border border-orange-300"
                >
                  {animal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Career and Health */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Carreras Recomendadas</h4>
            <ul className="space-y-2">
              {zodiacInfo.career.map((career, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span className="text-gray-700">{career}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Consejos de Salud</h4>
            <ul className="space-y-2">
              {zodiacInfo.health.map((tip, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZodiacDisplay;