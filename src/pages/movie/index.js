import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import api from '../../services/api';
import { Container, Header, MovieInfo, TagLine, Sinopse } from './styles';

import { FiChevronLeft } from 'react-icons/fi';

function Movie() {
  const { params } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {

    async function loadData() {
      const response = await api.get(`movie/${params.id}`);
      setMovie(response.data);
    }

    loadData();
  }, [params.id]);

  function formatDate(date) {
    const newDate = new Date(date);
    return `${newDate.getDay()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
  }

  return (
    <>
      <Container>
        <Link to="/">
          <FiChevronLeft size={16} />
            Voltar
        </Link>
        <Header>
          <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie?.poster_path}`} alt={movie?.title} />
          { movie && (
            <MovieInfo>
                <h1>{ movie.title } <small>({ new Date(movie.release_date).getFullYear() })</small></h1>
                <div>
                  <span> { formatDate(movie.release_date) }</span>
                  { movie.genres.map((genre) => (
                    <span key={genre.id}>[ {genre.name} ]</span>
                  ))}
                </div>
                <TagLine>{ movie.tagline }</TagLine>
                <h3>Sinopse</h3>
                <Sinopse>{ movie.overview }</Sinopse>
            </MovieInfo>
          )}
        </Header>
      </Container>
    </>
  );
}

export default Movie;
