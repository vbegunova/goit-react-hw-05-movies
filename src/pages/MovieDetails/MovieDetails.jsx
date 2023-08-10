import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import {
  AddInfo,
  AddTitle,
  InfoContainer,
  LinkList,
  StyledListItemLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchMovieDetails(movieId);
        console.log(resp);
        setData(resp);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [movieId]);

  const { title, poster_path, release_date, vote_average, overview, genres } =
    data;
  const year = release_date && release_date.slice(0, 4);

  return (
    <>
      <InfoContainer>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt=""
          width="300"
        />
        <div>
          <h1>
            {title} ({year})
          </h1>
          <p>User Score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres && (
            <p>
              {genres
                .map(genre => {
                  return genre.name;
                })
                .join(', ')}
            </p>
          )}
        </div>
      </InfoContainer>
      <AddInfo>
        <AddTitle>Additional information</AddTitle>
        <LinkList>
          <li>
            <StyledListItemLink to="cast">Cast</StyledListItemLink>
          </li>
          <li>
            <StyledListItemLink to="reviews">Reviews</StyledListItemLink>
          </li>
        </LinkList>
        <Outlet />
      </AddInfo>
    </>
  );
};

export default MovieDetails;
