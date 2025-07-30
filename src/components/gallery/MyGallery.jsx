import { Component } from "react"
import './MyGallery.css'
import { Link } from 'react-router-dom';

class MyGallery extends Component {
    state = {
        movies: [],
        error: null,
        loading: true,
    };

    componentDidMount() {
        this.fetchMovies(this.props.searchQuery);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.searchQuery !== this.props.searchQuery) {
            this.fetchMovies(this.props.searchQuery);
        }
    }

    fetchMovies = (query) => {
        this.setState({ loading: true, error: null, movies: [] });
        fetch(
            `http://www.omdbapi.com/?apikey=7abb1630&s=${query}`
        ).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Errore nel caricamento delle immagini: ' + response.statusText);
            }
        })
        .then((data) => {
            if (data.Response === 'True') {
                this.setState({ movies: data.Search, loading: false });
            } else {
                this.setState({ movies: [], error: data.Error, loading: false });
            }
        })
        .catch((error) => {
            console.error('Errore di rete o fetch:', error);
            this.setState({ error: error.message, loading: false });
        });
    };

    render() {
        const { movies, loading, error } = this.state;
        const { titleMovie } = this.props;

        return (
            <div className="bg-black p-4">
                <h4 className="text-light">{titleMovie}</h4>
                <div className="g-2 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
                    {loading && <p className="text-light ms-3">Caricamento film...</p>}
                    {error && <p className="text-danger ms-3">Errore: {error}</p>}
                    {!loading && !error && movies.length === 0 && <p className="text-info ms-3">Nessun film trovato.</p>}

                    {!loading && !error && movies.slice(0, 6).map((movie) => {
                        return (
                            <div key={movie.imdbID} className="col text-center px-1 mb-3">
                                <Link to={`/movie-details/${movie.imdbID}`}>
                                    <img className="imgDimension" src={movie.Poster} alt={movie.Title} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default MyGallery;