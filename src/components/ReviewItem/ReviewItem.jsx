import { StyledReviewItem } from './ReviewItem.styled';

const ReviewItem = ({ author, content }) => {
  return (
    <StyledReviewItem>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </StyledReviewItem>
  );
};

export default ReviewItem;
