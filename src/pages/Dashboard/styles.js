import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 0 30px;
  width: 100%;

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Header = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 20px;
  }

  button {
    background: #f04c69;
    border: 0;
    color: #fff;
    font-weight: bold;
    height: 45px;
    padding: 0;
    border-radius: 4px;
    font-size: 16px;
    display: flex;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#f04c69')};
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        margin-left: 10px;
        margin-right: 10px;
      }

      span {
        margin-right: 10px;
      }
    }
  }
`;

export const MeetupsItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 4px;
  background: #fff;

  div {
    display: flex;
    align-items: center;

    svg {
      margin-left: 20px;
    }
  }
`;
