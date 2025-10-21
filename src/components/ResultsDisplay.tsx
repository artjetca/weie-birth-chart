import React from 'react';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { ResultsDisplayProps } from '../types';
import PillarDisplay from './PillarDisplay';
import FiveElementsChart from './FiveElementsChart';
import ZodiacDisplay from './ZodiacDisplay';
import { formatDate } from '../utils/calendar';

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ birthChart, onExport }) => {
  const { birthDate, birthTime, lunarDate, fourPillars, fiveElementsAnalysis } = birthChart;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Tu Carta Natal</h2>
        <p className="text-gray-600">
          Nacido el {formatDate(birthDate)} a las {birthTime}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Fecha Lunar: {lunarDate.chineseYear} Año del {lunarDate.zodiacAnimal}
        </p>
      </div>

      {/* Four Pillars */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Cuatro Pilares (四柱)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PillarDisplay pillar={fourPillars.yearPillar} pillarType="Año" />
          <PillarDisplay pillar={fourPillars.monthPillar} pillarType="Mes" />
          <PillarDisplay pillar={fourPillars.dayPillar} pillarType="Día" />
          <PillarDisplay pillar={fourPillars.timePillar} pillarType="Hora" />
        </div>
      </div>

      {/* Five Elements Analysis */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Análisis de los Cinco Elementos (五行)
        </h3>
        <FiveElementsChart analysis={fiveElementsAnalysis} />
      </div>

      {/* Summary */}
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Resumen</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Elemento Dominante:</p>
            <p className="font-semibold text-lg text-blue-600">
              {fiveElementsAnalysis.dominantElement}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Elemento Más Débil:</p>
            <p className="font-semibold text-lg text-red-600">
              {fiveElementsAnalysis.weakestElement}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Equilibrio General:</p>
            <p className={`font-semibold text-lg ${
              fiveElementsAnalysis.balance === 'Equilibrado' 
                ? 'text-green-600' 
                : 'text-orange-600'
            }`}>
              {fiveElementsAnalysis.balance}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Animal del Zodíaco:</p>
            <p className="font-semibold text-lg text-purple-600">
              {lunarDate.zodiacAnimal}
            </p>
          </div>
        </div>
      </div>

      {/* Zodiac Display */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Zodíaco Chino (十二生肖)
        </h3>
        <ZodiacDisplay zodiacAnimal={lunarDate.zodiacAnimal} />
      </div>

      {/* Recommendations */}
      {fiveElementsAnalysis.recommendations.length > 0 && (
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Recomendaciones
          </h4>
          <ul className="space-y-2">
            {fiveElementsAnalysis.recommendations.map((recommendation, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                {recommendation}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Export Button */}
      <div className="text-center">
        <button
          onClick={onExport}
          className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
        >
          <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
          Exportar Carta Natal
        </button>
      </div>

      {/* Calculation Info */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          Calculado el {formatDate(birthChart.calculatedAt)} usando métodos tradicionales de astrología china
        </p>
      </div>

      {/* Website Link */}
      <div className="mt-4 text-center">
        <a 
          href="https://weie.es" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          Visita weie.es
        </a>
      </div>
    </div>
  );
};

export default ResultsDisplay;