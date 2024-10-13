import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"; // Assuming Navbar and Hero are siblings
import OrangeHeroimg from "../assets/images/Orange-round.png";
import BananaHeroimg from "../assets/images/Banana-round.png";
import GuavaHeroimg from "../assets/images/Guava-round.png";

// Hero Component
function Hero() {


  //Carousual slides array of objects
  const slides = [
    {
      img: OrangeHeroimg,
      title: "ORANGE VALENCIA",
      description:
        "The natural sugars provide a quick energy boost, and it's also packed with antioxidants that can reduce inflammation. Plus, its folate content supports healthy cell growth and function. A sunny delight for your body!",
      bgColor: "bg-orange-200", // Background color for this slide
      textColor: "text-orange-800"
    },
    {
      img: BananaHeroimg,
      title: "BANANA DELIGHT",
      description:
        "Packed with essential nutrients, bananas are great for digestion and provide a natural source of energy. Its potassium content helps maintain healthy heart function. A delicious snack or smoothie base!",
      bgColor: "bg-yellow-200", // Background color for this slide
      textColor: "text-yellow-800"
    },
    {
      img: GuavaHeroimg,
      title: "GUAVA GOODNESS",
      description:
        "Guavas are loaded with dietary fiber, vitamin C, and antioxidants that benefit the skin, heart, and immune system. A tropical treasure for boosting health and vitality!",
      bgColor: "bg-green-200", // Background color for this slide
      textColor: "text-green-800"
    },
  ];




  const [currentSlide, setCurrentSlide] = useState(0);




  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);




  //Appearence
  return (
    
    <div className="relative ">
    
      {/*Props--- Pass the current background color to the Navbar  */}
      <Navbar bgColor={slides[currentSlide].bgColor} />



      {slides.map((slide, index) => (
        <div key={index} className={`flex flex-col md:flex-row justify-around items-center transition-opacity duration-1000 md:h-screen h-[70vh] px-4 sm:px-8 ${slide.bgColor}  ${
            index === currentSlide ? "opacity-100" : "opacity-0 absolute"
          }`}
        >
          <div className="w-full md:w-auto">
            <img
              className="w-2/3 mx-auto md:w-auto"
              src={slide.img}
              alt={slide.title}
            />
          </div>
          <div className="md:text-left p-4 w-full md:w-1/2 mt-6 md:mt-0">
            <h1 className={`text-3xl md:text-4xl font-extrabold ${slide.textColor}`}>
              {slide.title}
            </h1>
            <p className="w-full md:w-3/4 mt-4 text-left text-sm md:text-lg font-semibold leading-relaxed">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

       {/* Navigation Dots */}
       <div className="absolute bottom-[40%] left-1/2 md:bottom-[30%] md:left-[48%] transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-[#090807]" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
  
    </div>
  );
}

export default Hero;
