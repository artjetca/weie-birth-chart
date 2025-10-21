import React, { useState } from 'react';
import { QuestionMarkCircleIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  question: string;
  answer: string;
}

const Help: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "¿Qué información necesito para calcular mi carta natal?",
      answer: "Necesitas tu fecha exacta de nacimiento (año, mes, día) y hora de nacimiento (hora y minuto). Mientras más precisa sea tu hora de nacimiento, más exacta será tu carta. Si no conoces tu hora exacta de nacimiento, puedes usar una hora aproximada, pero algunos aspectos del análisis pueden ser menos precisos."
    },
    {
      question: "¿Qué tan preciso es el cálculo de la carta natal?",
      answer: "Nuestra calculadora utiliza métodos tradicionales de astrología china que se han practicado durante miles de años. La precisión depende de la exactitud de tu información de nacimiento. La conversión del calendario y el cálculo de los Cuatro Pilares siguen algoritmos auténticos utilizados por astrólogos chinos profesionales."
    },
    {
      question: "¿Qué son los Cuatro Pilares (四柱)?",
      answer: "Los Cuatro Pilares representan diferentes aspectos de tu vida: Pilar del Año (ascendencia y vida temprana), Pilar del Mes (carrera y relaciones), Pilar del Día (personalidad central y matrimonio), y Pilar de la Hora (hijos y vida posterior). Cada pilar consiste en un Tallo Celestial y una Rama Terrenal."
    },
    {
      question: "¿Qué representan los Cinco Elementos?",
      answer: "Los Cinco Elementos (Madera, Fuego, Tierra, Metal, Agua) representan diferentes energías y características. La Madera representa crecimiento y creatividad, el Fuego representa pasión y energía, la Tierra representa estabilidad y nutrición, el Metal representa estructura y disciplina, y el Agua representa sabiduría y adaptabilidad."
    },
    {
      question: "¿Cómo debo interpretar el equilibrio de elementos en mi carta?",
      answer: "El equilibrio de elementos muestra qué energías son fuertes o débiles en tu carta. Una carta equilibrada tiene representación relativamente igual de todos los elementos. Si ciertos elementos son dominantes o están ausentes, puede indicar áreas de fortaleza o desafíos potenciales. Las recomendaciones te ayudan a entender cómo trabajar con tu composición elemental."
    },
    {
      question: "¿Cuál es la diferencia entre la astrología china y occidental?",
      answer: "La astrología china se basa en el calendario lunar, los animales del año de nacimiento y la teoría de los Cinco Elementos. Se enfoca en el flujo del tiempo y los ciclos de energía. La astrología occidental usa el calendario solar y las posiciones planetarias. Ambos sistemas ofrecen perspectivas valiosas pero abordan la personalidad y el destino desde perspectivas diferentes."
    },
    {
      question: "¿Puedo usar esto para compatibilidad de relaciones?",
      answer: "Aunque esta calculadora se enfoca en cartas natales individuales, puedes comparar las composiciones elementales y los Cuatro Pilares de dos personas para entender la compatibilidad. Generalmente, los elementos complementarios (como Madera alimentando Fuego, o Agua nutriendo Madera) indican buena compatibilidad."
    },
    {
      question: "¿Con qué frecuencia debo revisar mi carta natal?",
      answer: "Tu carta natal permanece constante durante toda tu vida ya que se basa en tu momento de nacimiento. Sin embargo, podrías querer revisar la interpretación mientras creces y cambias, o durante transiciones significativas de la vida para obtener nuevas perspectivas sobre tu plano cósmico."
    },
    {
      question: "¿Qué pasa si nací en una zona horaria diferente?",
      answer: "La calculadora usa la fecha y hora que ingresas tal como están. Para los resultados más precisos, usa tu hora local de nacimiento (la hora mostrada en los relojes donde naciste). El sistema chino tradicional se basa en el tiempo solar local en lugar de zonas horarias estandarizadas."
    },
    {
      question: "¿Puedo guardar o imprimir los resultados de mi carta natal?",
      answer: "¡Sí! Puedes usar el botón Exportar para descargar tu análisis completo de carta natal como un archivo de texto. También puedes imprimir la página de resultados directamente desde tu navegador o tomar una captura de pantalla para tus registros."
    }
  ];

  const quickTips = [
    {
      title: "Precisión de la Hora de Nacimiento",
      content: "Si no conoces tu hora exacta de nacimiento, revisa tu certificado de nacimiento, pregunta a familiares o contacta al hospital donde naciste."
    },
    {
      title: "Comprendiendo los Elementos",
      content: "Enfócate primero en tus elementos dominantes y más débiles. Estos te dan las perspectivas más importantes sobre tu personalidad y áreas potenciales de crecimiento."
    },
    {
      title: "Leyendo tus Pilares",
      content: "Comienza con tu Pilar del Día ya que representa tu ser central, luego explora cómo los otros pilares influyen en diferentes áreas de la vida."
    },
    {
      title: "Usando las Recomendaciones",
      content: "Las recomendaciones son sugerencias basadas en la sabiduría china tradicional. Úsalas como guía para el desarrollo personal y decisiones de vida."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <QuestionMarkCircleIcon className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ayuda y Soporte
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas saber sobre el uso de la Calculadora de Carta Natal y la comprensión de tus resultados
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Quick Tips Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Consejos Rápidos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quickTips.map((tip, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    {openFAQ === index ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 mt-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">¿Aún Necesitas Ayuda?</h2>
            <p className="text-blue-100 mb-6">
              Si tienes preguntas que no están respondidas aquí, estamos aquí para ayudarte a entender mejor tu carta natal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Recursos de Estudio</h3>
                  <p className="text-sm text-blue-100">
                    Explora libros y recursos en línea sobre astrología china y la teoría de los Cinco Elementos
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Práctica</h3>
                  <p className="text-sm text-blue-100">
                    Calcula cartas para familiares y amigos para entender mejor los patrones y significados
                  </p>
                </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
            <h3 className="font-semibold text-yellow-800 mb-2">Descargo de Responsabilidad Importante</h3>
            <p className="text-yellow-700 text-sm">
              Esta calculadora de carta natal es para propósitos educativos y de entretenimiento. Aunque se basa en métodos tradicionales de astrología china, 
              las interpretaciones no deben usarse como la única base para decisiones importantes de la vida. Siempre usa tu propio juicio y 
              considera consultar con astrólogos profesionales para orientación personal detallada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;