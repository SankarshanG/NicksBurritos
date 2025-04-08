import React from 'react';

interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
  description?: string;
}

const menuData: MenuSection[] = [
  {
    title: "BREAKFAST",
    items: [
      {
        name: "BREAKFAST BURRITO",
        price: "$9.95",
        description: "Eggs, chorizo, Bacon, Potatoes & Cheese"
      },
      {
        name: "VEGGIE BURRITO",
        price: "$8.95",
        description: "Eggs, Potatoes & Cheese"
      },
      {
        name: "MACHACHA",
        price: "$9.95",
        description: "Roasted Beef Sauteed with Eggs, Tomatoes, Jalapenos, Onion & Cheese"
      },
      {
        name: "AMERICANO BURRITO",
        price: "$9.95",
        description: "Eggs, Bacon, Ham, Potatoes & Cheese"
      },
      {
        name: "ITALIANO BURRITO",
        price: "$9.95",
        description: "Italian Sausage, Eggs, Potatoes & Cheese"
      },
      {
        name: "BREAKFAST SANDWICH",
        price: "$10.95",
        description: "5 Strips of Bacon or 1/4 lb of Ham, Mayo, Lettuce, Tomato on your choice of Bread."
      },
      {
        name: "BREAKFAST PLATE",
        price: "$12.95",
        description: "2 Eggs Any Style with Pan Fried Potatoes, your choice of Bacon, Ham, or Sausage & Toast (No Meat: $9.95)"
      }
    ]
  },
  {
    title: "SPECIAL BURRITOS",
    items: [
      {
        name: "HARDY VEGETABLE BURRITO",
        price: "$11.95",
        description: "Egg Whites, Broccoli, Tomato, Onion, Bell Pepper, Spinach Mushrooms, Mozzarella Cheese, Potatoes, On Wheat tortilla (Ask for Regular Tortillas if you want). With Avocado: $12.95"
      },
      {
        name: "GREEN PORK BURRITO",
        price: "$12.95",
        description: "With Beans and Rice (make it a wet burrito)"
      },
      {
        name: "HUEVO RANCHERO (CHINO SPECIAL)",
        price: "$13.95",
        description: "Old fashioned style, served on one tortilla (corn or flour) with our special Ranchero Sauce. With Beans and Rice, topped with Sour Cream and Guacamole"
      }
    ]
  },
  {
    title: "OMLETE'S",
    description: "With pan fried potatoes & toast (wheat, rye, or sourdough)",
    items: [
      {
        name: "DENVER OMLETE",
        price: "$12.95"
      },
      {
        name: "BACON AVACADO OMLETE",
        price: "$12.95"
      },
      {
        name: "CHILI CHEESE OMLETE",
        price: "$12.95"
      },
      {
        name: "CHEESE OMLETE",
        price: "$9.95"
      },
      {
        name: "FRENCH TOAST",
        price: "$9.99"
      }
    ]
  },
  {
    title: "SIDE ORDERS",
    items: [
      { name: "BACON (4)", price: "$5.95" },
      { name: "HAM", price: "$5.95" },
      { name: "ITALIAN SAUSAGE", price: "$5.95" },
      { name: "PAN-FRIED POTATOES", price: "$3.50" },
      { name: "SLICED AVACADO", price: "$3.50" },
      { name: "SLICED TOMATOES", price: "$3.00" },
      { name: "SOUR CREAM", price: "$1.75" },
      { name: "TOAST", price: "$3.50" },
      { name: "BAGEL & BUTTER", price: "$2.50" },
      { name: "BAGEL & CREAM CHEESE", price: "$3.75" }
    ]
  },
  {
    title: "SANDWICHES - THE CLASSIC",
    items: [
      { name: "GRILLED CHEESE", price: "$5.95" },
      { name: "ALBACORE TUNA", price: "$11.95" },
      { name: "HAM & SWISS", price: "$10.50" },
      { name: "BLACK FOREST HAM", price: "$10.95" },
      { name: "ROAST BEEF", price: "$10.50" },
      { name: "BACON & AVO", price: "$10.95" },
      { name: "TURKEY BREAST", price: "$10.50" },
      { name: "BLT 5 STRIP BACON", price: "$9.50" },
      { name: "EGG SALAD", price: "$9.95" },
      { name: "CHICKEN SALAD", price: "$11.95" }
    ]
  },
  {
    title: "THE FAVORITES",
    items: [
      {
        name: "ALBACORE MELT",
        price: "$12.95",
        description: "Albacore Tuna Served Hot with Melted Cheddar Cheese, Sprouts, Tomatoes, Mayo, Pickles on Grilled Bread."
      },
      {
        name: "THE VEGGIE",
        price: "$9.95",
        description: "Choice of two Cheeses, Avocado, Sprouts, Mayo, Tomatoes, and Pickle."
      },
      {
        name: "SUB",
        price: "$9.95",
        description: "Salami, Cappacolla, Mortadella and Provolone with Italian Dressing, Lettuce, Pepperoncini and Tomatoes on a roll."
      },
      {
        name: "CANADIAN LUMBERJACK",
        price: "$10.95",
        description: "Canadian style Bacon served hot with Melted Cheddar cheese Mayo, Lettuce, and Tomato on Sour Dough Toast."
      },
      {
        name: "MEATBALL SUB",
        price: "$9.95",
        description: "Homemade Meatballs and our Special Sauce with Melted Mozzarella Cheese."
      },
      {
        name: "ITALIAN SAUSAGE SUB",
        price: "$9.95",
        description: "Two Large Link Sausage with our Special Tomato Sauce and Melted Mozzarella."
      },
      {
        name: "SALAMI & PROVOLONE",
        price: "$9.95",
        description: "Genoa Salami with Provolone Cheese, Lettuce, Tomatoes, Italian Dressing and Pepperoncini on a Roll."
      },
      {
        name: "COPPACOLLA & PROVOLONE",
        price: "$9.95",
        description: "The Classic Hot Italian Ham with Provolone, Lettuce, Tomatoes and Italian Dressing on a Roll"
      },
      {
        name: "SAUSAGE & SWEET BELL PEPPER",
        price: "$9.95",
        description: "Two Italian Sausages with Sauteed Sweet Bell Peppers and Onions on a Roll."
      },
      {
        name: "RUBEN",
        price: "$13.95",
        description: "The Leanest Vienna Corned Beef with Melted Swiss Cheese, Sauerkraut, Mustard and Pickle on Rye Bread."
      },
      {
        name: "TURKEY BREAST PASTRAMI",
        price: "$12.95",
        description: "Honest to Goodness Best Breast of Turkey Seasoned like Pastrami Served hot with Mustard and Pickle of Rye Bread."
      },
      {
        name: "CALIFORNIA CLUB",
        price: "$13.95",
        description: "1/4th lb. of Turkey Breast, 5 Strips of Bacon, Avocado, Mayo, Lettuce, Tomato."
      },
      {
        name: "THE TRADITIONAL",
        price: "$13.95",
        description: "1/4th lb. of Turkey Breast 1/4th lb. of Ham, Swiss Cheese and Cheddar Cheese, Mayo, Lettuce and Tomatoes."
      },
      {
        name: "THE BBQ",
        price: "$13.95",
        description: "Your choice of 1/2 lb. Roast Beef or Ham, Swiss Cheese our Special BBQ Sauce on a Kaiser Roll."
      }
    ]
  },
  {
    title: "LITE & HEALTHY PLATE",
    description: "Choice of Albacore Tuna, All White Meat Chicken Salad, or Old Fashion Egg Salad on a Bed of Lettuce with Tomatoes Pickles and Red Onions.",
    items: [
      { name: "4 OZ", price: "$7.95" },
      { name: "8 OZ", price: "$10.95" }
    ]
  },
  {
    title: "THE GREENS",
    items: [
      { name: "CHEF SALAD", price: "$9.50" },
      { name: "COBB SALAD", price: "$9.50" },
      { name: "ANTIPASTA SALAD", price: "$9.50" },
      { name: "CEASER SALAD", price: "$7.95" },
      { name: "CHICKEN CEASER SALAD", price: "$10.95" },
      { name: "GREEN SALAD", price: "$6.95" }
    ]
  },
  {
    title: "HOT STUFF",
    items: [
      { name: "HOMEMADE SOUP OF THE DAY", price: "$5.50 / $7.99" },
      { name: "HOMEMADE CHILI BEANS", price: "$5.50" },
      { name: "CHICKEN WINGS (6)", price: "$8.99" },
      { name: "CHICKEN WINGS (10)", price: "$11.99" },
      { name: "CHICKEN FINGERS", price: "$8.99" },
      { name: "FRENCH FRIES", price: "$5.50" }
    ]
  },
  {
    title: "NICK'S MEXICAN KITCHEN",
    items: [
      { name: "CARNE ASADA BURRITO", price: "$12.95" },
      { name: "POLLO PICADO BURRITO", price: "$12.95" },
      { name: "CARNITAS BURRITO", price: "$12.95" },
      { name: "CHEESE QUESADILLA", price: "$5.95" },
      { name: "CHEESE QUESADILLA WITH CARNE ASADA", price: "$10.50" },
      { name: "SOFT TACO (2)", price: "$10.95/5.95", description: "Pollo, Carnitas, Asada" },
      { name: "OLD FASHION BEAN TOSTADA", price: "$8.50" },
      { name: "CHEESE CHIPS", price: "$4.95" },
      { name: "NICKS NACHOS", price: "$8.50" }
    ]
  }
];

const Menu: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-32">
      <div className="space-y-8 pt-8">
        {menuData.map((section, index) => (
          <div key={index} className={`bg-white rounded-lg shadow-lg p-6 ${index === 0 ? 'pt-10' : ''}`}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-200 pb-2">
              {section.title}
            </h2>
            {section.description && (
              <p className="text-gray-600 mb-4 italic">{section.description}</p>
            )}
            <div className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                    {item.description && (
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    )}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mt-2 sm:mt-0">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu; 