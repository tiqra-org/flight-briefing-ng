export const reportTypes = [
  {
    id: 'METAR',
    name: 'METAR',
  },
  {
    id: 'SIGMET',
    name: 'SIGMET',
  },
  {
    id: 'TAF_LONGTAF',
    name: 'TAF',
  },
];

export const API = {
  OPMET: 'https://ogcie.iblsoft.com/ria/opmetquery',
};

export const HIGHLIGHT_CODES = ['BKN', 'FEW', 'SCT'];

export const HIGHLIGHT_COLORS = {
  INFO: 'text-blue-600',
  DANGER: 'text-rose-600',
};

export const AIRPORTS_PATTERN: RegExp = /^[A-Z]{4}$/g;

export const COUNTRIES_PATTERN: RegExp = /^[A-Z]{2}$/g;
