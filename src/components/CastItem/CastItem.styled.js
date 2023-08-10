import styled from 'styled-components';

export const StyledCastItem = styled.li`
  width: calc(100% / 5 - 20px);
  box-shadow: 2px 0px 10px 1px rgb(50, 45, 67, 0.3);
`;

export const CastImage = styled.img`
  display: block;
  width: 100%;
`;

export const CastInfo = styled.div`
  padding: 15px 15px 25px;

  p {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 14px;
  }
  p:first-child {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 5px;
  }
`;
