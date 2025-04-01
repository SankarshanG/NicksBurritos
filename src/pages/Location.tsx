import React from 'react';
import { MapPin, Phone } from 'lucide-react';

export function Location() {
  return (
    <div className="pt-24">
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Seal Beach</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-gray-600">
                  <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  223 Main Street, Seal Beach, CA 90740
                </p>
                <p className="flex items-center gap-3 text-gray-600">
                  <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  (562) 598-5072
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Hours:</h4>
                  <p className="text-gray-600">Monday - Friday: 7:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 7:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Sunday: 7:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Los Alamitos</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-gray-600">
                  <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  10900 Los Alamitos Blvd, Los Alamitos, CA 90720
                </p>
                <p className="flex items-center gap-3 text-gray-600">
                  <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  (562) 795-7766
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Hours:</h4>
                  <p className="text-gray-600">Monday - Friday: 6:30 AM - 7:00 PM</p>
                  <p className="text-gray-600">Saturday: 6:30 AM - 5:00 PM</p>
                  <p className="text-gray-600">Sunday: 6:30 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}