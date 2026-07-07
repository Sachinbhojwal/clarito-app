import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500">
              Clarito
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed max-w-sm mx-auto sm:mx-0">
              Trusted home services platform for Cleaning, Electrician, Plumber,
              Carpenter and AC Repair.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center sm:justify-start gap-3 sm:gap-4 mt-6">

              {[
                FaFacebookF,
                FaInstagram,
                FaTwitter,
                FaLinkedinIn,
              ].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-yellow-500 transition"
                >
                  <Icon size={16} />
                </a>
              ))}

            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4">
              Services
            </h3>

            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
              {["Cleaning", "Electrician", "Plumber", "Carpenter", "AC Repair"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-yellow-500 cursor-pointer transition"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-yellow-500 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4">
              Contact
            </h3>

            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
              <li>📧 support@clarito.com</li>
              <li>📞 +91 9876543210</li>
              <li>📍 Surat, Gujarat, India</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-6 text-center text-gray-500 text-xs sm:text-sm">
          © {new Date().getFullYear()} Clarito. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;