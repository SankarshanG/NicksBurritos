import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

export function Reviews() {
  return (
    <div className="pt-24">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-orange-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-8 w-8 text-orange-500 fill-current" />
                  <span className="text-2xl font-bold">4.5 on Yelp</span>
                </div>
                <a 
                  href="https://www.yelp.com/biz/nicks-deli-seal-beach" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700"
                >
                  View on Yelp
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-600 mb-4">"Best breakfast burritos in Orange County! The staff is always friendly and the food is consistently delicious. A must-try if you're in Seal Beach."</p>
                  <div className="flex items-center gap-1 text-orange-500">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-600 mb-4">"Their carne asada is amazing! I've been coming here for years and the quality has never dropped. The portions are generous and prices are reasonable."</p>
                  <div className="flex items-center gap-1 text-orange-500">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
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