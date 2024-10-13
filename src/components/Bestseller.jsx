import alpanzoImage from "../assets/images/Alpanzo.jpg"
import GrapefruitImage from "../assets/images/Grapefruit.jpg"
import PineappleImage from "../assets/images/Pineapple.jpg";
import GuavachilliImage from "../assets/images/Guava-chilli.jpg"

//Bestseller component
function Bestseller() {
    return (
        <div className="p-4 md:p-10">
            <h1 className="text-2xl md:text-3xl font-bold text-center">Best Sellers</h1>
            <div className="flex flex-wrap md:flex-row justify-center md:justify-evenly py-6 md:py-14">
                {/* item-1 */}
                <div className="w-1/2 md:w-[20%] p-4 hover:shadow-xl transform hover:-translate-y-2">
                    <img src={alpanzoImage} alt="Alpanzo" />
                    <h1 className=" md:text-2xl mt-2 font-bold text-center">Alpanzo Mango</h1>
                    <p className="text-sm font-semibold text-center mt-2">50+ Orders per day</p>
                    <h2 className="text-lg md:text-xl py-2 text-center font-semibold">&#x20B9; 120</h2>
                </div>
                {/* item-2 */}
                <div className="w-1/2 md:w-[20%] p-4 hover:shadow-xl transform hover:-translate-y-2">
                    <img src={GrapefruitImage} alt="GrapeFruit" />
                    <h1 className=" md:text-2xl mt-2 font-bold text-center">GrapeFruit</h1>
                    <p className="text-sm font-semibold text-center mt-2">20+ Orders per day</p>
                    <h2 className="text-lg md:text-xl py-2 text-center font-semibold">&#x20B9; 150</h2>
                    
                </div>
                {/* item-3 */}
                <div className="w-1/2 md:w-[20%] p-4 hover:shadow-xl transform hover:-translate-y-2">
                    <img src={PineappleImage} alt="Pineapple" />
                    <h1 className=" md:text-2xl mt-2 font-bold text-center">Pineapple</h1>
                    <p className="text-sm font-semibold text-center mt-2">10+ Orders per day</p>
                    <h2 className="text-lg md:text-xl py-2 text-center font-semibold">&#x20B9; 100</h2>
                    
                </div>
                {/* item-4 */}
                <div className="w-1/2 md:w-[20%] p-4 hover:shadow-xl transform hover:-translate-y-2">
                    <img src={GuavachilliImage} alt="Guavachilli" />
                    <h1 className=" md:text-2xl mt-2 font-bold text-center">GuavaChilli</h1>
                    <p className="text-sm font-semibold text-center mt-2">5+ Orders per day</p>
                    <h2 className="text-lg md:text-xl py-2 text-center font-semibold">&#x20B9; 80</h2>
                   
                </div>
            </div>
        </div>
    )
}

export default Bestseller
