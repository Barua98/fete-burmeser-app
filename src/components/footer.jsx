import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MenuBildeTest1 from "../assets/hero.png";
import MenuBildeTest2 from "../assets/lage-mat.jpg";
import MenuBildeTest3 from "../assets/Fete-Burmeser-logo.png";

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [customRequest, setCustomRequest] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const cateringMenu = [
    { 
      name: "Liten Catering (10 personer)", 
      price: "1299 kr", 
      description: "Perfekt for små samlinger med en god miks av burmesiske spesialiteter.", 
      image: MenuBildeTest1
    },
    { 
      name: "Medium Event (30 personer)", 
      price: "3499 kr", 
      description: "Ideell for større feiringer, med en full burmesisk festmeny.", 
      image: MenuBildeTest2
    },
    { 
      name: "Stor Catering (50 personer)", 
      price: "5999 kr", 
      description: "En storslått cateringpakke med et bredt utvalg av retter.", 
      image: MenuBildeTest3
    },
  ];

  return (
    <>
      {/* 🔥 Gray Overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}  
            exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeOut" } }} 
            onClick={(e) => {
              e.preventDefault();
              setShowContent(false);
              setTimeout(() => setIsExpanded(false), 500);
            }}
          />
        )}
      </AnimatePresence>

      {/* 🔥 Footer Section */}
      <motion.footer
        className="fixed bottom-0 left-0 w-full bg-[#B05C40] text-gray-300 z-50"
        initial={false}
        animate={{ height: isExpanded ? "80vh" : "auto" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onAnimationComplete={() => setShowContent(isExpanded)}
      >
        <div className="container mx-auto py-4 px-4 flex flex-col sm:flex-row justify-between items-center h-auto sm:h-16">
          {/* Footer Title */}
          <h2 className="text-lg font-bold">DEN FETE BURMESER</h2>

          {/* Footer Links */}
          <ul className="flex space-x-6 text-sm items-center">
            <li><a href="#menu" className="hover:text-white">MENY</a></li>
            <li><a href="#about" className="hover:text-white">OM OSS</a></li>
            <li><a href="#contact" className="hover:text-white">KONTAKT</a></li>
            <li>
              <button 
                className="bg-red-500 text-white px-4 py-2 sm:px-3 sm:py-1 h-10 rounded hover:bg-red-600 transition flex items-center justify-center text-sm"
                onClick={() => {
                  if (isExpanded) {
                    setShowContent(false);
                    setTimeout(() => setIsExpanded(false), 500);
                  } else {
                    setIsExpanded(true);
                    setTimeout(() => setShowContent(true), 400); // ✅ Delay to prevent flickering
                    setSelectedItem(null);
                  }
                }}
              >
                {isExpanded ? "EXIT" : "CATERING"}
              </button>
            </li>
          </ul>
        </div>

        {/* 🔥 Expanding Section */}
        <AnimatePresence mode="wait">
          {isExpanded && showContent && (
            <motion.div
              className="p-6 bg-gray-800 rounded-lg shadow-lg max-w-5xl mx-auto overflow-y-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20, transition: { duration: 0.4 } }}
              style={{ maxHeight: "70vh" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Catering Menu */}
                <div className="text-white">
                  <h2 className="text-xl font-bold mb-4">CATERING MENY</h2>
                  <ul className="space-y-3">
                    {cateringMenu.map((item, index) => (
                      <motion.li 
                        key={index} 
                        className={`border p-3 rounded cursor-pointer transition 
                          ${selectedItem?.name === item.name ? "bg-red-500 text-white scale-105" : "bg-gray-700 hover:bg-gray-600"}`}
                        onClick={() => setSelectedItem(selectedItem?.name === item.name ? null : item)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="font-semibold">{item.name}</span> - {item.price}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Show Selected Item (Image + Description) */}
                  {selectedItem && (
                    <motion.div 
                      className="mt-6 p-4 bg-gray-700 rounded-lg text-white"
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: 10, transition: { duration: 0.4 } }} 
                    >
                      <h3 className="text-lg font-bold">{selectedItem.name}</h3>
                      <p className="text-sm">{selectedItem.description}</p>
                      <img 
                        src={selectedItem.image} 
                        alt={selectedItem.name} 
                        className="w-full h-80 object-cover rounded-lg mt-2"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Order Form */}
                <div className="w-full max-w-sm mx-auto">
                  <h2 className="text-xl font-bold text-white mb-2 sm:text-lg">INFORMASJON</h2>
                  <form className="space-y-3 sm:space-y-2">
                    <input type="text" placeholder="DITT NAVN" className="w-full border p-2 sm:p-1 rounded text-black text-sm" />
                    <input type="tel" placeholder="TELEFON NUMMER" className="w-full border p-2 sm:p-1 rounded text-black text-sm" />
                    <input type="text" placeholder="LEVERINGSSTED" className="w-full border p-2 sm:p-1 rounded text-black text-sm" />

                    {/* Date Picker */}
                    <DatePicker 
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Velg leveringsdato"
                      className="w-full border p-2 sm:p-1 rounded text-black text-sm"
                      wrapperClassName="w-full"
                    />

                    {/* Checkbox for Extra Request */}
                    <label className="flex items-center space-x-2 text-white text-sm">
                      <input type="checkbox" className="w-4 h-4" onChange={(e) => setCustomRequest(e.target.checked)} />
                      <span>Noe ekstra å tilføye?</span>
                    </label>

                    {customRequest && (
                      <motion.textarea className="w-full border p-2 rounded text-black text-sm h-24 resize-none" 
                        placeholder="Skriv din forespørsel her..." 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                    )}
                    <button 
                      type="button" // ✅ Prevents form from auto-submitting
                      className="bg-red-500 text-white px-4 py-2 sm:px-3 sm:py-1 rounded w-full hover:bg-red-600 text-sm"
                      onClick={(e) => {
                        e.preventDefault(); // ✅ Prevents page refresh
                        setShowContent(false); // ✅ Hides form content
                        setTimeout(() => setIsExpanded(false), 500); // ✅ Collapses smoothly
                      }}
                    >
                      Send forespørsel
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.footer>
    </>
  );
};

export default Footer;
