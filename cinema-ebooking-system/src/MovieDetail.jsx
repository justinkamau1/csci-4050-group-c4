import { useLocation } from "react-router-dom";

export default function MovieDetail() {
    const location = useLocation();
    const movie = location.state;

    if (!movie) return <p>Movie not found!</p>;

    // Extract YouTube video ID from the URL
    const youtubeVideoId = movie.trailer.split('v=')[1];
    console.log(movie)
    return (
        <div className="movie-detail-page">
            <img 
                className="movie-image"
                src={movie.poster} 
                alt={movie.title} 
                width={movie.width} 
                height={movie.height}
            />
            <h3>{movie.title}</h3>

            {/* Embed YouTube video */}
            <iframe 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${youtubeVideoId}`} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            ></iframe>
        </div>
    );
}
