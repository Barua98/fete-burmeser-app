import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const menu = {
  snacks: [
    { name: "BFC BURMESE FRIED CHICKEN", price: 139, description: "Classic crispy fried chiken flavored with our ownhouseblend of spices. Tamaring and coriander dip sauce.", allergens: "Wheat, gluten, fish sauce" },
    { name: "PHET THOKE", price: 89, description: "Deep fried crispy pastry with a pork and onion-filling. A delicious Burmese-style street food classic.", allergens: "Gluten" },
    { name: "Baya Kyaw", price: 89, description: "Yellow split peas fritters with curry leaves, ginger and garlic. Served with sour tamarind dip sauce.", allergens: "Soya, egg" },
    { name: "Samosa (VEGAN)", price: 89, description: "Deep fried crispy pastry with a richly spiced potato and onion-filling. A delicious Burmese-style street food classic.", allergens: "Gluten" },
  ],
  noodles: [
    { name: "OHN NO KHAO SWÈ - CHICKEN", price: 209, description: "Noodlesoup with egg noodles in a rich coconut broth flavored with a blend of spices. Topped with tender chicken, hard-boiled egg,coriander, red onions and chilli flakes.", allergens: "Shellfish & egg" },
    { name: "OHN NO KHAO SWÈ - VEGAN", price: 209, description: "Noodlesoup with egg noodles in a rich coconut broth flavored witha blend of spices. Topped with tofu, coriander, red onions and chilliflakes.", allergens: "None" },
    { name: "NAN GYI THOKE - CHICKEN", price: 219, description: "Creamy and savoury udon noodles with chili and garlic oil, topped with tender chicken,coriander and red onion", allergens: "Fish, gluten" },
    { name: "NAN GYI THOKE - MUSHROOM", price: 219, description: "Creamy and savoury udon noodles with chili and garlic oil, topped with oyster mushroom,coriander and red onion.", allergens: "Soy, gluten, fish sauce" },
    { name: "SI CHET KHAO SWÈ - VEGEN", price: 209, description: "Burmese soy sauce & garlic oil noodles with fried tofu and crispy golden garlic flakes. Topped woth black pepper and green onions.", allergens: "Soy, gluten" },
    { name: "SI CHET KHAO SWÈ - MUSHROOM", price: 209, description: "Burmese soy sauce & garlic oil noodles with roasted pork belly and crispy golden garlicflakes. Topped woth black pepper and greenonions.Allergens: gluten", allergens: "Soy, gluten"},
  ],
  rice: [
    { name: "PALATHA - CHICKEN", price: 209, description: "Flaky croissant-pancakes with aubergine curry with spices such as cinnamon and garam masala, Served with rice and salad.", allergens: "Gluten, fish sauce" },
    { name: "PALATHA (VEGAN)", price: 209, description: "Flaky croissant-pancakes with aubergine curry with spices such as cinnamon and garam masala, Served with rice an dsalad", allergens: "Gluten" },
    { name: "AMÈ HNAT - Beef curry", price: 229, description: "Braised sirloin in an aromatic curry sauce made from sauteed shallots, garlic, turmeric, chili & ginger. Pearl potatoes from local farms. Served with steamed rice and cucumber salad.", allergens: "Soy, mustard, fish sauce" },
    { name: "KHAYAN THEE HNAT - AUBERGINE CURRY", price: 229, description: "Braised aubergine in an aromatic curry sauce made from sauteed shallots, garlic, turmeric, chili & ginger, . Pearl potatoes from local farms. Served with steamed rice and cucumber salad.", allergens: "Soy, mustard" },
  ]
};

