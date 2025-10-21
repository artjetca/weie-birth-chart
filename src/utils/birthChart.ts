import { 
  BirthChart, 
  CalculationInput, 
  FourPillars, 
  Pillar, 
  LunarDate,
  FiveElementsAnalysis,
  ElementInfo,
  Element
} from '../types';
import { 
  HEAVENLY_STEMS, 
  EARTHLY_BRANCHES, 
  ELEMENTS,
  GENERATION_CYCLE,
  DESTRUCTION_CYCLE 
} from '../constants';
import { 
  convertToLunar, 
  getTimePeriod, 
  daysSinceReference,
  parseTimeToHour 
} from './calendar';

/**
 * Calculate Year Pillar based on lunar date
 */
export function calculateYearPillar(lunarDate: LunarDate): Pillar {
  const year = lunarDate.year;
  
  // Calculate Heavenly Stem and Earthly Branch for the year
  const stemIndex = (year - 4) % 10;
  const branchIndex = (year - 4) % 12;
  
  const heavenlyStem = HEAVENLY_STEMS[stemIndex];
  const earthlyBranch = EARTHLY_BRANCHES[branchIndex];
  
  // Determine the dominant element and yin/yang
  const element = heavenlyStem.element;
  const yinYang = heavenlyStem.yinYang;
  
  return {
    heavenlyStem,
    earthlyBranch,
    element,
    yinYang,
    chineseCharacters: heavenlyStem.chinese + earthlyBranch.chinese,
    englishName: `${heavenlyStem.english} ${earthlyBranch.english}`
  };
}

/**
 * Calculate Month Pillar based on lunar date and year stem
 */
export function calculateMonthPillar(lunarDate: LunarDate, yearStemIndex: number): Pillar {
  const month = lunarDate.month;
  
  // Month stem calculation based on year stem
  // Formula: Month Stem = (Year Stem × 2 + Month) % 10
  const stemIndex = (yearStemIndex * 2 + month - 1) % 10;
  
  // Month branch is based on the lunar month
  const branchIndex = (month + 1) % 12; // Adjusted for lunar calendar
  
  const heavenlyStem = HEAVENLY_STEMS[stemIndex];
  const earthlyBranch = EARTHLY_BRANCHES[branchIndex];
  
  const element = heavenlyStem.element;
  const yinYang = heavenlyStem.yinYang;
  
  return {
    heavenlyStem,
    earthlyBranch,
    element,
    yinYang,
    chineseCharacters: heavenlyStem.chinese + earthlyBranch.chinese,
    englishName: `${heavenlyStem.english} ${earthlyBranch.english}`
  };
}

/**
 * Calculate Day Pillar based on the number of days since reference
 */
export function calculateDayPillar(date: Date): Pillar {
  const daysSince = daysSinceReference(date);
  
  // Day stem and branch cycle every 60 days
  const stemIndex = daysSince % 10;
  const branchIndex = daysSince % 12;
  
  const heavenlyStem = HEAVENLY_STEMS[stemIndex];
  const earthlyBranch = EARTHLY_BRANCHES[branchIndex];
  
  const element = heavenlyStem.element;
  const yinYang = heavenlyStem.yinYang;
  
  return {
    heavenlyStem,
    earthlyBranch,
    element,
    yinYang,
    chineseCharacters: heavenlyStem.chinese + earthlyBranch.chinese,
    englishName: `${heavenlyStem.english} ${earthlyBranch.english}`
  };
}

/**
 * Calculate Time Pillar based on birth time and day stem
 */
