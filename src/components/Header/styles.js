import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 0 30px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  img {
    height: 35px;
    margin-right: 20px;
    padding-right: 20px;
    border-right: 1px solid #eee;
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
    margin-right: 20px;

    strong {
      display: block;
      color: #999;
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
    border: 0;
    color: #fff;
    font-weight: bold;
    height: 35px;
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
