import styled from 'styled-components';
import { HD, TABLET } from '@/constants/Variables';

export const UlWrapper = styled.ul`
  display: flex;
  margin-left: 25px;

  li {
    margin-left: 46px;
  }

  li:first-child a {
    position: relative;
    color: ${(props) => props.theme.colors.primary};

    &::after {
      content: "";
      display: block;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: ${(props) => props.theme.colors.primary};
      position: absolute;
      left: calc(50% - 3.5px);
      bottom: -16px;
    }
  }

  a {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.theme.colors.secondary};
  }

  @media ${TABLET} {
    padding: 0;
    margin: 0;

    li {
      margin-left: 18px;
    }
  }
  @media ${HD} {
    padding: 0;
    margin: 0;

    li {
      margin-left: 18px;
    }
  }
`;
