import styled from 'styled-components';

export const Title = styled.h1`
  max-width: 460px;
  font-size: 48px;
  color: #e5e5e5;
  line-height: 56px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 100%;
  display: flex;

  select {
    width: 25%;
    height: 70px;
    font-size: 18px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    background: #ffffff;

    &:nth-child(1) {
      width: 25%;
    }

    &:nth-child(2) {
      border-radius: 0;
    }
  }

  input {
    width: 33%;
    color: #a8a8b3;
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    background: #e50914;
    color: #e5e5e5;
    font-weight: bold;
    width: 25%;
    height: 70px;
    border-radius: 0 5px 5px 0;
    border: 0;
    transition: background-color 0.5s;

    &:hover {
      background: #ff000d;
    }
  }
`;

export const ListMovies = styled.div`
  display: flex;
  overflow: auto;
  margin-top: 80px;

  &&::-webkit-scrollbar {
    height: 7px;
  }

  &&::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0,0,0,1);
      border-radius: 10px;
  }

  &&::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #e50914;
  }
`;

export const Movie = styled.div`
  margin: 0 25px 25px 0;
  max-width: 220px;

  a {
    text-decoration: none;

    img {
      width: 220px;
      border-radius: 10px;
      transition: all ease 0.30s;

      &:hover {
        transform: scale(1.01);
      }
    }

    strong {
      display: block;
      font-size: 18px;
      line-height: 24px;
      color: #e5e5e5;
      margin: 15px 0 10px 0;
    }

    span {
      font-size: 14px;
      color: #a8a8b3;
    }
  }
`;
