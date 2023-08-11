import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import {
  AddInfo,
  AddTitle,
  DefaultImage,
  InfoContainer,
  LinkList,
  StyledListItemLink,
} from './MovieDetails.styled';
import { Section } from 'pages/Home/Home.styled';
import Loader from 'components/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [data, setData] = useState({});
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchMovieDetails(movieId);
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
  const vote = Math.round(vote_average * 10);

  return (
    <>
      <Section>
        <Link to={backLinkRef.current}>Back to movies</Link>
      </Section>
      <InfoContainer>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt=""
            width="300"
          />
        ) : (
          <DefaultImage />
        )}
        <div>
          <h1>
            {title} {year && `(${year})`}
          </h1>
          <p>User Score: {vote}%</p>
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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </AddInfo>
    </>
  );
};

export default MovieDetails;
