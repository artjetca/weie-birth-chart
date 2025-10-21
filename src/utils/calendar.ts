import { format, getYear, getMonth, getDate, getHours } from 'date-fns';
import { LunarDate, SolarTerm } from '../types';

/**
 * Convert Gregorian date to Chinese Lunar date
 * This is a simplified implementation for demonstration
 * In a production app, you would use a more comprehensive lunar calendar library
 */
export function convertToLunar(gregorianDate: Date): LunarDate {
  const year = getYear(gregorianDate);
  const month = getMonth(gregorianDate) + 1; // getMonth returns 0-11
  const day = getDate(gregorianDate);
  
  // Simplified lunar conversion - in reality this would be much more complex
  // This is a basic approximation for demonstration purposes
  const lunarYear = year;
  const lunarMonth = month;
  const lunarDay = day;
  
  // Calculate zodiac animal (12-year cycle)
  const zodiacIndex = (year - 4) % 12;
  const zodiacAnimals = [
    'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente',
    'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'
  ];
  
  // Calculate Chinese year name using Heavenly Stems and Earthly Branches
  const stemIndex = (year - 4) % 10;
  const branchIndex = (year - 4) % 12;
  
  const stems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
  const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  
  const chineseYear = stems[stemIndex] + branches[branchIndex];
  
  return {
    year: lunarYear,
    month: lunarMonth,
    day: lunarDay,
    isLeapMonth: false, // Simplified - would need proper leap month calculation
    chineseYear,
    zodiacAnimal: zodiacAnimals[zodiacIndex]
  };
}

/**
 * Calculate solar terms for a given year
 * Simplified implementation - in reality this would use astronomical calculations
 */
export function calculateSolarTerms(year: number): SolarTerm[] {
  const solarTerms: SolarTerm[] = [];
  
  // Approximate dates for solar terms (simplified)
  const baseDates = [
    { month: 2, day: 4 },   // Spring Begins
    { month: 2, day: 19 },  // Rain Water
    { month: 3, day: 6 },   // Insects Awaken
    { month: 3, day: 21 },  // Vernal Equinox
    { month: 4, day: 5 },   // Clear and Bright
    { month: 4, day: 20 },  // Grain Rains
    { month: 5, day: 6 },   // Summer Begins
    { month: 5, day: 21 },  // Grain Buds
    { month: 6, day: 6 },   // Grain in Ear
    { month: 6, day: 21 },  // Summer Solstice
    { month: 7, day: 7 },   // Slight Heat
    { month: 7, day: 23 },  // Great Heat
    { month: 8, day: 8 },   // Autumn Begins
    { month: 8, day: 23 },  // Stopping the Heat
    { month: 9, day: 8 },   // White Dews
    { month: 9, day: 23 },  // Autumnal Equinox
    { month: 10, day: 8 },  // Cold Dews
    { month: 10, day: 23 }, // Frost Descends
    { month: 11, day: 7 },  // Winter Begins
    { month: 11, day: 22 }, // Slight Snow
    { month: 12, day: 7 },  // Great Snow
    { month: 12, day: 22 }, // Winter Solstice
    { month: 1, day: 6 },   // Slight Cold
    { month: 1, day: 20 },  // Great Cold
  ];
  
  const termNames = [
    'Spring Begins', 'Rain Water', 'Insects Awaken', 'Vernal Equinox',
    'Clear and Bright', 'Grain Rains', 'Summer Begins', 'Grain Buds',
    'Grain in Ear', 'Summer Solstice', 'Slight Heat', 'Great Heat',
    'Autumn Begins', 'Stopping the Heat', 'White Dews', 'Autumnal Equinox',
    'Cold Dews', 'Frost Descends', 'Winter Begins', 'Slight Snow',
    'Great Snow', 'Winter Solstice', 'Slight Cold', 'Great Cold'
  ];
  
  baseDates.forEach((dateInfo, index) => {
    const termYear = dateInfo.month <= 2 ? year + 1 : year;
    const date = new Date(termYear, dateInfo.month - 1, dateInfo.day);
    
    solarTerms.push({
      name: termNames[index],
      date,
      index
    });
  });
  
  return solarTerms.sort((a, b) => a.date.getTime() - b.date.getTime());
}

/**
 * Get the time period index for calculating time pillar
 */
export function getTimePeriod(hour: number): number {
  if (hour >= 23 || hour < 1) return 0;  // 子時
  if (hour >= 1 && hour < 3) return 1;   // 丑時
  if (hour >= 3 && hour < 5) return 2;   // 寅時
  if (hour >= 5 && hour < 7) return 3;   // 卯時
  if (hour >= 7 && hour < 9) return 4;   // 辰時
  if (hour >= 9 && hour < 11) return 5;  // 巳時
  if (hour >= 11 && hour < 13) return 6; // 午時
  if (hour >= 13 && hour < 15) return 7; // 未時
  if (hour >= 15 && hour < 17) return 8; // 申時
  if (hour >= 17 && hour < 19) return 9; // 酉時
  if (hour >= 19 && hour < 21) return 10; // 戌時
  if (hour >= 21 && hour < 23) return 11; // 亥時
  
  return 0; // Default to 子時
}

/**
 * Calculate the number of days since a reference date
 * Used for day pillar calculation
 */
export function daysSinceReference(date: Date): number {
  // Reference date: January 1, 1900 (arbitrary reference point)
  const referenceDate = new Date(1900, 0, 1);
  const timeDiff = date.getTime() - referenceDate.getTime();
  return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
}

/**
 * Format date for display
 */
export function formatDate(date: Date): string {
  return format(date, 'yyyy-MM-dd');
}

/**
 * Format time for display
 */
export function formatTime(time: string): string {
  return time;
}

/**
 * Parse time string to hour
 */
export function parseTimeToHour(timeString: string): number {
  const [hours] = timeString.split(':').map(Number);
  return hours;
}