const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
  CAD: 'C$',
  AUD: 'A$',
  CHF: 'Fr',
  CNY: '¥',
  HKD: 'HK$',
  NZD: 'NZ$',
  SEK: 'kr',
  KRW: '₩',
  SGD: 'S$',
  NOK: 'kr',
  MXN: '$',
  INR: '₹',
  RUB: '₽',
  ZAR: 'R',
};

export const getCurrencySymbol = (currency: string): string => 
  CURRENCY_SYMBOLS[currency] || currency;