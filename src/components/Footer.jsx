// Footer Component
function Footer() {
    return (
      <div className="bg-[#251B37] text-white py-16 md:py-20 px-[10%] flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg text-center md:text-left font-semibold leading-relaxed mb-6 md:mb-0">
            <h1 className="text-4xl font-extrabold text-yellow-200 mb-6 md:mb-0">Juzee</h1>
            <ul >
                <li className="hover:underline cursor-pointer">Home</li>
                <li className="hover:underline cursor-pointer">Products</li>
                <li className="hover:underline cursor-pointer">Catalog</li>
                <li className="hover:underline cursor-pointer">Contacts</li>
            </ul>
        </div>
      
        <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://facebook.com" className="hover:underline">Facebook</a>
            <a href="https://twitter.com" className="hover:underline">Twitter</a>
            <a href="https://instagram.com" className="hover:underline">Instagram</a>
          </div>
       
        <div className="flex flex-col md:flex-row justify-between items-center">
         
          <div className="text-center md:text-right">
            <p className="mb-2">1234 Juice St, Fruitville, FL 12345</p>
            <p className="ml-2 mb-2">Phone: (123) 456-7890</p>
            <p>Email: contact@juzee.com</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;
  