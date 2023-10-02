import Movie from './Movie'
export default function MovieList(props) {
    return (
        <div className  = "movielist-container">
            <h1>{props.name}</h1>
            <div className="movie-list">
                {props.list.data.movies.map(movie => (
                    <Movie 
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    trailer={movie.trailer}
                    poster={movie.poster}
                    width={movie.width} // 184 px
                    height={movie.height} // 276 px
                    />
                ))}
            </div>
        </div>
      
    );
}