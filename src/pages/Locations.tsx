import React from 'react';
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';

const locationData = {
  sealBeach: {
    address: "223 Main St",
    city: "Seal Beach",
    state: "CA",
    zip: "90740",
    phone: "(562) 598-5072",
    hours: [
      { day: "Monday - Friday", time: "6:30 AM - 6:00 PM" },
      { day: "Saturday", time: "6:30 AM - 5:00 PM" },
      { day: "Sunday", time: "6:30 AM - 4:00 PM" }
    ]
  },
  losAlamitos: {
    address: "10900 Los Alamitos Blvd",
    city: "Los Alamitos",
    state: "CA",
    zip: "90720",
    phone: "(562) 795-7766",
    hours: [
      { day: "Monday", time: "6:30 AM - 7:00 PM" },
      { day: "Tuesday", time: "6:30 AM - 6:00 PM" },
      { day: "Wednesday", time: "6:30 AM - 7:00 PM" },
      { day: "Thursday", time: "6:30 AM - 7:00 PM" },
      { day: "Friday", time: "6:30 AM - 7:00 PM" },
      { day: "Saturday", time: "6:30 AM - 5:00 PM" },
      { day: "Sunday", time: "6:30 AM - 4:00 PM" }
    ]
  },
  features: [
    "Cash Only",
    "Street Parking",
    "Takeout Available",
    "Outdoor Seating",
    "Near Seal Beach Pier",
    "Local Favorite"
  ]
};

export function Locations() {
  return (
    <div className="container mx-auto px-4 py-4 mt-12">
      <h1 className="text-3xl font-bold text-center mb-6">Visit Us</h1>
      
      <div className="space-y-6">
        {/* Seal Beach Location */}
        <div className="bg-white rounded-lg shadow-lg p-5">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-6 w-6 text-gray-800" />
            <h2 className="text-2xl font-semibold text-gray-800">Seal Beach Location</h2>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="text-lg">
                <a 
                  href={`https://www.google.com/maps/place/Nick's+Deli/@33.7421,-118.1066,17z/data=!3m1!4b1`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-dark"
                >
                  <p className="font-medium">{locationData.sealBeach.address}</p>
                  <p className="text-gray-600">{locationData.sealBeach.city}, {locationData.sealBeach.state} {locationData.sealBeach.zip}</p>
                </a>
              </div>
              <a 
                href={`https://www.google.com/maps/place/Nick's+Deli/@33.7421,-118.1066,17z/data=!3m1!4b1`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mt-2 sm:mt-0"
              >
                <span>Get Directions</span>
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Hours Card */}
        <div className="bg-white rounded-lg shadow-lg p-5">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="h-6 w-6 text-gray-800" />
            <h2 className="text-2xl font-semibold text-gray-800">Hours of Operation</h2>
          </div>
          <div className="space-y-4">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Seal Beach</h3>
              {locationData.sealBeach.hours.map((schedule, index) => (
                <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <span className="font-medium text-gray-900">{schedule.day}</span>
                  <span className="text-gray-600">{schedule.time}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Los Alamitos</h3>
              {locationData.losAlamitos.hours.map((schedule, index) => (
                <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <span className="font-medium text-gray-900">{schedule.day}</span>
                  <span className="text-gray-600">{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-lg shadow-lg p-5">
          <div className="flex items-center gap-3 mb-4">
            <Phone className="h-6 w-6 text-gray-800" />
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <span className="font-medium text-gray-900">Seal Beach</span>
              <a href={`tel:${locationData.sealBeach.phone}`} className="text-primary hover:text-primary-dark">
                {locationData.sealBeach.phone}
              </a>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <span className="font-medium text-gray-900">Los Alamitos</span>
              <a href={`tel:${locationData.losAlamitos.phone}`} className="text-primary hover:text-primary-dark">
                {locationData.losAlamitos.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Features Card */}
        <div className="bg-white rounded-lg shadow-lg p-5">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Location Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {locationData.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="h-2 w-2 bg-primary rounded-full"></div>
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map Card */}
        <div className="bg-white rounded-lg shadow-lg p-5">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Find Us</h2>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              title="Nick's Deli Location"
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.0876411003837!2d-118.10660988478755!3d33.74210798068431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2f12e9436bd7%3A0x27c49b55803ba23d!2sNick&#39;s%20Deli!5e0!3m2!1sen!2sus!4v1689927014133!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
} 