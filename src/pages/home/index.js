import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Title, Form, ListMovies, Movie, ErrorMessage } from './styles';

import api from '../../services/api';

function Home() {
  const [newMovies, setNewMovies] = useState('');
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState('default');
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const getPopularMovies = async () => {
      const response = await api.get(`/trending/movie/day`);
      setMovies(response.data.results);
    };

    const getGenres = async () => {
      const response = await api.get(`/genre/movie/list`);
      setGenres(response.data);
    }

    getPopularMovies();
    getGenres();
  }, []);

  async function handleAddMovies(event) {
    event.preventDefault();
    await api.get(`/search/movie?query=${newMovies}&with_genre=${genre}`).then(function(response) {
      if (response.data.results.length !== 0) {
        setMovies(response.data.results);
        setErrorMessage('');
      } else {
        setErrorMessage(`Nenhum filme econtrado`);
        setMovies([]);
      }
    });
  }

  function formatDate(date) {
    const monthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const newDate = new Date(date);
    return `${newDate.getDay()} de ${monthNames[newDate.getMonth()]} de ${newDate.getFullYear()}`;
  }

  return(
    <>
      <Title>Explore filmes no QuikFlix.</Title>
        <Form onSubmit={handleAddMovies}>
          <select name="genres" id="genres" defaultValue="default" onChange={ (e) => setGenre(e.target.value)} >
            <option value="default" disabled>Gêneros</option>
            { genres.map((genre) => (
              <option value={genre.id} key={genre.id}>{genre.name}</option>
            ))}
          </select>
          <input
            type="text"
            name="query"
            onChange={(e) => setNewMovies(e.target.value)}
            placeholder="Digite o nome do filme"
          />
          <button type="submit">Pesquisar</button>
        </Form>

        <ErrorMessage>{ errorMessage }</ErrorMessage>

        { movies && (
          <ListMovies>
          { movies.map((movie) => (
            <Movie key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt={movie.title} />
                <div>
                  <strong>{movie.title}</strong>
                  <span>{ formatDate(movie.release_date) }</span>
                </div>
              </Link>
            </Movie>
          ))}
        </ListMovies>
        )}
    </>
  );
}

export default Home;
