import Loader from 'components/Loader/Loader';
import ReviewItem from 'components/ReviewItem/ReviewItem';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const response = await fetchReviews(movieId);

        if (response.total_results === 0) {
          setError("We don't have any reviews for this movie.");
          return;
        }

        setData(response.results);
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
      {data[0] && (
        <ul>
          {data.map(({ id, author, content }) => {
            return <ReviewItem key={id} author={author} content={content} />;
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
