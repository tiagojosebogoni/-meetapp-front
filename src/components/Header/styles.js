import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #22288c;
  padding: 0 30px;
  width: 100%;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }
  img {
    margin-right: 20px;
    padding-right: 20px;
    border-right: 1px solid #eee;
  }
  a {
    font-weight: bold;
    color: #7159c1;
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  align-items: center;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  button {
    background: #f04c69;
    margin-top: 10px;
    border: 0;
    color: #fff;
    font-weight: bold;
    height: 44px;
    width: 55px;
    padding: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#f04c69')};
    }
  }
`;
