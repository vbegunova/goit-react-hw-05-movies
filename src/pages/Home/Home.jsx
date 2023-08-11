import TrendingMovie from 'components/TrendingMovie/TrendingMovie';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchTrending } from 'services/api';
import { Section } from './Home.styled';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchTrending();
        setTrending(resp.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <Section>
      <ul>
        {trending.map(({ id, title }) => {
          return <TrendingMovie key={id} id={id} title={title} />;
        })}
      </ul>
    </Section>
  );
};

export default Home;
