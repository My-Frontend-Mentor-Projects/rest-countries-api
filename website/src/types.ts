export type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

export type Country = {
  flag: {
    img: string;
    alt: string;
  };
  name: string;
  population: string;
  region: Region;
  capital: string;
};

export type CountryDetails = {
  flag: {
    img: string;
    alt: string;
  };
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

export interface CountryAPIResponse {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface Currencies {
  ISK: Isk;
}

export interface Isk {
  name: string;
  symbol: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Gini {
  '2017': number;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  isl: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  isl: Translation;
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex: string;
}
