import { useParams } from 'react-router-dom';
import { CountryDetails } from '../Components';

const Country = () => {
  let { countryCode } = useParams();
  return <CountryDetails countryCode={countryCode} />;
};

export default Country;
