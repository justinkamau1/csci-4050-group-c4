import { useParams } from "react-router-dom";
import movieData from './MovieData';

function MovieDetail() {
    const { movieId } = useParams();
    
    const selectedMovie = movieData.data.movies.find(movie => movie.id === movieId);

    if (!selectedMovie) return <p>Movie not found!</p>;

    return (
        <div>
            <h1>{selectedMovie.title}</h1>
            <iframe 
                width="560" 
                height="315" 
                src={selectedMovie.trailer.replace("watch?v=", "embed/")} 
                title={selectedMovie.title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="trailer">
            </iframe>
        </div>
    );
}

export default MovieDetail;
