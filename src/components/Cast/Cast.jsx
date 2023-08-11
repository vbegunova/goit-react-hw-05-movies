import CastItem from 'components/CastItem';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';
import { CastList } from './Cast.styled';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const response = await fetchCast(movieId);

        if (response.cast.length === 0) {
          setError("We don't have cast for this movie.");
          return;
        }
        setData(response.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <CastList>
        {data.map(({ original_name, character, profile_path, id }) => {
          return (
            <CastItem
              key={id}
              name={original_name}
              character={character}
              image={profile_path}
            />
          );
        })}
      </CastList>
    </>
  );
};

export default Cast;
