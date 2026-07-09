import './Testimonials.css'

const reviews = [
  {
    name: 'Emma Wilson',
    city: 'New York',
    text: 'The best flat white I have ever had. The atmosphere is warm and inviting, and the staff truly cares about every cup they serve.',
  },
  {
    name: 'James Carter',
    city: 'Boston',
    text: 'A hidden gem. Their cold brew is incredibly smooth, and the pour-over selection changes weekly with interesting single-origin beans.',
  },
  {
    name: 'Sophia Brown',
    city: 'Chicago',
    text: 'Beautiful space with an impressive attention to detail. The caramel latte is my go-to, and the pastries are always fresh.',
  },
]

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <h2 className="testimonials__title">What Our Guests Say</h2>
        </div>

        <div className="testimonials__grid">
          {reviews.map((review) => (
            <div key={review.name} className="testimonials__card">
              <div className="testimonials__stars">
                {'★'.repeat(5)}
              </div>
              <p className="testimonials__text">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="testimonials__author">
                <span className="testimonials__name">{review.name}</span>
                <span className="testimonials__city">{review.city}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
