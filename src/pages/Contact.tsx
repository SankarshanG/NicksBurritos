import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">Visit us at one of our locations or give us a call</p>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Seal Beach Location */}
              <div className="bg-white rounded-lg shadow-lg p-8 transform transition-transform hover:scale-105">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Seal Beach</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">223 Main Street<br />Seal Beach, CA 90740</p>
                      <a 
                        href="https://maps.google.com/?q=223+Main+Street+Seal+Beach+CA+90740"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-primary hover:text-primary/80"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+15625985072" className="text-gray-600 hover:text-primary">
                        (562) 598-5072
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Hours</p>
                      <div className="text-gray-600">
                        <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                        <p>Saturday: 7:00 AM - 5:00 PM</p>
                        <p>Sunday: 7:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Los Alamitos Location */}
              <div className="bg-white rounded-lg shadow-lg p-8 transform transition-transform hover:scale-105">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Los Alamitos</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">10900 Los Alamitos Blvd<br />Los Alamitos, CA 90720</p>
                      <a 
                        href="https://maps.google.com/?q=10900+Los+Alamitos+Blvd+Los+Alamitos+CA+90720"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-primary hover:text-primary/80"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+15627957766" className="text-gray-600 hover:text-primary">
                        (562) 795-7766
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Hours</p>
                      <div className="text-gray-600">
                        <p>Monday - Friday: 6:30 AM - 7:00 PM</p>
                        <p>Saturday: 6:30 AM - 5:00 PM</p>
                        <p>Sunday: 6:30 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="inline-block bg-black text-white px-8 py-4 rounded-lg transform transition-transform hover:scale-105">
                <p className="text-xl font-semibold mb-2">Ready to Order?</p>
                <a href="tel:+15624316474" className="text-2xl font-bold hover:text-primary">
                  (562) 431-6474
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}