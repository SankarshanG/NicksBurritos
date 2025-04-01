import React from 'react';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-24">
      <section className="bg-orange-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Seal Beach</h3>
                  <p className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-orange-300" />
                    223 Main Street, Seal Beach, CA 90740
                  </p>
                  <p className="flex items-center gap-3 mt-2">
                    <Phone className="h-5 w-5 text-orange-300" />
                    (562) 598-5072
                  </p>
                  <div className="mt-2">
                    <p className="text-sm text-orange-100">Mon - Fri: 7:00 AM - 6:00 PM</p>
                    <p className="text-sm text-orange-100">Sat: 7:00 AM - 5:00 PM</p>
                    <p className="text-sm text-orange-100">Sun: 7:00 AM - 4:00 PM</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Los Alamitos</h3>
                  <p className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-orange-300" />
                    10900 Los Alamitos Blvd, Los Alamitos, CA 90720
                  </p>
                  <p className="flex items-center gap-3 mt-2">
                    <Phone className="h-5 w-5 text-orange-300" />
                    (562) 795-7766
                  </p>
                  <div className="mt-2">
                    <p className="text-sm text-orange-100">Mon - Fri: 6:30 AM - 7:00 PM</p>
                    <p className="text-sm text-orange-100">Sat: 6:30 AM - 5:00 PM</p>
                    <p className="text-sm text-orange-100">Sun: 6:30 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="#" className="text-orange-300 hover:text-orange-200">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-orange-300 hover:text-orange-200">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Order Online</h2>
              <p className="mb-4">Coming soon! Follow us on social media for updates.</p>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg">
                Call to Order
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}