import styled from 'styled-components';

export const StyledReviewItem = styled.li`
  border: 1px solid black;
  padding: 15px 20px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  h3 {
    margin-top: 0;
  }
`;
