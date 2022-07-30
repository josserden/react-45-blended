import { Section, Container, CountryInfo, Loader } from 'components';
import { fetchCountry } from 'service/country-service';
import { useState, useEffect } from 'react';
import { useParams, Navigate, useLocation, Link } from 'react-router-dom';

export const Country = () => {
  const [country, setCountry] = useState({});
  const { countryId } = useParams();
  const [error, setError] = useState(null);
  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';

  useEffect(() => {
    const getCountry = async () => {
      try {
        const country = await fetchCountry(countryId);
        setCountry(country);
      } catch (error) {
        console.error(Error);
        setError(true);
      }
    };
    getCountry();
  });

  const { id, flag, capital, countryName, population, languages } = country;

  return (
    <Section>
      <Container>
        <div
          style={{
            marginBottom: '60px',
            color: '#f2f2f2',
            letterSpacing: '0.06em',
            textDecoration: 'underline',

            borderColor: 'gray',
          }}
        >
          <Link to={goBackLink}>Back to Countries</Link>
        </div>

        {error && <Navigate to={'/'} replace />}

        <CountryInfo
          key={id}
          flag={flag}
          capital={capital}
          country={countryName}
          population={population}
          languages={languages}
        />
      </Container>
    </Section>
  );
};
