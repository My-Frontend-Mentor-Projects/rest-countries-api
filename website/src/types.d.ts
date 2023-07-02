// Global Types, Interfaces, Enums, etc.

export type Region = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';

export type Country = {
  flag: string;
  nativeName: string;
  population: string;
  region: Region;
  subRegion: string;
  capital: string;
  topLevelDomain: string;
  currencies: string[];
  languages: string[];
  borderCountries: string[];
};