export function calculateTimePillar(birthTime: string, dayStemIndex: number): Pillar {
  const hour = parseTimeToHour(birthTime);
  const timePeriod = getTimePeriod(hour);
  
  // Time stem calculation based on day stem
  // Formula: Time Stem = (Day Stem × 2 + Time Period) % 10
  const stemIndex = (dayStemIndex * 2 + timePeriod) % 10;
  const branchIndex = timePeriod;
  
  const heavenlyStem = HEAVENLY_STEMS[stemIndex];
  const earthlyBranch = EARTHLY_BRANCHES[branchIndex];
  
  const element = heavenlyStem.element;
  const yinYang = heavenlyStem.yinYang;
  
  return {
    heavenlyStem,
    earthlyBranch,
    element,
    yinYang,
    chineseCharacters: heavenlyStem.chinese + earthlyBranch.chinese,
    englishName: `${heavenlyStem.english} ${earthlyBranch.english}`
  };
}

/**
 * Calculate Four Pillars
 */
export function calculateFourPillars(input: CalculationInput): FourPillars {
  const lunarDate = convertToLunar(input.birthDate);
  
  const yearPillar = calculateYearPillar(lunarDate);
  const monthPillar = calculateMonthPillar(lunarDate, yearPillar.heavenlyStem.index);
  const dayPillar = calculateDayPillar(input.birthDate);
  const timePillar = calculateTimePillar(input.birthTime, dayPillar.heavenlyStem.index);
  
  return {
    yearPillar,
    monthPillar,
    dayPillar,
    timePillar
  };
}

/**
 * Analyze Five Elements distribution
 */
export function analyzeFiveElements(pillars: FourPillars): FiveElementsAnalysis {
  const elementCounts: Record<Element, number> = {
    Madera: 0,
    Fuego: 0,
    Tierra: 0,
    Metal: 0,
    Agua: 0
  };
  
  const elementSources: Record<Element, string[]> = {
    Madera: [],
    Fuego: [],
    Tierra: [],
    Metal: [],
    Agua: []
  };
  
  // Count elements from all pillars
  const allPillars = [pillars.yearPillar, pillars.monthPillar, pillars.dayPillar, pillars.timePillar];
  const pillarNames = ['Year', 'Month', 'Day', 'Time'];
  
  allPillars.forEach((pillar, index) => {
    // Count from Heavenly Stem
    elementCounts[pillar.heavenlyStem.element]++;
    elementSources[pillar.heavenlyStem.element].push(`${pillarNames[index]} Stem`);
    
    // Count from Earthly Branch
    elementCounts[pillar.earthlyBranch.element]++;
    elementSources[pillar.earthlyBranch.element].push(`${pillarNames[index]} Branch`);
  });
  
  // Calculate total and percentages
  const total = Object.values(elementCounts).reduce((sum, count) => sum + count, 0);
  
  const elements = {
    madera: {
      count: elementCounts.Madera,
      strength: calculateElementStrength('Madera', elementCounts),
      percentage: (elementCounts.Madera / total) * 100,
      sources: elementSources.Madera
    },
    fuego: {
      count: elementCounts.Fuego,
      strength: calculateElementStrength('Fuego', elementCounts),
      percentage: (elementCounts.Fuego / total) * 100,
      sources: elementSources.Fuego
    },
    tierra: {
      count: elementCounts.Tierra,
      strength: calculateElementStrength('Tierra', elementCounts),
      percentage: (elementCounts.Tierra / total) * 100,
      sources: elementSources.Tierra
    },
    metal: {
      count: elementCounts.Metal,
      strength: calculateElementStrength('Metal', elementCounts),
      percentage: (elementCounts.Metal / total) * 100,
      sources: elementSources.Metal
    },
    agua: {
      count: elementCounts.Agua,
      strength: calculateElementStrength('Agua', elementCounts),
      percentage: (elementCounts.Agua / total) * 100,
      sources: elementSources.Agua
    }
  };
  
  // Find dominant and weakest elements
  const elementEntries = [
    { element: 'Madera' as Element, count: elements.madera.count },
    { element: 'Fuego' as Element, count: elements.fuego.count },
    { element: 'Tierra' as Element, count: elements.tierra.count },
    { element: 'Metal' as Element, count: elements.metal.count },
    { element: 'Agua' as Element, count: elements.agua.count }
  ];
  
  const sortedElements = elementEntries.sort((a, b) => b.count - a.count);
  const dominantElement = sortedElements[0].element;
  const weakestElement = sortedElements[sortedElements.length - 1].element;
  
  // Determine balance
  const maxCount = Math.max(...Object.values(elementCounts));
  const minCount = Math.min(...Object.values(elementCounts));
  const balance = (maxCount - minCount) <= 1 ? 'Equilibrado' : 'Desequilibrado';
  
  // Generate recommendations
  const recommendations = generateRecommendations(elements, dominantElement, weakestElement);
  
  return {
    elements,
    dominantElement,
    weakestElement,
    balance,
    recommendations
  };
}

