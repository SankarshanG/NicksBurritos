import React from 'react';
import { ChevronRight, MapPin, Clock, Phone } from 'lucide-react';
import Menu from '../components/Menu';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Phone Numbers Bar */}
      <div className="bg-primary/5 py-2 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:5625985072" className="hover:text-primary transition-colors">
                Seal Beach: (562) 598-5072
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:5627957766" className="hover:text-primary transition-colors">
                Los Alamitos: (562) 795-7766
              </a>
            </div>
          </div>
        </div>
      </div>

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
                  filter: 'brightness(1.02)'
                }}
              />
            </div>
          </div>
        </div>
      </header>

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

      {/* Hours Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold">Hours of Operation</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Seal Beach</h4>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 6:30 AM - 6:00 PM</p>
                    <p>Saturday: 6:30 AM - 5:00 PM</p>
                    <p>Sunday: 6:30 AM - 4:00 PM</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">Los Alamitos</h4>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday: 6:30 AM - 7:00 PM</p>
                    <p>Tuesday: 6:30 AM - 6:00 PM</p>
                    <p>Wednesday: 6:30 AM - 7:00 PM</p>
                    <p>Thursday: 6:30 AM - 7:00 PM</p>
                    <p>Friday: 6:30 AM - 7:00 PM</p>
                    <p>Saturday: 6:30 AM - 5:00 PM</p>
                    <p>Sunday: 6:30 AM - 4:00 PM</p>
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