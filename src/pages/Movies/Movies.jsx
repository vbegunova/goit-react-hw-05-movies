import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fecthMovie } from 'services/api';
import { Button, Form, Input } from './Movies.styled';
import { MovieItem } from 'components/TrendingMovie/TrendingMovie.styled';

const Movies = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      setData([]);
      return;
    }

    const fetch = async () => {
      try {
        setError(null);
        setData([]);
        const response = await fecthMovie(query);
        if (response.total_results === 0) {
          setError(
            "Oops, looks like we don't have any film with that title :("
          );
          return;
        }
        setData(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const { queryInput } = e.target;

    const normilizedQuery = queryInput.value.toLowerCase().trim();

    if (normilizedQuery === '') {
      return setSearchParams({});
    }

    setSearchParams({ query: normilizedQuery });

    e.target.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="queryInput" />
        <Button type="submit">Search</Button>
      </Form>
      {error && <p>{error}</p>}
      <ul>
        {data.map(item => {
          return (
            <MovieItem key={item.id}>
              <Link to={`/movies/${item.id}`} state={{ from: location }}>
                {item.title}
              </Link>
            </MovieItem>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
