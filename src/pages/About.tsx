import React from 'react';
import { BookOpenIcon, AcademicCapIcon, SparklesIcon, ClockIcon } from '@heroicons/react/24/outline';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <BookOpenIcon className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Acerca de la Calculadora de Carta Natal
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprendiendo la sabiduría ancestral de la astrología china a través de la tecnología moderna
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* What is Birth Chart Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <SparklesIcon className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">¿Qué es una Carta Natal (生辰八字)?</h2>
            </div>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-4">
                Una Carta Natal, conocida como <strong>生辰八字 (Shēngchén Bāzì)</strong> en chino, es un concepto fundamental en la astrología china tradicional. 
                Representa la instantánea cósmica del momento en que naciste, capturando las energías celestiales que influyen en tu personalidad, 
                destino y camino de vida.
              </p>
              <p className="mb-4">
                El término "八字" significa literalmente "ocho caracteres", refiriéndose a los cuatro pares de caracteres chinos que representan:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Pilar del Año (年柱)</strong> - Representa tu ascendencia, antecedentes familiares e influencias de la vida temprana</li>
                <li><strong>Pilar del Mes (月柱)</strong> - Refleja tu carrera, relaciones con los padres y período de mediana edad</li>
                <li><strong>Pilar del Día (日柱)</strong> - Tu personalidad central, matrimonio y características del cónyuge</li>
                <li><strong>Pilar de la Hora (時柱)</strong> - Hijos, vida posterior y tu legado</li>
              </ul>
              <p>
                  Cada pilar consiste en un Tallo Celestial (天干) y una Rama Terrenal (地支), creando una firma energética única 
                  que revela perspectivas sobre diferentes aspectos de tu vida y carácter.
                </p>
            </div>
          </div>

          {/* Five Elements Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="flex space-x-1 mr-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Los Cinco Elementos (五行)</h2>
            </div>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-4">
                La teoría de los Cinco Elementos (五行, Wǔxíng) es central en la filosofía y astrología china. Estos elementos - 
                Madera, Fuego, Tierra, Metal y Agua - representan diferentes tipos de energía y sus interacciones forman 
                el equilibrio cósmico en tu carta natal.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">🌳 Madera (木)</h3>
                  <p className="text-green-700">Crecimiento, creatividad, flexibilidad y nuevos comienzos</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">🔥 Fuego (火)</h3>
                  <p className="text-red-700">Energía, pasión, transformación e iluminación</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">🌍 Tierra (土)</h3>
                  <p className="text-yellow-700">Estabilidad, nutrición, conexión a tierra y apoyo</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">⚡ Metal (金)</h3>
                  <p className="text-gray-700">Estructura, precisión, claridad y refinamiento</p>
                </div>
                <div className="md:col-span-2 bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">💧 Agua (水)</h3>
                  <p className="text-blue-700">Sabiduría, adaptabilidad, fluidez e intuición</p>
                </div>
              </div>
              <p>
                Comprender tu equilibrio elemental ayuda a identificar tus fortalezas, desafíos y áreas para el desarrollo personal.
              </p>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <AcademicCapIcon className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Cómo Funciona Nuestra Calculadora</h2>
            </div>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-4">
                Nuestra Calculadora de Carta Natal utiliza métodos auténticos de astrología china tradicional combinados con precisión moderna:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Conversión de Calendario</h3>
                    <p className="text-gray-600">Convierte tu fecha de nacimiento gregoriana al sistema tradicional del calendario lunar chino</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Cálculo de los Cuatro Pilares</h3>
                    <p className="text-gray-600">Determina tus pilares de Año, Mes, Día y Hora utilizando algoritmos tradicionales</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Análisis de los Cinco Elementos</h3>
                    <p className="text-gray-600">Analiza la composición elemental y proporciona perspectivas de equilibrio y recomendaciones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Context Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <ClockIcon className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Contexto Histórico</h2>
            </div>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-4">
                La astrología china se ha practicado durante más de 3,000 años, con raíces que se remontan a la Dinastía Shang (1600-1046 a.C.). 
                El sistema fue refinado durante la Dinastía Han (206 a.C. - 220 d.C.) y ha sido desarrollado continuamente por eruditos y practicantes.
              </p>
              <p className="mb-4">
                A diferencia de la astrología occidental que se enfoca en las posiciones planetarias, la astrología china se basa en el calendario lunar, 
                el concepto de Yin y Yang, y la teoría de los Cinco Elementos. Enfatiza la naturaleza cíclica del tiempo y 
                la interconexión de todas las cosas en el universo.
              </p>
              <p>
                Hoy en día, millones de personas en todo el mundo utilizan la astrología china para el autoconocimiento, compatibilidad de relaciones, 
                orientación profesional y para cronometrar decisiones importantes de la vida. Nuestra calculadora trae esta sabiduría ancestral a la era digital, 
                haciéndola accesible para cualquiera que busque perspectivas más profundas sobre su plano cósmico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;