const Footer = ({ isExpanded, setIsExpanded, showContent, setShowContent }) => {
  const [activeTab, setActiveTab] = useState("snacks");
  const [selectedItems, setSelectedItems] = useState([]);

  const emptyAll = () => setSelectedItems([]);

  const addItemToSelection = (item) => {
    const existingItem = selectedItems.find(i => i.name === item.name);
    if (existingItem) {
      setSelectedItems(prevItems => prevItems.map(i => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      setSelectedItems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItemFromSelection = (item) => {
    setSelectedItems(prevItems =>
      prevItems
        .map(i => i.name === item.name ? { ...i, quantity: i.quantity - 1 } : i)
        .filter(i => i.quantity > 0)
    );
  };

  const calculateTotalPrice = () => selectedItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const renderMenuItems = () => {
    return menu[activeTab].map((item, index) => (
      <motion.li
        key={index}
        className={`border p-3 rounded cursor-pointer transition bg-[#6D3A27] hover:bg-[#D99673] text-white`}
        onClick={() => addItemToSelection(item)}
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="font-semibold">{item.name}</span> - {item.price} kr
        <p className="text-xs text-[#F5E9E2]">{item.description}</p>
        <p className="text-xs font-bold text-[#F5E9E2]">Allergens: {item.allergens}</p>
      </motion.li>
    ));
  };

  const updateItemQuantity = (item, newQuantity) => {
    if (isNaN(newQuantity) || newQuantity < 0) return; 
  
    if (newQuantity === 0) {
      setSelectedItems(prevItems => prevItems.filter(i => i.name !== item.name));
    } else {
      setSelectedItems(prevItems =>
        prevItems.map(i => i.name === item.name ? { ...i, quantity: newQuantity } : i)
      );
    }
  };

  const isValidSelection = () => selectedItems.length > 0 && selectedItems.every(item => item.quantity >= 5);


  const renderSelectedItems = () => {
    return selectedItems.map((item, index) => (
      <div key={index} className="flex justify-between items-center mb-2">
        <span>{item.name}</span>
  
        <div className="flex items-center space-x-2">
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => updateItemQuantity(item, parseInt(e.target.value))}
            className="w-14 text-center border border-[#D99673] bg-[#F5E9E2] text-black rounded"
          />
          {item.quantity < 5 && (
            <p className="text-red-400 text-xs">Min. 5 portions required</p>
          )}
          <button onClick={() => addItemToSelection(item)} className="px-2 bg-[#D99673] text-white rounded hover:bg-[#B05C40] transition">+</button>
          <button onClick={() => removeItemFromSelection(item)} className="px-2 bg-[#D99673] text-white rounded hover:bg-[#B05C40] transition">-</button>
        </div>
      </div>
    ));
  };

  return (
    <>
      {/* Gray Overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}  
            exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }} 
            onClick={() => {
              setShowContent(false);
              setTimeout(() => setIsExpanded(false), 500);
            }}
          />
        )}
      </AnimatePresence>
  
      {/* Footer Section */}
      <motion.footer
        className="fixed bottom-0 left-0 w-full bg-[#B05C40] text-[#F5E9E2] z-50"
        initial={false}
        animate={{ height: isExpanded ? "100vh" : "auto" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onAnimationComplete={() => setShowContent(isExpanded)}
      >
        <div className="container mx-auto py-4 px-4 flex flex-col sm:flex-row justify-between items-center h-auto sm:h-16">
          <h1>DEN FETE BURMESER</h1>
          <ul className="flex space-x-6 text-sm items-center">
            <li><a href="#menu" className="hover:text-white">MENY</a></li>
            <li><a href="#about" className="hover:text-white">OM OSS</a></li>
            <li>
              <button 
                className="bg-[#8A4A32] text-white px-4 py-2 sm:px-3 sm:py-1 h-10 rounded hover:bg-[#6D3A27] transition"
                onClick={() => {
                  if (isExpanded) {
                    setShowContent(false); 
                    setTimeout(() => setIsExpanded(false), 500);
                  } else {
                    setIsExpanded(true);
                    setTimeout(() => setShowContent(true), 400);
                  }
                }}
              >
                {isExpanded ? "EXIT" : "CATERING"}
              </button>
            </li>
          </ul>
        </div>
  
        {/* Expanded Content */}
        <AnimatePresence mode="wait">
          {isExpanded && showContent && (
            <motion.div 
              className="p-6 bg-[#8A4A32] rounded-lg shadow-lg max-w-6xl mx-auto overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20, transition: { duration: 0.4 } }}
              style={{ maxHeight: "90vh" }}
            >
              {/* Information */}
              <div className="text-white mb-6 md:col-span-2">
                <h2 className="text-xl font-bold mb-4">Informasjon</h2>
                <div className="bg-[#6D3A27] p-4 rounded-lg text-sm space-y-4">
                  <h3 className="font-semibold">Levering</h3>
                  <p>
                    Alle rettene må bestilles i minimum fem porsjoner, og prisene er per porsjon/person. 
                    Leveringstillegg er på 300,- ink moms innenfor Oslo ring 3. 
                    Maten leveres i større catering/varmebokser, og vi legger med alt av nødvendig engangsservise/bestikk av resirkulerbart bambus/papp uten ekstra kostnader. Rettene er mer eller mindre spiseklare/serveringsklare ved ankomst.
                  </p>
                </div>
              </div>
  
              {/* Menu */}
              <div className="text-white overflow-y-auto max-h-[50vh] sm:max-h-[60vh] scrollbar-thin scrollbar-thumb-[#D99673] overflow-x-hidden">
              <h2 className="text-xl font-bold mb-4 ">Menu</h2>
                <div className="flex justify-center space-x-4 mb-4">
                  <button className={`px-4 py-2 rounded hover:bg-[#B05C40] transition ${activeTab === "snacks" ? "bg-[#D99673]" : "bg-[#6D3A27]"}`} onClick={() => setActiveTab("snacks")}>Snacks</button>
                  <button className={`px-4 py-2 rounded hover:bg-[#B05C40] transition ${activeTab === "noodles" ? "bg-[#D99673]" : "bg-[#6D3A27]"}`} onClick={() => setActiveTab("noodles")}>Noodles</button>
                  <button className={`px-4 py-2 rounded hover:bg-[#B05C40] transition ${activeTab === "rice" ? "bg-[#D99673]" : "bg-[#6D3A27]"}`} onClick={() => setActiveTab("rice")}>Rice</button>
                </div>
                <ul className="space-y-3">{renderMenuItems()}</ul>
              </div>
  
              {/* Your Selection */}
              <div className="text-white overflow-y-auto max-h-[50vh] sm:max-h-[60vh] scrollbar-thin scrollbar-thumb-[#D99673] overflow-x-hidden">
                <h2 className="text-xl font-bold mb-4">Your Selection</h2>
                {renderSelectedItems()}
                <div className="mt-4 flex justify-between items-center">
                  <p className="font-semibold">Total: {calculateTotalPrice()} kr</p>
                  <button onClick={emptyAll} className="px-4 py-2 bg-[#D99673] text-white rounded hover:bg-[#B05C40] transition">
                  <FontAwesomeIcon icon={faTrash} size="lg" />
                  </button>
                </div>
                <div className="mt-4">
                  <button 
                    className={`w-full px-6 py-2 rounded transition ${isValidSelection() ? "bg-[#D99673] text-white hover:bg-[#B05C40]" : "bg-gray-500 text-gray-300 cursor-not-allowed"}`}
                    onClick={() => console.log("Go to next step!")} 
                  >
                    Next Step
                  </button>
                  {!isValidSelection() && selectedItems.length > 0 && (
                      <p className="text-red-400 text-center mt-2">Each dish must have at least 5 portions!</p>
                  )}
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
