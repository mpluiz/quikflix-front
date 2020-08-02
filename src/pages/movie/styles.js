import styled from 'styled-components';

export const Container = styled.div`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    float: right;
    background: #e50914;
    padding: 10px;
    color: #e5e5e5;
    border-radius: 5px;
    transition: background-color 0.5s;

    &:hover {
      background: #ff000d;
    }
  }
`;

export const Header = styled.div`
  display: flex;

  img {
    width: 300px;
    border-radius: 10px;
    transition: all ease 0.30s;
    margin-right: 30px;

    &:hover {
      transform: scale(1.01);
    }
  }
`;

export const MovieInfo = styled.div`
  h1 {
    color: #e5e5e5;
    margin: 50px 0 5px 0;

    small {
      font-weight: 400;
    }
  }

  div {
    span {
      color: #e50914;
      font-size: 14px;
      font-style: italic;
      margin-bottom: 15px;
      margin-right: 10px;
    }
  }

  h3 {
    color: #e5e5e5;
    font-size: 20px;
    margin-top: 50px;
  }
`;

export const TagLine = styled.span`
    color: #e5e5e5;
    display: block;
    font-size: 16px;
    font-style: italic;
    margin-top: 15px;
    line-height: 22px;
`;

export const Sinopse = styled.span`
    color: #e5e5e5;
    display: block;
    font-size: 16px;
    margin-top: 15px;
    line-height: 22px;
`;

export const Author = styled.div`
  margin: 50px 0 10px 0;

  span {
    color: #e5e5e5;
    font-size: 16px;
    margin-right: 5px;
  }
`;

export const Director = styled.div`
  margin-bottom: 10px;

  span {
    color: #e5e5e5;
    font-size: 16px;
    margin-right: 5px;
  }`;

export const Actor = styled.div`
  span {
    color: #e5e5e5;
    font-size: 16px;
    margin-right: 5px;
  }`;
