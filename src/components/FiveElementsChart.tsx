import React from 'react';
import { FiveElementsChartProps, Element } from '../types';
import { ELEMENTS, ELEMENT_COLORS } from '../constants';

const FiveElementsChart: React.FC<FiveElementsChartProps> = ({ analysis }) => {
  // Add null check for analysis
  if (!analysis || !analysis.elements) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No hay datos de análisis disponibles</p>
      </div>
    );
  }

  // Convert element names to lowercase for accessing the analysis object
  const getElementKey = (element: Element): keyof typeof analysis.elements => {
    return element.toLowerCase() as keyof typeof analysis.elements;
  };

  const maxCount = Math.max(...ELEMENTS.map(element => {
    const elementKey = getElementKey(element);
    return analysis.elements[elementKey]?.count || 0;
  }));

  return (
    <div className="space-y-6">
      {/* Elements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {ELEMENTS.map((element: Element) => {
          const elementKey = getElementKey(element);
          const elementInfo = analysis.elements[elementKey];
          
          // Add null check for elementInfo
          if (!elementInfo) {
            return (
              <div key={element} className="text-center">
                <div className="font-semibold text-lg mb-2 text-gray-500">
                  {element}
                </div>
                <div className="text-sm text-gray-400">Sin datos</div>
              </div>
            );
          }

          const colors = ELEMENT_COLORS[element];
          const heightPercentage = maxCount > 0 ? (elementInfo.count / maxCount) * 100 : 0;

          return (
            <div key={element} className="text-center">
              {/* Element Name */}
              <div className={`font-semibold text-lg mb-2 ${colors.text}`}>
                {element}
              </div>

              {/* Visual Bar */}
              <div className="relative h-32 bg-gray-100 rounded-lg mb-3 overflow-hidden">
                <div
                  className={`absolute bottom-0 left-0 right-0 ${colors.bg} ${colors.border} border-t-2 transition-all duration-500 ease-out`}
                  style={{ height: `${heightPercentage}%` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-700">
                    {elementInfo.count}
                  </span>
                </div>
              </div>

              {/* Percentage */}
              <div className="text-sm text-gray-600 mb-2">
                {elementInfo.percentage.toFixed(1)}%
              </div>

              {/* Strength */}
              <div className="text-xs text-gray-500 mb-2">
                Fuerza: {elementInfo.strength}
              </div>

              {/* Sources */}
              {elementInfo.sources.length > 0 && (
                <div className="text-xs text-gray-400">
                  <div className="font-medium mb-1">Fuentes:</div>
                  <div className="space-y-1">
                    {elementInfo.sources.map((source, index) => (
                      <div key={index} className="truncate">
                        {source}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Element Relationships */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          Relaciones de los Elementos
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Generation Cycle */}
          <div>
            <h5 className="font-medium text-gray-700 mb-3">Ciclo de Generación (相生)</h5>
            <div className="text-sm text-gray-600 space-y-1">
              <div>Madera → Fuego → Tierra → Metal → Agua → Madera</div>
              <div className="text-xs text-gray-500 mt-2">
                Cada elemento genera el siguiente en el ciclo
              </div>
            </div>
          </div>

          {/* Destruction Cycle */}
          <div>
            <h5 className="font-medium text-gray-700 mb-3">Ciclo de Destrucción (相克)</h5>
            <div className="text-sm text-gray-600 space-y-1">
              <div>Madera → Tierra → Agua → Fuego → Metal → Madera</div>
              <div className="text-xs text-gray-500 mt-2">
                Cada elemento controla/destruye otro en el ciclo
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Balance Indicator */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-4">
          <span className="text-sm text-gray-600">Equilibrio de Elementos:</span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            analysis.balance === 'Equilibrado' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-orange-100 text-orange-800'
          }`}>
            {analysis.balance || 'Desconocido'}
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-blue-50 rounded-lg p-4">
        <h5 className="font-medium text-gray-700 mb-2">Entendiendo tu Gráfico</h5>
        <div className="text-sm text-gray-600 space-y-1">
          <div>• <strong>Conteo:</strong> Número de veces que cada elemento aparece en tus cuatro pilares</div>
          <div>• <strong>Fuerza:</strong> Calculada considerando las relaciones de generación y destrucción</div>
          <div>• <strong>Equilibrio:</strong> Armonía general entre los cinco elementos</div>
        </div>
      </div>
    </div>
  );
};

export default FiveElementsChart;