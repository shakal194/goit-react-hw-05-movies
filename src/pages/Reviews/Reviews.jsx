import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchMovieReviews } from '../../API/API';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return reviews && reviews.results.length > 0 ? (
    <div>
      <ul>
        {reviews.results.map(({ id, author, content }) => (
          <li key={id}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>Reviews not found</div>
  );
}
