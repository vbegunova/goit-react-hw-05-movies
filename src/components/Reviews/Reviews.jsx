import ReviewItem from 'components/ReviewItem/ReviewItem';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchReviews(movieId);
      console.log(response.results);
      setData(response.results);
    };
    fetch();
  }, [movieId]);

  return (
    <ul>
      {data.map(({ id, author, content }) => {
        return <ReviewItem key={id} author={author} content={content} />;
      })}
    </ul>
  );
};

export default Reviews;
