import { useState } from "react";

// Import images
import J1_BananaHoney from "../assets/images/BananaHoney.png";
import J2_Berry from "../assets/images/Berry.png";
import J3_Chocomint from "../assets/images/Chocomint.png";
import J4_Coconutwater from "../assets/images/Coconutwater.png";
import J5_CoffeeAlmond from "../assets/images/Coffee-Almond.png";
import J6_Coldcoffee from "../assets/images/Coldcoffee.png";
import J7_Guava from "../assets/images/Guava.png";
import J8_lean from "../assets/images/lean-citrus.png";
import J9_Lemonade from "../assets/images/Lemonade.png";
import J10_Mixedfruit from "../assets/images/Mixedfruit.png";
import J11_Sugarcane from "../assets/images/Sugercane.png";
import J12_Orange from "../assets/images/Orange.png";

function Catalog() {
  // All drinks array of objects
  const allProducts = [
    { id: 1, img: J1_BananaHoney, title: "BananaHoney", price: 60, category: "Shakes" },
    { id: 2, img: J2_Berry, title: "BerryBlast", price: 80, category: "Juices" },
    { id: 3, img: J3_Chocomint, title: "ChocoMint", price: 100, category: "Shakes" },
    { id: 4, img: J4_Coconutwater, title: "CoconutWater", price: 50, category: "Water" },
    { id: 5, img: J5_CoffeeAlmond, title: "CoffeeAlmond", price: 80, category: "Shakes" },
    { id: 6, img: J6_Coldcoffee, title: "ColdCoffee", price: 120, category: "Coffee" },
    { id: 7, img: J7_Guava, title: "Guava", price: 60, category: "Juices" },
    { id: 8, img: J8_lean, title: "LeanCitrus", price: 120, category: "Juices" },
    { id: 9, img: J9_Lemonade, title: "Lemonade", price: 140, category: "Juices" },
    { id: 10, img: J10_Mixedfruit, title: "MixedFruit", price: 100, category: "Juices" },
    { id: 11, img: J11_Sugarcane, title: "Sugercane", price: 120, category: "Juices" },
    { id: 12, img: J12_Orange, title: "Orange", price: 70, category: "Juices" },
  ];

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtered products based on selected category
  // const filteredProducts =
  //   selectedCategory === "All" ? allProducts: allProducts.filter((product) => product.category === selectedCategory);

//simple code
// Function to filter products based on selected category
const getFilteredProducts = (category) => {
  if (category === "All") {
    return allProducts;
  }
  return allProducts.filter((product) => product.category === category);
};

// Use the function to get the filtered products
const filteredProducts = getFilteredProducts(selectedCategory);


    

  // Function to handle category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-center">Catalog</h1>
      {/* Category Filter */}
      <div className="flex justify-center py-10">
        <div className="flex  flex-wrap justify-center gap-2 text-sm md:text-lg font-semibold">
          <button onClick={() => handleCategoryClick("All")}
            className={`px-4 py-2 rounded ${
              selectedCategory === "All" ? "bg-[#73EC8B]" : "bg-gray-200"
            }`}
            
          >
            All
          </button>
          <button onClick={() => handleCategoryClick("Juices")}
            className={`px-4 py-2 rounded ${
              selectedCategory === "Juices" ? "bg-[#73EC8B]" : "bg-gray-200"
            }`}
            
          >
            Juices
          </button>
          <button  onClick={() => handleCategoryClick("Shakes")}
            className={`px-4 py-2 rounded ${
              selectedCategory === "Shakes" ? "bg-[#73EC8B]" : "bg-gray-200"
            }`}
           
          >
            Shakes
          </button>
          <button onClick={() => handleCategoryClick("Water")}
            className={`px-4 py-2 rounded ${
              selectedCategory === "Water" ? "bg-[#73EC8B]" : "bg-gray-200"
            }`}
            
          >
            Water
          </button>
          <button onClick={() => handleCategoryClick("Coffee")}
            className={`px-4 py-2 rounded ${
              selectedCategory === "Coffee" ? "bg-[#73EC8B]" : "bg-gray-200"
            }`}
          >
            Coffee
          </button>
        </div>
      </div>

      {/* Products Display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-[10%] my-5">
        {filteredProducts.map((item) => (
          <div key={item.id} className="py-4 hover:shadow-2xl border-none hover:rounded-md transform hover:translate-y-2">
            <img className="" src={item.img} alt={item.title} />
            <h1 className="text-center font-semibold">{item.title}</h1>
            <p className="text-center">&#x20B9;{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
