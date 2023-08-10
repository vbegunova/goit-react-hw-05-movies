import { Link } from 'react-router-dom';
import { MovieItem } from './TrendingMovie.styled';

const TrendingMovie = ({ id, title }) => {
  return (
    <MovieItem>
      <Link to={`/movies/${id}`}>{title}</Link>
    </MovieItem>
  );
};

export default TrendingMovie;
