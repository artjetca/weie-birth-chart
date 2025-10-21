import React, { useState } from 'react';
import { SparklesIcon, StarIcon } from '@heroicons/react/24/outline';
import BirthChartForm from '../components/BirthChartForm';
import ResultsDisplay from '../components/ResultsDisplay';
import { BirthChart, CalculationInput } from '../types';
import { calculateBirthChart } from '../utils/birthChart';

const Home: React.FC = () => {
  const [birthChart, setBirthChart] = useState<BirthChart | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCalculate = async (input: CalculationInput) => {
    setIsLoading(true);
    try {
      // Simulate calculation delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const chart = calculateBirthChart(input);
      setBirthChart(chart);
    } catch (error) {
      console.error('Error calculating birth chart:', error);
      alert('Ocurrió un error al calcular tu carta natal. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleExport = () => {
    if (!birthChart) return;
    
    // Create a simple text export
    const exportData = `
Resultados de la Calculadora de Carta Natal
==========================================

Información de Nacimiento:
- Fecha: ${birthChart.birthDate.toDateString()}
- Hora: ${birthChart.birthTime}
- Fecha Lunar: ${birthChart.lunarDate.chineseYear} Año del ${birthChart.lunarDate.zodiacAnimal}

Cuatro Pilares:
- Pilar del Año: ${birthChart.fourPillars.yearPillar.chineseCharacters} (${birthChart.fourPillars.yearPillar.englishName})
- Pilar del Mes: ${birthChart.fourPillars.monthPillar.chineseCharacters} (${birthChart.fourPillars.monthPillar.englishName})
- Pilar del Día: ${birthChart.fourPillars.dayPillar.chineseCharacters} (${birthChart.fourPillars.dayPillar.englishName})
- Pilar de la Hora: ${birthChart.fourPillars.timePillar.chineseCharacters} (${birthChart.fourPillars.timePillar.englishName})

Análisis de los Cinco Elementos:
- Madera: ${birthChart.fiveElementsAnalysis.elements.madera.count} (${birthChart.fiveElementsAnalysis.elements.madera.percentage.toFixed(1)}%)
- Fuego: ${birthChart.fiveElementsAnalysis.elements.fuego.count} (${birthChart.fiveElementsAnalysis.elements.fuego.percentage.toFixed(1)}%)
- Tierra: ${birthChart.fiveElementsAnalysis.elements.tierra.count} (${birthChart.fiveElementsAnalysis.elements.tierra.percentage.toFixed(1)}%)
- Metal: ${birthChart.fiveElementsAnalysis.elements.metal.count} (${birthChart.fiveElementsAnalysis.elements.metal.percentage.toFixed(1)}%)
- Agua: ${birthChart.fiveElementsAnalysis.elements.agua.count} (${birthChart.fiveElementsAnalysis.elements.agua.percentage.toFixed(1)}%)

Resumen:
- Elemento Dominante: ${birthChart.fiveElementsAnalysis.dominantElement}
- Elemento Más Débil: ${birthChart.fiveElementsAnalysis.weakestElement}
- Equilibrio: ${birthChart.fiveElementsAnalysis.balance}

Recomendaciones:
${birthChart.fiveElementsAnalysis.recommendations.map(rec => `- ${rec}`).join('\n')}

Generado el: ${birthChart.calculatedAt.toLocaleString()}
    `.trim();

    // Create and download file
    const blob = new Blob([exportData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `carta-natal-${birthChart.birthDate.toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setBirthChart(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        {!birthChart && (
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <SparklesIcon className="h-16 w-16 text-blue-600" />
                <StarIcon className="h-8 w-8 text-purple-600 absolute -top-2 -right-2" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Calculadora de Carta Natal
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Descubre tu carta natal china (生辰八字) y el análisis de los Cinco Elementos. 
              Ingresa tu información de nacimiento para revelar las influencias cósmicas que moldean tu destino.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Astrología China Tradicional
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Análisis de los Cuatro Pilares
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Equilibrio de los Cinco Elementos
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        {!birthChart ? (
          <BirthChartForm onCalculate={handleCalculate} isLoading={isLoading} />
        ) : (
          <div>
            <ResultsDisplay birthChart={birthChart} onExport={handleExport} />
            <div className="text-center mt-8">
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Calcular Otra Carta
              </button>
            </div>
          </div>
        )}

        {/* Features Section */}
        {!birthChart && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔮</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Cálculos Precisos
              </h3>
              <p className="text-gray-600 text-sm">
                Utilizando conversión de calendario chino tradicional y métodos auténticos de astrología
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Análisis de Elementos
              </h3>
              <p className="text-gray-600 text-sm">
                Análisis integral del equilibrio de los Cinco Elementos con recomendaciones personalizadas
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Informes Detallados
              </h3>
              <p className="text-gray-600 text-sm">
                Exporta tu carta natal completa con explicaciones y orientación
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;