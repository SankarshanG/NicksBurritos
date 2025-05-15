import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';

const reviews = [
  {
    name: "Maylondie S.",
    date: "November 28, 2023",
    rating: 5,
    text: "My favorite spot to get a chorizo breakfast burrito! Staff is always so friendly and prompt. Love it here and highly recommend if you're ever in the area!"
  },
  {
    name: "Farah K.",
    date: "June 7, 2024",
    rating: 5,
    text: "Still an amazing hole in the wall that serves the same menu that I've known forever. I get my usual - machaca burrito with green salsa - it never disappoints. The staff is always friendly!"
  },
  {
    name: "John W.",
    date: "July 17, 2024",
    rating: 5,
    text: "Great burritos for morning! When ordered without chorizo, the burrito has bacon, cheese, grilled potatoes, scrambled eggs, and either mild or spicy salsa. The avocado addition completes the flavor combo perfectly!"
  },
  {
    name: "Cindy D.",
    date: "March 3, 2024",
    rating: 4,
    text: "Located about two blocks from the Seal Beach pier, this is a small restaurant that is popular for their breakfast burritos and sandwiches. The lines are long but service is quick, efficient and friendly."
  },
  {
    name: "Jeff C.",
    date: "April 5, 2024",
    rating: 5,
    text: "If you find yourself anywhere near Seal Beach stop in and get one of the Amazing breakfast burritos."
  },
  {
    name: "Caren A.",
    date: "May 8, 2024",
    rating: 5,
    text: "We called in advance and ordered 4 breakfast burritos to go. They got everything right, the food was tasty and the price was very reasonable. It was easy in and out, as well."
  }
];

export function Reviews() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Reviews</h1>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-xl text-gray-300">See what our customers have to say about us</p>
          </div>
        </div>
      </section>

      {/* Yelp Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black text-white p-8 rounded-lg shadow-xl transform transition-transform hover:scale-105">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-red-600 p-3 rounded-full">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Love our food?</h2>
                    <p className="text-gray-300">Share your experience on Yelp!</p>
                  </div>
                </div>
                <a 
                  href="https://www.yelp.com/biz/nicks-deli-seal-beach" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <span className="font-semibold">Review us on Yelp</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{review.name}</h3>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-gray-200 absolute -top-2 -left-2 -z-10" />
                    <p className="text-gray-600 relative z-10">{review.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="inline-block bg-black text-white px-8 py-4 rounded-lg transform transition-transform hover:scale-105">
                <p className="text-xl font-semibold mb-4">Ready to Try Our Food?</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-300 mb-1">Seal Beach Location</p>
                    <a href="tel:+15625985072" className="text-2xl font-bold hover:text-primary">
                      (562) 598-5072
                    </a>
                  </div>
                  <div className="pt-2 border-t border-gray-700">
                    <p className="text-gray-300 mb-1">Los Alamitos Location</p>
                    <a href="tel:+15627957766" className="text-2xl font-bold hover:text-primary">
                      (562) 795-7766
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}