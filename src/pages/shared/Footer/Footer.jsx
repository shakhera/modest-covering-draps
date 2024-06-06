import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Footer Links and Information */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2">
                  <a href="/" className="hover:text-gray-400">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/shop" className="hover:text-gray-400">
                    Shop
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/about" className="hover:text-gray-400">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/contact" className="hover:text-gray-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">1234 Street Name, City, State, 12345</p>
              <p className="mb-2">Email: info@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>

            {/* Column 3: Social Media */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <h2 className="text-3xl font-extrabold mb-4">
                Join Our AllureMarketplace
              </h2>
              <p className="mb-8">
                Stay updated with the latest offers and products
              </p>
              <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
