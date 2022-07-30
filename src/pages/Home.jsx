import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect } from 'react';
import { useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await getCountries();

        setCountries(data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Section>
      <Container>
        {error && (
          <Heading textAlign="center">Something went wrong ...</Heading>
        )}

        {isLoading && <Loader />}

        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