/**
 * Calculate element strength considering generation and destruction cycles
 */
function calculateElementStrength(element: Element, elementCounts: Record<Element, number>): number {
  let strength = elementCounts[element] * 10; // Base strength
  
  // Add strength from generating elements
  const generatingElement = Object.keys(GENERATION_CYCLE).find(
    key => GENERATION_CYCLE[key as Element] === element
  ) as Element;
  
  if (generatingElement) {
    strength += elementCounts[generatingElement] * 3;
  }
  
  // Reduce strength from destroying elements
  const destroyingElement = Object.keys(DESTRUCTION_CYCLE).find(
    key => DESTRUCTION_CYCLE[key as Element] === element
  ) as Element;
  
  if (destroyingElement) {
    strength -= elementCounts[destroyingElement] * 2;
  }
  
  return Math.max(0, strength);
}

/**
 * Generate recommendations based on element analysis
 */
function generateRecommendations(
  elements: {
    madera: ElementInfo;
    fuego: ElementInfo;
    tierra: ElementInfo;
    metal: ElementInfo;
    agua: ElementInfo;
  },
  dominantElement: Element,
  weakestElement: Element
): string[] {
  const recommendations: string[] = [];
  
  const elementMap = {
    Madera: elements.madera,
    Fuego: elements.fuego,
    Tierra: elements.tierra,
    Metal: elements.metal,
    Agua: elements.agua
  };
  
  if (elementMap[weakestElement].count === 0) {
    recommendations.push(`Considera fortalecer el elemento ${weakestElement} a través de elecciones de estilo de vida, colores o direcciones.`);
  }
  
  if (elementMap[dominantElement].count > 3) {
    recommendations.push(`Tu elemento ${dominantElement} es muy fuerte. Equilibralo con actividades del elemento ${DESTRUCTION_CYCLE[dominantElement]}.`);
  }
  
  // General recommendations based on weakest element
  const elementAdvice: Record<Element, string> = {
    Madera: 'Pasa más tiempo en la naturaleza, usa colores verdes y mira hacia el este para meditar.',
    Fuego: 'Participa en actividades activas, usa colores rojos y mira hacia el sur para obtener energía.',
    Tierra: 'Practica actividades de conexión a tierra, usa colores amarillos/marrones y mira hacia el centro para estabilidad.',
    Metal: 'Enfócate en la organización y precisión, usa colores blancos/dorados y mira hacia el oeste para claridad.',
    Agua: 'Abraza la flexibilidad y el flujo, usa colores negros/azules y mira hacia el norte para sabiduría.'
  };
  
  recommendations.push(elementAdvice[weakestElement]);
  
  return recommendations;
}

/**
 * Main function to calculate complete birth chart
 */
export function calculateBirthChart(input: CalculationInput): BirthChart {
  const lunarDate = convertToLunar(input.birthDate);
  const fourPillars = calculateFourPillars(input);
  const fiveElementsAnalysis = analyzeFiveElements(fourPillars);
  
  return {
    birthDate: input.birthDate,
    birthTime: input.birthTime,
    timezone: input.timezone,
    lunarDate,
    fourPillars,
    fiveElementsAnalysis,
    calculatedAt: new Date()
  };
}