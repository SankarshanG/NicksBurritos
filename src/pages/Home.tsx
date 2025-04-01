import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <header className="relative h-[70vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://static.wixstatic.com/media/11062b_7170340f908c46daa4e7e05a55d6fd88~mv2.jpg/v1/fill/w_1899,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_7170340f908c46daa4e7e05a55d6fd88~mv2.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-orange-900/40"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Nick's Deli & Burritos
          </h2>
          <a 
            href="#menu"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg"
          >
            View Our Menu
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </header>

      {/* Menu Section */}
      <section id="menu" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>
          
          {/* Breakfast */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Breakfast</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Breakfast Burrito", price: "$9.99", description: "Eggs, potatoes, cheese & choice of meat" },
                { name: "Chorizo & Eggs", price: "$10.99", description: "Served with rice, beans & tortillas" },
                { name: "Huevos Rancheros", price: "$10.99", description: "Eggs over easy, served on corn tortillas with ranchera sauce" },
                { name: "Chilaquiles", price: "$11.99", description: "Tortilla chips, ranchera sauce, eggs, cheese & sour cream" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <span className="text-orange-600 font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Burritos */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Burritos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Regular Burrito", price: "$9.99", description: "Choice of meat, rice, beans & cheese" },
                { name: "Super Burrito", price: "$11.99", description: "Choice of meat, rice, beans, cheese, guacamole & sour cream" },
                { name: "Wet Burrito", price: "$12.99", description: "Super burrito covered with red or green sauce & melted cheese" },
                { name: "Veggie Burrito", price: "$9.99", description: "Rice, beans, cheese, lettuce, tomato & guacamole" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <span className="text-orange-600 font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Plates */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Combination Plates</h3>
            <p className="text-gray-600 mb-6">All plates served with rice, beans & tortillas</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Two Taco Plate", price: "$12.99", description: "Choice of meat" },
                { name: "Two Enchilada Plate", price: "$13.99", description: "Choice of meat, red or green sauce" },
                { name: "Chile Relleno Plate", price: "$13.99", description: "Two cheese-stuffed poblano peppers" },
                { name: "Fajitas Plate", price: "$15.99", description: "Choice of meat with grilled peppers & onions" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <span className="text-orange-600 font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}