import React, { useState } from "react";
import CateringImg from "../assets/catering1.png";
import menuPDF from "../assets/Catering.pdf";

const MenuCatering = ({ setIsExpanded, setShowContent }) => {
  const [activeTab, setActiveTab] = useState("snacks");

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

  const renderMenu = (menu) => (
    <div className="pr-2">
      <ul className="space-y-3">
        {menu.map((item, index) => (
          <li key={index} className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-[#8B4533] font-semibold">{item.name}</h3>
            <p className="text-[#4A4A4A]">{item.description}</p>
            <p className="text-xs font-bold text-[#4A4A4A]">allergens: {item.allergens}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="py-6 px-4 bg-[#F5E9E2] text-center">
      <h2 className="text-3xl text-[#B05C40] font-bold mb-8"style={{ fontFamily: '"Rubik Dirt", cursive' }}>OUR CATERING MENU</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
            <div className="text-left w-full">
            <div className="flex justify-center mb-8">
            <button
              className={`px-6 py-2 mx-2 hover:bg-[#8B4533] hover:text-white transition rounded-lg ${activeTab === "snacks" ? "bg-[#B05C40] text-white" : "bg-white text-[#B05C40] border"} transition`}
              onClick={() => setActiveTab("snacks")}
            >
              Snacks
            </button>
            <button
              className={`px-6 py-2 mx-2 hover:bg-[#8B4533] hover:text-white transition rounded-lg ${activeTab === "noodles" ? "bg-[#B05C40] text-white" : "bg-white text-[#B05C40] border"} transition`}
              onClick={() => setActiveTab("noodles")}
            >
              Noodles
            </button>
            <button
              className={`px-6 py-2 mx-2 hover:bg-[#8B4533] hover:text-white transition rounded-lg ${activeTab === "rice" ? "bg-[#B05C40] text-white" : "bg-white text-[#B05C40] border"} transition`}
              onClick={() => setActiveTab("rice")}
            >
              Rice
            </button>
          </div>
          <div className="h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#D99673] scrollbar-track-[#F5E9E2] pr-2">
            {renderMenu(menu[activeTab])}
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <button
              className="w-full md:w-auto px-6 py-3 bg-[#B05C40] text-white font-semibold rounded-lg shadow-md hover:bg-[#8B4533] transition"
              onClick={() => {
                setIsExpanded(true);
                setTimeout(() => setShowContent(true), 400);
              }}
            >
              ORDER CATERING
            </button>
            <a
              href={menuPDF} 
              className="w-full md:w-auto px-6 py-3 bg-white text-[#4A4A4A] border border-[#B05C40] font-semibold rounded-lg shadow-md hover:bg-[#8B4533] hover:text-white transition"
              download="DFB-CateringMenu.pdf"
            >
              DOWNLOAD PDF MENU
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative rounded-lg shadow-lg overflow-hidden w-full h-[300px] md:h-[550px]">
            <img
              src={CateringImg}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              alt="Catering"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCatering;