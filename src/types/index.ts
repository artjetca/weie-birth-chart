// Core Types for Birth Chart Calculator

export type Element = 'Madera' | 'Fuego' | 'Tierra' | 'Metal' | 'Agua';
export type YinYang = 'Yin' | 'Yang';
export type PillarType = 'Año' | 'Mes' | 'Día' | 'Hora';

// Heavenly Stems (天干)
export interface HeavenlyStem {
  index: number;
  chinese: string;
  english: string;
  element: Element;
  yinYang: YinYang;
}

// Earthly Branches (地支)
export interface EarthlyBranch {
  index: number;
  chinese: string;
  english: string;
  zodiacAnimal: string;
  element: Element;
  timeRange: string;
}

// Pillar (柱)
export interface Pillar {
  heavenlyStem: HeavenlyStem;
  earthlyBranch: EarthlyBranch;
  element: Element;
  yinYang: YinYang;
  chineseCharacters: string;
  englishName: string;
}

// Four Pillars (四柱)
export interface FourPillars {
  yearPillar: Pillar;
  monthPillar: Pillar;
  dayPillar: Pillar;
  timePillar: Pillar;
}

// Lunar Date
export interface LunarDate {
  year: number;
  month: number;
  day: number;
  isLeapMonth: boolean;
  chineseYear: string;
  zodiacAnimal: string;
}

// Element Information
export interface ElementInfo {
  count: number;
  strength: number;
  percentage: number;
  sources: string[];
}

// Five Elements Analysis
export interface FiveElementsAnalysis {
  elements: {
    madera: ElementInfo;
    fuego: ElementInfo;
    tierra: ElementInfo;
    metal: ElementInfo;
    agua: ElementInfo;
  };
  dominantElement: Element;
  weakestElement: Element;
  balance: 'Equilibrado' | 'Desequilibrado';
  recommendations: string[];
}

// Birth Chart
export interface BirthChart {
  birthDate: Date;
  birthTime: string;
  timezone?: string;
  lunarDate: LunarDate;
  fourPillars: FourPillars;
  fiveElementsAnalysis: FiveElementsAnalysis;
  calculatedAt: Date;
}

// Calculation Input
export interface CalculationInput {
  birthDate: Date;
  birthTime: string;
  timezone?: string;
}

// Component Props Types
export interface BirthChartFormProps {
  onCalculate: (input: CalculationInput) => void;
  isLoading: boolean;
}

export interface ResultsDisplayProps {
  birthChart: BirthChart;
  onExport: () => void;
}

export interface PillarDisplayProps {
  pillar: Pillar;
  pillarType: PillarType;
}

export interface FiveElementsChartProps {
  analysis: FiveElementsAnalysis;
}

// Solar Terms
export interface SolarTerm {
  name: string;
  date: Date;
  index: number;
}

// Element Relationships
export interface ElementRelationship {
  element1: Element;
  element2: Element;
  relationship: 'Generates' | 'Destroys' | 'Neutral';
  description: string;
}