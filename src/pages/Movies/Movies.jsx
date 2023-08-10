import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { fecthMovie } from 'services/api';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const { queryInput } = e.target;

    const normilizedQuery = queryInput.value.toLowerCase().trim();

    setQuery(normilizedQuery);

    e.target.reset();
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    const fetch = async () => {
      try {
        const response = await fecthMovie(query);
        console.log(response);
        setData(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="queryInput" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {data.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
