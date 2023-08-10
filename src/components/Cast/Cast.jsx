import CastItem from 'components/CastItem';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';
import { CastList } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchCast(movieId);
      setData(response.cast);
    };
    fetch();
  }, [movieId]);

  return (
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
  );
};

export default Cast;
