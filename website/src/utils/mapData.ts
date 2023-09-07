import { Country, CountryAPIResponse, Region } from '../types';

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
    };
  });
  return countries;
};
