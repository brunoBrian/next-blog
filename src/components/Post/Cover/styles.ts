import styled, { css } from 'styled-components';

export const Container = styled.img`
  ${({ theme }) => css`
    display: block;
    max-width: 100%;
    margin: 0 auto ${theme.spacings.medium} auto;
  `}
`;
