import { Star } from 'lucide-react'

/**
 * Renders a row of 5 stars, filled up to `rating`.
 */
export default function StarRating({ rating = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`تقييم ${rating} من 5 نجوم`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating
              ? 'text-secondary-500 fill-secondary-500'
              : 'text-neutral-300'
          }
          aria-hidden="true"
        />
      ))}
    </div>
  )
}
