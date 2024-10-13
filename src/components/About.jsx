import { useState } from "react";
import energyAll from "../assets/images/energyAll.jpg";
import energyApple from "../assets/images/energyApple.jpg";

function About() {
  // Array of images
  const images = [energyAll, energyApple];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle image change
  function handleClick() {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  return (
    <div className="bg-[#FFDFD6] py-10">
    <h1 className="text-2xl text-center font-bold">Why Juzee</h1>
  
    <div className="flex flex-wrap md:justify-around md:items-center gap-6 p-10">
      <div className="w-full md:w-1/2">
        <h1 className="text-xl md:text-3xl font-bold">Discover the Essence of Nature !</h1>
        <p className="md:w-3/4 mt-6 md:text-lg font-semibold md:font-normal">
          At Juzee, we’re passionate about bringing the finest, freshest fruit
          juices straight from the orchard to your glass. Each sip contains
          natural flavours that invigorate your senses and nourish your body.
        </p>
        <p className="md:w-3/4 mt-6 md:text-lg font-semibold md:font-normal">
          Quench your thirst with our perfectly crafted blends that offer a
          tantalizing taste of nature’s goodness. Our juices are made from
          handpicked fruits, ensuring the highest quality in every drop.
        </p>
      </div>
      <div className="w-[400px] h-1/2 flex flex-col items-center">
        {/* Display the current image */}
        <img className="border-none rounded-md" src={images[currentImageIndex]} alt="current juice" />
        {/* Single button to change the image */}
        <button className="text-center py-2 px-4 bg-black text-white mt-4" onClick={handleClick}>
          Click me
        </button>
      </div>
    </div>
    </div>
  );
}

export default About;
