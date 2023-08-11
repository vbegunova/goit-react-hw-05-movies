import { Link, useLocation } from 'react-router-dom';
import { MovieItem } from './TrendingMovie.styled';

const TrendingMovie = ({ id, title }) => {
  const location = useLocation();

  return (
    <MovieItem>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </MovieItem>
  );
};

export default TrendingMovie;
