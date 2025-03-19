import React, { useEffect, useState } from "react";
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
  const [step, setStep]= useState(1);
  const [showNextButton, setShowNextButton] = useState(true);
  const [userInfo, setUserInfo] = useState(() => {
    const savedData = localStorage.getItem("userInfo");
    return savedData ? JSON.parse(savedData) : {
      name: "",
      phone: "",
      deliveryLocation: "",
      eventType: "",
      customEventType: "",
      guestCount: "",
      date: null,
      allergies: "",
      extraInfoChecked: false,
      extraInfo: "",
    };
  });
  const [selectedItems, setSelectedItems] = useState(() => {
    const savedItems = localStorage.getItem("selectedItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  
  useEffect(() => {
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
  }, [selectedItems]);
  
  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  useEffect(() => {
    if (isExpanded) {
      document.documentElement.style.overflowY = "hidden"; // Hide scrollbar immediately
    } else {
      document.documentElement.style.overflowY = "auto"; // Restore scroll when closing
    }
  
    return () => {
      document.documentElement.style.overflowY = "auto"; // Cleanup when unmounting
    };
  }, [isExpanded]);
  
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
    if (newQuantity === "" || isNaN(newQuantity)) {
      setSelectedItems(prevItems =>
        prevItems.map(i => i.name === item.name ? { ...i, quantity: "" } : i)
      );
      return;
    }
  
    const quantity = Math.max(1, newQuantity); 
  
    setSelectedItems(prevItems =>
      prevItems.map(i => i.name === item.name ? { ...i, quantity } : i)
    );
  };

  const isValidSelection = () => {
    return selectedItems.length > 0 && selectedItems.every(item => item.quantity >= 5);
  };

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
            onBlur={() => {
              if (item.quantity === "" || isNaN(item.quantity)) {
                updateItemQuantity(item, 1); 
              }
            }}
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
          className={`fixed bottom-0 left-0 w-full bg-[#B05C40] text-[#F5E9E2] z-50 
                      ${isExpanded ? 'overflow-y-auto' : 'overflow-hidden'} 
                      max-h-screen sm:overflow-hidden`}
          initial={false}
          animate={{ height: isExpanded ? "100vh" : "auto" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onAnimationComplete={() => setShowContent(isExpanded)}
        >
       <div className="container mx-auto py-4 px-4 flex flex-wrap items-center justify-center sm:justify-between w-full h-auto sm:h-16 gap-2">
        <h1>DEN FETE BURMESER</h1>
        
        {/* Hide buttons when footer is expanded */}
        {!isExpanded && (
          <ul className="flex space-x-6 text-sm items-cente ml-auto">
            <li><a href="#menu" className="hover:text-white">MENU</a></li>
            <li><a href="#about" className="hover:text-white">ABOUT</a></li>
          </ul>
        )}

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
      </div>
  
        <AnimatePresence mode="wait">
          {isExpanded && showContent && (
            <motion.div 
              className="p-6 bg-[#8A4A32] rounded-lg shadow-lg max-w-6xl mx-auto overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20, transition: { duration: 0.4 } }}
            >
              {/* Information */}
              <div className="text-black mb-6 md:col-span-2 bg-[#F5E9E2] p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Delivery Section */}
                <div>
                  <h3 className="font-semibold text-lg text-[#B05C40]">Delivery</h3>
                  <p className="text-gray-800 mt-2">
                  All dishes must be ordered in <span className="text-[#B05C40] font-semibold">a minimum of 5 portions per dish.</span> Prices are per person.
                  Delivery within Oslo ring 3 costs <span className="text-[#B05C40] font-semibold">300 kr incl. VAT.</span>
                  </p>
                  <p className="text-gray-800 mt-2">
                  The food is delivered in thermal boxes with <span className="text-[#B05C40] font-semibold">recyclable disposable tableware/cutlery</span> made of bamboo and cardboard at no extra cost.
                  </p>
                </div>

                {/* Payment Section */}
                <div>
                  <h3 className="font-semibold text-lg text-[#B05C40]">Payment</h3>
                  <p className="text-gray-800 mt-2">
                    You can pay with <span className="text-[#B05C40] font-semibold">card at the location.</span>
                  </p>
                </div>
              </div>
  
              {/* Menu */}
              {step === 1 && (
                    <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: 10 }} 
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
              <div>
              <div className="text-white overflow-y-auto h-[550px] sm:h-[60vh] scrollbar-thin scrollbar-thumb-[#D99673] overflow-x-hidden">
                <h2 className="text-xl font-bold mb-4 ">Menu</h2>
                  <div className="flex justify-center space-x-4 mb-4">
                    <button className={`px-4 py-2 rounded hover:bg-[#B05C40] transition ${activeTab === "snacks" ? "bg-[#D99673]" : "bg-[#6D3A27]"}`} onClick={() => setActiveTab("snacks")}>Snacks</button>
                    <button className={`px-4 py-2 rounded hover:bg-[#B05C40] transition ${activeTab === "noodles" ? "bg-[#D99673]" : "bg-[#6D3A27]"}`} onClick={() => setActiveTab("noodles")}>Noodles</button>
                    <button className={`px-4 py-2 rounded hover:bg-[#B05C40] transition ${activeTab === "rice" ? "bg-[#D99673]" : "bg-[#6D3A27]"}`} onClick={() => setActiveTab("rice")}>Rice</button>
                  </div>
                  <ul className="space-y-3">{renderMenuItems()}</ul>
                </div>
              </div>
                  </motion.div>
              )}
              {step === 2 && (
                 <motion.div 
                 initial={{ opacity: 0, y: 10 }} 
                 animate={{ opacity: 1, y: 0 }} 
                 exit={{ opacity: 0, y: 10 }} 
                 transition={{ duration: 0.3, ease: "easeInOut" }}
                 className="bg-[#6D3A27] p-6 rounded-lg shadow-lg text-white overflow-y-auto h-[60vh] scrollbar-thin scrollbar-thumb-[#D99673]"
               >
                 <h2 className="text-xl font-bold mb-4">Fill in information</h2>
               
                 <form className="space-y-4">
                   {/* Name */}
                   <input type="text" placeholder="Navn" value={userInfo.name} onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} className="w-full p-2 border rounded text-black" required />
               
                   {/* Phone Number */}
                   <input type="tel" placeholder="Telefonnummer" value={userInfo.phone} onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})} className="w-full p-2 border rounded text-black" required />
               
                   {/* Delivery Location */}
                   <input type="text" placeholder="Leveringssted" value={userInfo.deliveryLocation} onChange={(e)=> setUserInfo({...userInfo, deliveryLocation: e.target.value})} className="w-full p-2 border rounded text-black" required />
               
                   {/* Type of Event */}
                   <select 
                     className="w-full p-2 border rounded text-black"
                     value={userInfo.eventType} 
                     onChange={(e) => setUserInfo({...userInfo, eventType: e.target.value})}
                     required
                   >
                     <option value="" disabled>Choose type of event</option>
                     <option value="bursdag">Birthday</option>
                     <option value="bryllup">Wedding</option>
                     <option value="firmafest">Office party</option>
                     <option value="annet">Other</option>
                   </select>
               
                   {/* "Annet" (Other) Input Field - Only Show When Selected */}
                   {userInfo.eventType === "annet" && (
                     <input type="text" placeholder="Spesifiser type arrangement" value={userInfo.customEventType} onChange={(e) => setUserInfo({ ...userInfo, customEventType: e.target.value })}  className="w-full p-2 border rounded text-black" required />
                   )}
               
                  {/* Guests & Date (Side by Side) */}
                  <div className="flex space-x-4">
                    <input 
                      type="number" 
                      min="1" 
                      value={userInfo.guestCount}
                      onChange={(e) => setUserInfo({...userInfo, guestCount: e.target.value})}
                      placeholder="Antall gjester" 
                      className="w-1/2 p-2 border rounded text-black" 
                      required 
                    />
                    <div className="w-1/2">
                      <DatePicker 
                        selected={userInfo.date}
                        onChange={(date) => setUserInfo({...userInfo, date})}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Velg dato"
                        className="w-full p-2 border rounded text-black"
                        required
                        wrapperClassName="w-full"
                      />
                    </div>
                  </div>
                   <input type="text" placeholder="Allergier (valgfritt)" value={userInfo.allergies} onChange={(e) => setUserInfo({...userInfo, allergies: e.target.value})} className="w-full p-2 border rounded text-black" />
               
                   {/* Extra Information Checkbox */}
                   <label className="flex items-center space-x-2">
                     <input type="checkbox" className="w-4 h-4" checked={userInfo.extraInfoChecked} onChange={(e) => setUserInfo({...userInfo, extraInfoChecked: e.target.checked})} />
                     <span>Extra information</span>
                   </label>
               
                   {/* Extra Info Textarea - Appears Only If Checkbox is Selected */}
                   {userInfo.extraInfoChecked && (
                     <textarea 
                      value={userInfo.extraInfo}
                      onChange={(e) => setUserInfo({...userInfo, extraInfo: e.target.value})}
                      placeholder="Skriv din ekstra informasjon her..." 
                      className="w-full p-2 border rounded text-black h-24 resize-none"
                     />
                   )}
               
                   {/* Buttons - Back & Send */}
                      <div className="mt-4 flex justify-center gap-4">
                        {step === 1 ? (
                          showNextButton && (  // Hide Next Step when clicked
                            <button 
                              className={`w-full px-6 py-2 rounded transition ${isValidSelection() ? "bg-[#D99673] text-white hover:bg-[#B05C40]" : "bg-gray-500 text-gray-300 cursor-not-allowed"}`}
                              onClick={() => { 
                                if (isValidSelection()) {
                                  setStep(2); 
                                  setShowNextButton(false);  // Hide Next Step
                                }
                              }}
                              disabled={!isValidSelection()}
                            >
                              Next Step
                            </button>
                          )
                        ) : (
                          <>
                            <button 
                              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition w-1/2"
                              onClick={() => { 
                                setStep(1); 
                                setShowNextButton(true);  
                              }} 
                            >
                              Back
                            </button>
                            <button 
                              className="w-full px-6 py-2 rounded transition bg-[#D99673] text-white hover:bg-[#B05C40]"
                              type="submit"
                              onClick={(e) => {
                                e.preventDefault();  
                                localStorage.removeItem("selectedItems");
                                localStorage.removeItem("userInfo");
                                setSelectedItems([]);
                                setUserInfo({
                                  name: "",
                                  phone: "",
                                  deliveryLocation: "",
                                  eventType: "",
                                  customEventType: "",
                                  guestCount: "",
                                  date: null,
                                  allergies: "",
                                  extraInfoChecked: false,
                                  extraInfo: "",
                                });
                                alert("Forespørselen er sendt!");
                              }}
                          >
                      Send Request
                    </button>
                  </>
                )}
              </div>
                 </form>
               </motion.div>
              )}
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
                    onClick={() => { 
                      if (isValidSelection()) setStep(2); 
                    }}
                    disabled={!isValidSelection()}
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
