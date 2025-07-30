import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Spinner, Alert, ListGroup } from 'react-bootstrap';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  const STRIVE_SCHOOL_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYmI4NTc4Y2RkZjAwMTU1ZDY3YTEiLCJpYXQiOjE3NTM4ODY2NTMsImV4cCI6MTc1NTA5NjI1M30.5iKKPbYJ6QjGYoi5n8pu3LY_TwxDCFJVJCR52pDWbnY';

  useEffect(() => {
    const fetchMovieDetailsAndComments = async () => { 
      setLoading(true);
      setError(null);

      if (!movieId) {
        setError("Nessun ID film fornito.");
        setLoading(false);
        return;
      }

      try {
        
        const omdbApiKey = 'f2bb3b59'; 
        const movieResponse = await fetch(`http://www.omdbapi.com/?apikey=${omdbApiKey}&i=${movieId}`);
        if (!movieResponse.ok) {
          throw new Error('Errore nel recupero dettagli film da OMDb: ' + movieResponse.statusText);
        }
        const movieData = await movieResponse.json();
        if (movieData.Response === 'False') {
          throw new Error(movieData.Error || "Film non trovato su OMDb.");
        }
        setMovie(movieData);

        // 2. Fetch commenti da Strive School API
        const commentsResponse = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`, {
          headers: {
            "Authorization": STRIVE_SCHOOL_TOKEN,
          },
        });

        if (!commentsResponse.ok) {
          if (commentsResponse.status === 401) {
            throw new Error('Errore di autorizzazione. Controlla il tuo token di Strive School.');
          }
          throw new Error('Errore nel recupero dei commenti: ' + commentsResponse.statusText);
        }
        const commentsData = await commentsResponse.json();
        setComments(commentsData);

      } catch (err) {
        console.error("Errore nel MovieDetails:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetailsAndComments();
  }, [movieId, STRIVE_SCHOOL_TOKEN]);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="light" />
        <p className="text-light mt-2">Caricamento dettagli film e commenti...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="danger">Errore: {error}</Alert>
      </Container>
    );
  }

  if (!movie) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="info">Nessun film trovato !</Alert>
      </Container>
    );
  }

  return (
    <Container fluid className="bg-dark text-light py-5" style={{ minHeight: '70vh' }}> 
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <Row>
            <Col md={4} className="text-center mb-4 mb-md-0">
              <img src={movie.Poster} alt={movie.Title} className="img-fluid rounded shadow" style={{ maxHeight: '450px', objectFit: 'cover' }} />
            </Col>
            <Col md={8}>
              <h2 className="mb-3">{movie.Title} ({movie.Year})</h2>
              <p><strong>Genere:</strong> {movie.Genre}</p>
              <p><strong>Regista:</strong> {movie.Director}</p>
              <p><strong>Attori:</strong> {movie.Actors}</p>
              <p><strong>Trama:</strong> {movie.Plot}</p>
              <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
              <p><strong>Runtime:</strong> {movie.Runtime}</p>
              <p><strong>Paese:</strong> {movie.Country}</p>
              <p><strong>Lingua:</strong> {movie.Language}</p>

              <h3 className="mt-4 mb-3">Commenti</h3>
              {comments.length > 0 ? (
                <ListGroup variant="flush" className="bg-dark">
                  {comments.map((comment) => (
                    <ListGroup.Item key={comment._id} className="bg-dark text-light border-secondary py-2">
                      <strong>{comment.author}:</strong> {comment.comment} (Voto: {comment.rate}/5)
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <p className="text-secondary">Nessun commento disponibile!</p>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;