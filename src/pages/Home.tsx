import React from 'react';
import { ChevronRight, MapPin, Clock, Phone } from 'lucide-react';
import Menu from '../components/Menu';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative h-screen bg-black flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center">
              <img 
                src="/images/nicks-deli-logo.png"
                alt="Visit us at Nick's Deli"
                className="w-full max-w-4xl mx-auto h-auto object-contain"
                style={{ 
                  minHeight: '60vh',
                  filter: 'brightness(1.02)' // Slightly enhance the white parts
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Quick Info Section */}
      <section className="bg-white py-8 shadow-md">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center gap-4">
            <Clock className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold">Hours</h3>
              <p className="text-gray-600">Mon-Sun: 7am - 4pm</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Phone className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold">Contact</h3>
              <p className="text-gray-600">(562) 431-6474</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="section-padding bg-white">
        <Menu />
      </section>

      {/* Locations Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <h2 className="section-title">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="location-card">
              <MapPin className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Seal Beach</h3>
              <p className="text-gray-600">
                223 Main Street<br />
                Seal Beach, CA 90740
              </p>
              <a 
                href="https://maps.google.com/?q=223+Main+Street+Seal+Beach+CA+90740" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary hover:text-primary/80"
              >
                Get Directions →
              </a>
            </div>
            <div className="location-card">
              <MapPin className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Los Alamitos</h3>
              <p className="text-gray-600">
                10900 Los Alamitos Blvd.<br />
                Los Alamitos, CA 90720
              </p>
              <a 
                href="https://maps.google.com/?q=10900+Los+Alamitos+Blvd+Los+Alamitos+CA+90720" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary hover:text-primary/80"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}