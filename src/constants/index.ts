import { HeavenlyStem, EarthlyBranch, Element } from '../types';

// Heavenly Stems (天干) - 10 stems
export const HEAVENLY_STEMS: HeavenlyStem[] = [
  { index: 0, chinese: '甲', english: 'Jia', element: 'Madera', yinYang: 'Yang' },
  { index: 1, chinese: '乙', english: 'Yi', element: 'Madera', yinYang: 'Yin' },
  { index: 2, chinese: '丙', english: 'Bing', element: 'Fuego', yinYang: 'Yang' },
  { index: 3, chinese: '丁', english: 'Ding', element: 'Fuego', yinYang: 'Yin' },
  { index: 4, chinese: '戊', english: 'Wu', element: 'Tierra', yinYang: 'Yang' },
  { index: 5, chinese: '己', english: 'Ji', element: 'Tierra', yinYang: 'Yin' },
  { index: 6, chinese: '庚', english: 'Geng', element: 'Metal', yinYang: 'Yang' },
  { index: 7, chinese: '辛', english: 'Xin', element: 'Metal', yinYang: 'Yin' },
  { index: 8, chinese: '壬', english: 'Ren', element: 'Agua', yinYang: 'Yang' },
  { index: 9, chinese: '癸', english: 'Gui', element: 'Agua', yinYang: 'Yin' },
];

// Earthly Branches (地支) - 12 branches
export const EARTHLY_BRANCHES: EarthlyBranch[] = [
  { index: 0, chinese: '子', english: 'Zi', zodiacAnimal: 'Rata', element: 'Agua', timeRange: '23:00-01:00' },
  { index: 1, chinese: '丑', english: 'Chou', zodiacAnimal: 'Buey', element: 'Tierra', timeRange: '01:00-03:00' },
  { index: 2, chinese: '寅', english: 'Yin', zodiacAnimal: 'Tigre', element: 'Madera', timeRange: '03:00-05:00' },
  { index: 3, chinese: '卯', english: 'Mao', zodiacAnimal: 'Conejo', element: 'Madera', timeRange: '05:00-07:00' },
  { index: 4, chinese: '辰', english: 'Chen', zodiacAnimal: 'Dragón', element: 'Tierra', timeRange: '07:00-09:00' },
  { index: 5, chinese: '巳', english: 'Si', zodiacAnimal: 'Serpiente', element: 'Fuego', timeRange: '09:00-11:00' },
  { index: 6, chinese: '午', english: 'Wu', zodiacAnimal: 'Caballo', element: 'Fuego', timeRange: '11:00-13:00' },
  { index: 7, chinese: '未', english: 'Wei', zodiacAnimal: 'Cabra', element: 'Tierra', timeRange: '13:00-15:00' },
  { index: 8, chinese: '申', english: 'Shen', zodiacAnimal: 'Mono', element: 'Metal', timeRange: '15:00-17:00' },
  { index: 9, chinese: '酉', english: 'You', zodiacAnimal: 'Gallo', element: 'Metal', timeRange: '17:00-19:00' },
  { index: 10, chinese: '戌', english: 'Xu', zodiacAnimal: 'Perro', element: 'Tierra', timeRange: '19:00-21:00' },
  { index: 11, chinese: '亥', english: 'Hai', zodiacAnimal: 'Cerdo', element: 'Agua', timeRange: '21:00-23:00' },
];

// Five Elements
export const ELEMENTS: Element[] = ['Madera', 'Fuego', 'Tierra', 'Metal', 'Agua'];

// Element Colors for UI
export const ELEMENT_COLORS = {
  Madera: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300' },
  Fuego: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300' },
  Tierra: { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300' },
  Metal: { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-300' },
  Agua: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-300' },
};

// Element Generation Cycle (相生)
export const GENERATION_CYCLE = {
  Madera: 'Fuego',
  Fuego: 'Tierra',
  Tierra: 'Metal',
  Metal: 'Agua',
  Agua: 'Madera',
} as const;

// Element Destruction Cycle (相克)
export const DESTRUCTION_CYCLE = {
  Madera: 'Tierra',
  Fuego: 'Metal',
  Tierra: 'Agua',
  Metal: 'Madera',
  Agua: 'Fuego',
} as const;

// Zodiac Animals
export const ZODIAC_ANIMALS = [
  'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente',
  'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'
];

// Time periods for calculating time pillar
export const TIME_PERIODS = [
  { start: 23, end: 1, branch: 0 },   // 子時 (Zi) 23:00-01:00
  { start: 1, end: 3, branch: 1 },    // 丑時 (Chou) 01:00-03:00
  { start: 3, end: 5, branch: 2 },    // 寅時 (Yin) 03:00-05:00
  { start: 5, end: 7, branch: 3 },    // 卯時 (Mao) 05:00-07:00
  { start: 7, end: 9, branch: 4 },    // 辰時 (Chen) 07:00-09:00
  { start: 9, end: 11, branch: 5 },   // 巳時 (Si) 09:00-11:00
  { start: 11, end: 13, branch: 6 },  // 午時 (Wu) 11:00-13:00
  { start: 13, end: 15, branch: 7 },  // 未時 (Wei) 13:00-15:00
  { start: 15, end: 17, branch: 8 },  // 申時 (Shen) 15:00-17:00
  { start: 17, end: 19, branch: 9 },  // 酉時 (You) 17:00-19:00
  { start: 19, end: 21, branch: 10 }, // 戌時 (Xu) 19:00-21:00
  { start: 21, end: 23, branch: 11 }, // 亥時 (Hai) 21:00-23:00
];

// Solar Terms (24 節氣) - simplified for calculation
export const SOLAR_TERMS = [
  'Comienza la Primavera', 'Agua de Lluvia', 'Despiertan los Insectos', 'Equinoccio de Primavera',
  'Claro y Brillante', 'Lluvias de Grano', 'Comienza el Verano', 'Brotes de Grano',
  'Grano en Espiga', 'Solsticio de Verano', 'Calor Ligero', 'Gran Calor',
  'Comienza el Otoño', 'Cesa el Calor', 'Rocíos Blancos', 'Equinoccio de Otoño',
  'Rocíos Fríos', 'Desciende la Escarcha', 'Comienza el Invierno', 'Nieve Ligera',
  'Gran Nieve', 'Solsticio de Invierno', 'Frío Ligero', 'Gran Frío'
];

// Month mapping for lunar calendar
export const LUNAR_MONTHS = [
  'Primer Mes', 'Segundo Mes', 'Tercer Mes', 'Cuarto Mes',
  'Quinto Mes', 'Sexto Mes', 'Séptimo Mes', 'Octavo Mes',
  'Noveno Mes', 'Décimo Mes', 'Undécimo Mes', 'Duodécimo Mes'
];