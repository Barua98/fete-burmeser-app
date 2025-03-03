import React, { useState } from "react";
import CateringImg from "../assets/catering1.png";
import VippaImg from "../assets/vippa-bod.jpg";

const Menu = ({ setIsExpanded, setShowContent }) => {
  const [activeTab, setActiveTab] = useState("catering");

  const cateringMenu = [
    { name: "Liten Catering (10 personer)", description: "Perfekt for små samlinger med en god miks av burmesiske spesialiteter." },
    { name: "Medium Event (30 personer) - 3499 kra", description: "Ideell for større feiringer, med en full burmesisk festmeny." },
    { name: "Stor Catering (50 personer) - 5999 kr", description: "En storslått cateringpakke med et bredt utvalg av retter." },
  ];

  const vippaMenu = [
    { name: "SHAN KHAO SWE", description: "Risnudler med kjøtt eller tofu i en ​spenstig tomatsaus." },
    { name: "LAPHET THOKE", description: "En umami smaksbombe av en ​salat med fermenterte teblader." },
    { name: "OHN NO KHAO SWE", description: "Kremet kokossuppe med kylling eller sopp." },
    { name: "MOHINGHA", description: "Fiskesuppe med sitrongress og hvitløk." },
    { name: "NAH GYI THOKE", description: "Udon-nudler i kremet curry med koriander." },
    { name: "SAMOSA", description: "Frityrstekte samosas fylt med poteter og krydder." },
  ];

  const renderMenu = (menu) => (
    <ul className="space-y-4">
      {menu.map((item, index) => (
        <li key={index} className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-[#B05C40] font-semibold">{item.name}</h3>
          <p className="text-gray-600">{item.description}</p>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="py-12 px-4 bg-[#F5E9E2] text-center">
      <h2 className="text-3xl text-[#B05C40] font-bold mb-8">Vår Meny</h2>

      {/* Tab Buttons */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-6 py-2 mx-2 rounded-lg ${activeTab === "catering" ? "bg-[#B05C40] text-white" : "bg-white text-[#B05C40] border"} transition`}
          onClick={() => setActiveTab("catering")}
        >
          Catering
        </button>
        <button
          className={`px-6 py-2 mx-2 rounded-lg ${activeTab === "vippa" ? "bg-[#B05C40] text-white" : "bg-white text-[#B05C40] border"} transition`}
          onClick={() => setActiveTab("vippa")}
        >
          Matbod på Vippa
        </button>
      </div>

      {/* Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <div className="relative rounded-lg shadow-lg overflow-hidden 
                          md:w-[450px] h-[300px] md:h-[550px]">
            <img
              src={activeTab === "catering" ? CateringImg : VippaImg}
              alt={activeTab === "catering" ? "Catering" : "Matbod på Vippa"}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

          <div className="text-left md:w-[450px]">
            {activeTab === "catering" ? renderMenu(cateringMenu) : renderMenu(vippaMenu)}
            {activeTab === "catering" && (
              <button
                className="mt-6 px-6 py-2 bg-[#B05C40] text-white font-semibold rounded-lg shadow-md hover:bg-[#8B4533] transition"
                onClick={() => {
                  setIsExpanded(true);
                  setTimeout(() => setShowContent(true), 400);
                }}
              >
                Bestill Catering
              </button>
            )}
          </div>
        </div>
    </section>
  );
};

export default Menu;
