

function Contact(){



    return(
        <div className="w-full flex flex-col text-center px-[10%] md:px-[20%] md:py-20 py-10 bg-slate-200">
            <h1 className="text-3xl md:mb-16 mb-6 font-semibold">Queries</h1>
            <div className="bg-[#180161] text-white w-full flex flex-col items-center py-10 border-none rounded-md">
                <h1 className="text-white text-xl py-6 md:text-3xl md:py-10 font-semibold">Contact us</h1>
                <input className="w-3/4 md:w-1/2 py-2 text-center text-black outline-none border-none rounded-sm " type="text" placeholder="Your Name" />
                <input className="w-3/4 md:w-1/2 mt-6 py-2 text-center text-black outline-none border-none rounded-sm " type="eamil" placeholder="Your Email" />
                <textarea className="w-3/4 md:w-1/2 py-2 mt-6 text-center text-black outline-none border-none rounded-sm" placeholder="Your Message"></textarea>
                <input className="bg-white text-black px-4 py-2 font-semibold mt-6" type="submit" />
            </div>


        </div>
    )
}

export default Contact