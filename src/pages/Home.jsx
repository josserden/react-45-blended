import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect } from 'react';
import { useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCountries();

        setCountries(data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
