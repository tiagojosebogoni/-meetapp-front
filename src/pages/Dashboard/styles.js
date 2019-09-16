import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: #fff;
    font-size: 30px;
  }

  button {
    background: #f04c69;
    margin-top: 10px;
    border: 0;
    color: #fff;
    font-weight: bold;
    height: 44px;
    padding: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#f04c69')};
    }
  }
`;
