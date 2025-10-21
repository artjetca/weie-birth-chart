import React from 'react';
import { PillarDisplayProps } from '../types';
import { ELEMENT_COLORS } from '../constants';

const PillarDisplay: React.FC<PillarDisplayProps> = ({ pillar, pillarType }) => {
  const elementColor = ELEMENT_COLORS[pillar.element];

  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-200">
      {/* Pillar Type */}
      <h4 className="text-lg font-semibold text-gray-900 mb-4">
        Pilar de {pillarType}
      </h4>

      {/* Chinese Characters */}
      <div className="mb-4">
        <div className="text-4xl font-bold text-gray-800 mb-2">
          {pillar.chineseCharacters}
        </div>
        <div className="text-sm text-gray-600">
          {pillar.englishName}
        </div>
      </div>

      {/* Element Badge */}
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${elementColor.bg} ${elementColor.text} ${elementColor.border} border`}>
        {pillar.element}
      </div>

      {/* Details */}
      <div className="space-y-3 text-sm">
        {/* Heavenly Stem */}
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="font-medium text-gray-700 mb-1">Tronco Celestial</div>
          <div className="text-gray-900">
            {pillar.heavenlyStem.chinese} ({pillar.heavenlyStem.english})
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {pillar.heavenlyStem.element} • {pillar.heavenlyStem.yinYang}
          </div>
        </div>

        {/* Earthly Branch */}
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="font-medium text-gray-700 mb-1">Rama Terrenal</div>
          <div className="text-gray-900">
            {pillar.earthlyBranch.chinese} ({pillar.earthlyBranch.english})
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {pillar.earthlyBranch.zodiacAnimal} • {pillar.earthlyBranch.element}
          </div>
          {pillar.earthlyBranch.timeRange && (
            <div className="text-xs text-gray-500">
              Hora: {pillar.earthlyBranch.timeRange}
            </div>
          )}
        </div>
      </div>

      {/* Yin/Yang Indicator */}
      <div className="mt-4">
        <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
          pillar.yinYang === 'Yang' 
            ? 'bg-orange-100 text-orange-800' 
            : 'bg-indigo-100 text-indigo-800'
        }`}>
          {pillar.yinYang}
        </div>
      </div>
    </div>
  );
};

export default PillarDisplay;