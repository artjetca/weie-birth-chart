import { Element } from '../types';

export interface ZodiacAnimalInfo {
  name: string;
  chinese: string;
  element: Element;
  yinYang: 'Yin' | 'Yang';
  years: number[];
  personality: string[];
  characteristics: string[];
  luckyElements: Element[];
  luckyColors: string[];
  luckyNumbers: number[];
  luckyDirections: string[];
  compatibility: {
    best: string[];
    good: string[];
    challenging: string[];
  };
  career: string[];
  health: string[];
  icon: string; // Emoji or symbol
}

export const ZODIAC_ANIMALS_DATA: Record<string, ZodiacAnimalInfo> = {
  'Rata': {
    name: 'Rata',
    chinese: '鼠',
    element: 'Agua',
    yinYang: 'Yang',
    years: [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020, 2032],
    personality: [
      'Inteligente y astuto',
      'Adaptable y versátil',
      'Ambicioso y trabajador',
      'Sociable y encantador'
    ],
    characteristics: [
      'Excelente capacidad de supervivencia',
      'Habilidad para encontrar oportunidades',
      'Pensamiento rápido y decisivo',
      'Tendencia a ser cauteloso con el dinero'
    ],
    luckyElements: ['Agua', 'Metal'],
    luckyColors: ['Azul', 'Dorado', 'Verde'],
    luckyNumbers: [2, 3],
    luckyDirections: ['Norte', 'Noreste'],
    compatibility: {
      best: ['Dragón', 'Mono'],
      good: ['Buey', 'Conejo'],
      challenging: ['Caballo', 'Cabra']
    },
    career: ['Negocios', 'Escritura', 'Crítica', 'Política'],
    health: ['Cuidar el sistema nervioso', 'Evitar el estrés excesivo'],
    icon: '🐭'
  },
  'Buey': {
    name: 'Buey',
    chinese: '牛',
    element: 'Tierra',
    yinYang: 'Yin',
    years: [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021, 2033],
    personality: [
      'Confiable y paciente',
      'Determinado y persistente',
      'Honesto y leal',
      'Conservador y tradicional'
    ],
    characteristics: [
      'Fuerte ética de trabajo',
      'Metodical y organizado',
      'Prefiere la estabilidad',
      'Puede ser terco a veces'
    ],
    luckyElements: ['Tierra', 'Agua'],
    luckyColors: ['Amarillo', 'Azul', 'Verde'],
    luckyNumbers: [1, 9],
    luckyDirections: ['Norte', 'Sur'],
    compatibility: {
      best: ['Rata', 'Serpiente', 'Gallo'],
      good: ['Conejo', 'Mono'],
      challenging: ['Tigre', 'Dragón', 'Cabra']
    },
    career: ['Agricultura', 'Medicina', 'Educación', 'Ingeniería'],
    health: ['Cuidar el sistema digestivo', 'Mantener ejercicio regular'],
    icon: '🐂'
  },
  'Tigre': {
    name: 'Tigre',
    chinese: '虎',
    element: 'Madera',
    yinYang: 'Yang',
    years: [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022, 2034],
    personality: [
      'Valiente y confiado',
      'Competitivo y ambicioso',
      'Generoso y carismático',
      'Independiente y rebelde'
    ],
    characteristics: [
      'Líder natural',
      'Toma riesgos calculados',
      'Protector de los débiles',
      'Puede ser impulsivo'
    ],
    luckyElements: ['Madera', 'Fuego'],
    luckyColors: ['Azul', 'Gris', 'Naranja'],
    luckyNumbers: [1, 3, 4],
    luckyDirections: ['Este', 'Norte'],
    compatibility: {
      best: ['Caballo', 'Perro'],
      good: ['Dragón', 'Cerdo'],
      challenging: ['Mono', 'Serpiente']
    },
    career: ['Liderazgo', 'Deportes', 'Aventura', 'Emprendimiento'],
    health: ['Cuidar el hígado', 'Controlar la ira'],
    icon: '🐅'
  },
  'Conejo': {
    name: 'Conejo',
    chinese: '兔',
    element: 'Madera',
    yinYang: 'Yin',
    years: [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023, 2035],
    personality: [
      'Gentil y compasivo',
      'Artístico y refinado',
      'Prudente y diplomático',
      'Sensible y intuitivo'
    ],
    characteristics: [
      'Excelente mediador',
      'Aprecia la belleza y armonía',
      'Evita conflictos',
      'Puede ser demasiado cauteloso'
    ],
    luckyElements: ['Madera', 'Agua'],
    luckyColors: ['Rojo', 'Rosa', 'Púrpura', 'Azul'],
    luckyNumbers: [3, 4, 6],
    luckyDirections: ['Este', 'Sureste', 'Sur'],
    compatibility: {
      best: ['Cabra', 'Cerdo'],
      good: ['Perro', 'Rata'],
      challenging: ['Gallo', 'Dragón']
    },
    career: ['Arte', 'Literatura', 'Diplomacia', 'Medicina'],
    health: ['Cuidar el sistema respiratorio', 'Evitar ambientes estresantes'],
    icon: '🐰'
  },
  'Dragón': {
    name: 'Dragón',
    chinese: '龍',
    element: 'Tierra',
    yinYang: 'Yang',
    years: [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024, 2036],
    personality: [
      'Poderoso y magnético',
      'Entusiasta y enérgico',
      'Inteligente y talentoso',
      'Orgulloso y noble'
    ],
    characteristics: [
      'Líder carismático',
      'Visionario e innovador',
      'Generoso con los demás',
      'Puede ser arrogante'
    ],
    luckyElements: ['Tierra', 'Metal'],
    luckyColors: ['Dorado', 'Plata', 'Gris'],
    luckyNumbers: [1, 6, 7],
    luckyDirections: ['Este', 'Norte', 'Noroeste'],
    compatibility: {
      best: ['Rata', 'Mono', 'Gallo'],
      good: ['Tigre', 'Serpiente'],
      challenging: ['Perro', 'Conejo']
    },
    career: ['Liderazgo ejecutivo', 'Entretenimiento', 'Política', 'Innovación'],
    health: ['Cuidar el corazón', 'Mantener equilibrio emocional'],
    icon: '🐲'
  },
  'Serpiente': {
    name: 'Serpiente',
    chinese: '蛇',
    element: 'Fuego',
    yinYang: 'Yin',
    years: [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025, 2037],
    personality: [
      'Sabio y misterioso',
      'Intuitivo y perceptivo',
      'Elegante y sofisticado',
      'Determinado y enfocado'
    ],
    characteristics: [
      'Excelente estratega',
      'Profunda comprensión humana',
      'Prefiere la calidad sobre cantidad',
      'Puede ser reservado'
    ],
    luckyElements: ['Fuego', 'Metal'],
    luckyColors: ['Negro', 'Rojo', 'Amarillo'],
    luckyNumbers: [2, 8, 9],
    luckyDirections: ['Sur', 'Suroeste'],
    compatibility: {
      best: ['Buey', 'Gallo'],
      good: ['Dragón', 'Mono'],
      challenging: ['Tigre', 'Cerdo']
    },
    career: ['Investigación', 'Filosofía', 'Psicología', 'Finanzas'],
    health: ['Cuidar el sistema circulatorio', 'Mantener calma interior'],
    icon: '🐍'
  },
  'Caballo': {
    name: 'Caballo',
    chinese: '馬',
    element: 'Fuego',
    yinYang: 'Yang',
    years: [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026, 2038],
    personality: [
      'Libre y aventurero',
      'Enérgico y entusiasta',
      'Sociable y popular',
      'Independiente y optimista'
    ],
    characteristics: [
      'Ama la libertad',
      'Excelente comunicador',
      'Adaptable a cambios',
      'Puede ser impaciente'
    ],
    luckyElements: ['Fuego', 'Tierra'],
    luckyColors: ['Amarillo', 'Verde'],
    luckyNumbers: [2, 3, 7],
    luckyDirections: ['Norte', 'Este', 'Oeste'],
    compatibility: {
      best: ['Tigre', 'Cabra', 'Perro'],
      good: ['Dragón', 'Mono'],
      challenging: ['Rata', 'Buey']
    },
    career: ['Viajes', 'Comunicación', 'Deportes', 'Ventas'],
    health: ['Cuidar el sistema cardiovascular', 'Mantener actividad física'],
    icon: '🐴'
  },
  'Cabra': {
    name: 'Cabra',
    chinese: '羊',
    element: 'Tierra',
    yinYang: 'Yin',
    years: [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027, 2039],
    personality: [
      'Gentil y compasivo',
      'Artístico y creativo',
      'Pacífico y armonioso',
      'Sensible y empático'
    ],
    characteristics: [
      'Fuerte sentido estético',
      'Prefiere ambientes tranquilos',
      'Generoso y caritativo',
      'Puede ser indeciso'
    ],
    luckyElements: ['Tierra', 'Madera'],
    luckyColors: ['Verde', 'Rojo', 'Púrpura'],
    luckyNumbers: [3, 9, 4],
    luckyDirections: ['Este', 'Sureste', 'Sur'],
    compatibility: {
      best: ['Conejo', 'Caballo', 'Cerdo'],
      good: ['Mono', 'Gallo'],
      challenging: ['Buey', 'Perro']
    },
    career: ['Arte', 'Diseño', 'Cuidado', 'Terapia'],
    health: ['Cuidar el sistema digestivo', 'Evitar preocupaciones excesivas'],
    icon: '🐐'
  },
  'Mono': {
    name: 'Mono',
    chinese: '猴',
    element: 'Metal',
    yinYang: 'Yang',
    years: [1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028, 2040],
    personality: [
      'Inteligente y ingenioso',
      'Curioso y juguetón',
      'Versátil y adaptable',
      'Sociable y divertido'
    ],
    characteristics: [
      'Excelente solucionador de problemas',
      'Aprende rápidamente',
      'Innovador y creativo',
      'Puede ser travieso'
    ],
    luckyElements: ['Metal', 'Agua'],
    luckyColors: ['Blanco', 'Azul', 'Dorado'],
    luckyNumbers: [1, 7, 8],
    luckyDirections: ['Norte', 'Noroeste', 'Oeste'],
    compatibility: {
      best: ['Rata', 'Dragón'],
      good: ['Serpiente', 'Cabra'],
      challenging: ['Tigre', 'Cerdo']
    },
    career: ['Tecnología', 'Entretenimiento', 'Educación', 'Investigación'],
    health: ['Cuidar el sistema respiratorio', 'Mantener equilibrio mental'],
    icon: '🐵'
  },
  'Gallo': {
    name: 'Gallo',
    chinese: '雞',
    element: 'Metal',
    yinYang: 'Yin',
    years: [1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029, 2041],
    personality: [
      'Confiado y orgulloso',
      'Trabajador y puntual',
      'Honesto y directo',
      'Observador y analítico'
    ],
    characteristics: [
      'Excelente organizador',
      'Atención al detalle',
      'Valiente y protector',
      'Puede ser crítico'
    ],
    luckyElements: ['Metal', 'Tierra'],
    luckyColors: ['Dorado', 'Marrón', 'Amarillo'],
    luckyNumbers: [5, 7, 8],
    luckyDirections: ['Sur', 'Sureste'],
    compatibility: {
      best: ['Buey', 'Serpiente', 'Dragón'],
      good: ['Cabra', 'Mono'],
      challenging: ['Conejo', 'Perro']
    },
    career: ['Administración', 'Contabilidad', 'Crítica', 'Servicio público'],
    health: ['Cuidar el sistema digestivo', 'Controlar el perfeccionismo'],
    icon: '🐓'
  },
  'Perro': {
    name: 'Perro',
    chinese: '狗',
    element: 'Tierra',
    yinYang: 'Yang',
    years: [1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030, 2042],
    personality: [
      'Leal y confiable',
      'Honesto y justo',
      'Responsable y protector',
      'Modesto y humilde'
    ],
    characteristics: [
      'Fuerte sentido de justicia',
      'Excelente amigo',
      'Trabajador dedicado',
      'Puede ser pesimista'
    ],
    luckyElements: ['Tierra', 'Metal'],
    luckyColors: ['Verde', 'Rojo', 'Púrpura'],
    luckyNumbers: [3, 4, 9],
    luckyDirections: ['Este', 'Sur', 'Noroeste'],
    compatibility: {
      best: ['Tigre', 'Conejo', 'Caballo'],
      good: ['Rata', 'Mono'],
      challenging: ['Dragón', 'Cabra', 'Gallo']
    },
    career: ['Servicio social', 'Ley', 'Medicina', 'Educación'],
    health: ['Cuidar el sistema inmunológico', 'Mantener actitud positiva'],
    icon: '🐕'
  },
  'Cerdo': {
    name: 'Cerdo',
    chinese: '豬',
    element: 'Agua',
    yinYang: 'Yin',
    years: [1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031, 2043],
    personality: [
      'Generoso y compasivo',
      'Honesto y sincero',
      'Diligente y determinado',
      'Tolerante y paciente'
    ],
    characteristics: [
      'Excelente amigo',
      'Disfruta los placeres de la vida',
      'Trabajador confiable',
      'Puede ser ingenuo'
    ],
    luckyElements: ['Agua', 'Madera'],
    luckyColors: ['Amarillo', 'Gris', 'Marrón', 'Dorado'],
    luckyNumbers: [2, 5, 8],
    luckyDirections: ['Suroeste', 'Norte'],
    compatibility: {
      best: ['Conejo', 'Cabra'],
      good: ['Tigre', 'Dragón'],
      challenging: ['Serpiente', 'Mono']
    },
    career: ['Hospitalidad', 'Cuidado', 'Finanzas', 'Arte culinario'],
    health: ['Cuidar el sistema digestivo', 'Mantener peso saludable'],
    icon: '🐷'
  }
};

// Helper function to get zodiac info by name
export function getZodiacInfo(animalName: string): ZodiacAnimalInfo | null {
  return ZODIAC_ANIMALS_DATA[animalName] || null;
}

// Helper function to get zodiac by year
export function getZodiacByYear(year: number): ZodiacAnimalInfo | null {
  const zodiacIndex = (year - 4) % 12;
  const zodiacNames = ['Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'];
  const animalName = zodiacNames[zodiacIndex];
  return getZodiacInfo(animalName);
}