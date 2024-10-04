import {useParams} from 'react-router-dom';

function MovieDetails({movies}) {
  const { id } = useParams(); // Get the movie ID from the URL
  const movieChoice = movies.find((movie) => String(movie.id) === id); // Find the movie by id

  return (
    <div className='comp purple'>
      {movieChoice ? (
        <>
          <h1>{movieChoice.title}</h1>
          <p>{movieChoice.description}</p>
        </>
      ): (
        <h1>Movie not found</h1>
      )}
    </div>
  );
}

export default MovieDetails;
