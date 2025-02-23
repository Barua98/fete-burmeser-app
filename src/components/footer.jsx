import { motion } from "framer-motion";
import instagram from "../assets/instgram-icon.svg";
import facebook from "../assets/facebook-icon.webp";
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-10 fixed bottom-0 w-full">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            
            <h2 className="text-lg font-bold mb-4 md:mb-0">Den Fete Burmeser</h2>
    
            <ul className="flex space-x-6 text-sm">
              <li><a href="#menu" className="hover:text-white">Menu</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://www.facebook.com/denfeteburmeser">
                <img src={facebook} alt="Facebook" className="w-10 h-10"/>
              </a>
              <a href="https://www.instagram.com/denfeteburmeser?igsh=NGwwZDRmeDZ6ajBl">
                <img src={instagram} alt="Instagram" className="w-10 h-10"/>
              </a>
            </div>
    
          </div>
        </footer>
      );
    };
    
    export default Footer;