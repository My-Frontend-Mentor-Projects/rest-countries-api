import {
  BorderCountry,
  Country,
  CountryAPIResponse,
  CountryDetails,
  Region,
} from '../types';

export const mapCountry = (data: CountryAPIResponse[]): Country[] => {
  const countries = data.map((data) => {
    return {
      flag: {
        img: data.flags.png,
        alt: data.flags.alt,
      },
      name: data.name.common,
      population: data.population.toLocaleString('en-US', {
        style: 'decimal',
      }),
      region: data.region as Region,
      capital: data.capital ? data.capital.join(', ') : '',
      code: data.cca2.toLowerCase(),
    };
  });
  return countries;
};

export const mapCountryDetails = (data: CountryAPIResponse): CountryDetails => {
  const countryDetails = {
    flag: {
      img: data.flags.svg,
      alt: data.flags.alt ? data.flags.alt : data.name.common,
    },
    name: data.name.common,
    nativeName: Object.values(data.name.nativeName)
      .map((value) => value.common)
      .join(', '),
    population: data.population.toLocaleString('en-US', {
      style: 'decimal',
    }),
    region: data.region as Region,
    subRegion: data.subregion,
    capital: data.capital ? data.capital.join(', ') : '',
    topLevelDomain: data.tld ? data.tld.join(', ') : '',
    currencies: Object.values(data.currencies)
      .map((value) => value.name)
      .join(', '),
    languages: Object.values(data.languages)
      .map((value) => value)
      .join(', '),
    borderCountries: data.borders ? data.borders.join(',') : '',
    code: data.cca2.toLowerCase(),
  };
  return countryDetails;
};

export const mapBorderCountries = (
  data: CountryAPIResponse[]
): BorderCountry[] => {
  const borderCountries = data.map((data) => {
    return {
      name: data.name.common,
      code: data.cca2.toLowerCase(),
    };
  });
  return borderCountries;
};
