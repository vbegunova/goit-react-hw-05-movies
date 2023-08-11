import { CastImage, CastInfo, StyledCastItem } from './CastItem.styled';

const CastItem = ({ name, character, image }) => {
  return (
    <>
      {image && (
        <StyledCastItem>
          <CastImage
            src={`https://image.tmdb.org/t/p/original${image}`}
            alt={name}
          />
          <CastInfo>
            <p>{name}</p>
            <p>Character: {character}</p>
          </CastInfo>
        </StyledCastItem>
      )}
    </>
  );
};

export default CastItem;
