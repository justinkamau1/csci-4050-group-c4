import { Link } from "react-router-dom";
export default function Movie(props) {
    // function handleClick() {
    //     <Link key = {props.key} to={`/movies/${props.key}`}>{props.title}</Link>
    // }
    return (
        <Link key = {props.id} to={{
            pathname:`/movies/${props.id}`,
            state: {...props}
        }} className="movie--link">
            <div className="movie" >
                <img 
                    className="movie-image"
                    src={props.poster}
                    alt={props.title} 
                    width={props.width} 
                    height={props.height}
                />
                <h3>{props.title}</h3>
            </div>
        </Link>
    );
}
