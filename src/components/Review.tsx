import React from 'react';

const reviews = [{
  name: 'Riya Mehra',
  rating: 5,
  text: 'Exceptional quality and service! The wooden flooring transformed our home completely.',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
}, {
  name: 'Kunal Jain',
  rating: 5,
  text: 'Professional installation team and outstanding customer service. Highly recommended!',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
}, {
  name: 'Nisha Patel',
  rating: 5,
  text: 'Beautiful craftsmanship and attention to detail. Couldn\'t be happier with the results.',
  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
}, {
  name: 'Rajesh Kumar',
  rating: 5,
  text: 'Great experience from start to finish. The team was knowledgeable and professional.',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
}];

export function Review() {
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-8 text-center">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map(review => (
            <div key={review.name} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h3 className="font-medium">{review.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>;
}