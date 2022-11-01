import { useFetchMovie } from 'hooks/useFetchForReviews';

const MovieReview = () => {
  const movie = useFetchMovie();

  return (
    <div>
      {movie && (
        <>
          {movie.data.results.length !== 0 ? (
            <ul>
              {movie.data.results.map(reviews => (
                <li key={reviews.id}>
                  <h2>{reviews.author}</h2>
                  <p>{reviews.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Don't Found Reviews</p>
          )}
        </>
      )}
    </div>
  );
};

export default MovieReview;
