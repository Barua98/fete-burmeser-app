
import VippaImg from "../assets/vippa-bod.jpg";


const MenuVippa = () => {

    const vippaMenu = [
        { name: "SHAN KHAO SWE", price: 129, description: "Risnudler med kjøtt eller tofu i en ​spenstig tomatsaus." },
        { name: "LAPHET THOKE", price: 129, description: "En umami smaksbombe av en ​salat med fermenterte teblader." },
        { name: "OHN NO KHAO SWE", price: 129, description: "Kremet kokossuppe med kylling eller sopp." },
        { name: "MOHINGHA",price: 129  ,description: "Fiskesuppe med sitrongress og hvitløk." },
        { name: "NAH GYI THOKE",price: 129 ,description: "Udon-nudler i kremet curry med koriander." },
        { name: "SAMOSA",price: 129 ,description: "Frityrstekte samosas fylt med poteter og krydder." },
    ];

    const renderMenu = (menu) => (
        <div className="max-h-[550px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#D99673] scrollbar-track-[#F5E9E2] pr-2"> 
            <ul className="space-y-3">
                {menu.map((item, index) => (
                    <li key={index} className="bg-white shadow-md p-4 rounded-lg shadow-md">
                        <h3 className="text-[#8B4533] font-semibold">{item.name}</h3>
                        <p className="text-[#4A4A4A]">{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <section className="py-6 px-4 bg-[#F5E9E2] text-center">
          <h2 className="text-3xl text-[#B05C40] font-bold mb-8" style={{ fontFamily: '"Rubik Dirt", cursive' }}>OUR MENU VIPPA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
            <div className="flex justify-center">
              <div className="relative rounded-lg shadow-lg overflow-hidden w-full h-[300px] md:h-[550px]">
                <img
                  src={VippaImg}
                  alt="Matbod på Vippa"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="text-left h-[500px] w-full">
              {renderMenu(vippaMenu)}
            </div>
          </div>
        </section>
      );
}

export default MenuVippa;
