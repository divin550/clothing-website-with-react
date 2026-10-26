import { Star } from 'lucide-react';

export default function RatingStars({ rating = 5, reviewCount = null, size = 15 }) {
  const rounded = Math.round(rating * 10) / 10;

  return (
    <div className="d-inline-flex align-items-center gap-1" aria-label={`Rated ${rounded} out of 5 stars`}>
      <div className="d-inline-flex align-items-center text-warning" style={{ gap: '2px' }}>
        {[1, 2, 3, 4, 5].map((starIndex) => {
          const isFilled = starIndex <= Math.round(rating);
          return (
            <Star
              key={starIndex}
              size={size}
              fill={isFilled ? 'currentColor' : 'none'}
              strokeWidth={1.5}
              className={isFilled ? 'text-warning' : 'text-muted opacity-50'}
            />
          );
        })}
      </div>
      <span className="small fw-semibold text-dark ms-1">{rounded}</span>
      {reviewCount !== null && (
        <span className="small text-muted">({reviewCount})</span>
      )}
    </div>
  );
}
