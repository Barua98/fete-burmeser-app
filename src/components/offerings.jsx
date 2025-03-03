import PopupsImg from "../assets/POP-UP.jpg";
import VippaImg from "../assets/vippa-bod.jpg";
import CateringImg from "../assets/catering1.png";

const Offerings = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 px-4 bg-[#F5E9E2] text-center">
      <h2 className="text-3xl text-[#B05C40] font-bold mb-8 ">
        Oslos eneste burmesiske restaurant
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {/* 🔥 Pop-Ups */}
        <div
          className="relative cursor-pointer group overflow-hidden rounded-lg shadow-lg 
          w-[375px] md:w-[450px] h-[300px] md:h-[550px]"
          onClick={() => scrollToSection("popups")}
        >
          <img
            src={PopupsImg}
            alt="Pop-ups"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold 
              bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-100 group-hover:opacity-80 
              transition-opacity duration-300">
            <p className="text-xl md:text-2xl">POP-UPS</p>
          </div>
        </div>

        {/* 🔥 Matbod på Vippa */}
        <div
          className="relative cursor-pointer group overflow-hidden rounded-lg shadow-lg 
          w-[375px] md:w-[450px] h-[300px] md:h-[550px]"
          onClick={() => scrollToSection("vippa")}
        >
          <img
            src={VippaImg}
            alt="Matbod på Vippa"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold 
              bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-100 group-hover:opacity-80 
              transition-opacity duration-300">
            <p className="text-xl md:text-2xl">MATBOD PÅ VIPPA</p>
          </div>
        </div>

        {/* 🔥 Catering */}
        <div
          className="relative cursor-pointer group overflow-hidden rounded-lg shadow-lg 
          w-[375px] md:w-[450px] h-[300px] md:h-[550px]"
          onClick={() => scrollToSection("catering")}
        >
          <img
            src={CateringImg}
            alt="Catering"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold 
              bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-100 group-hover:opacity-80 
              transition-opacity duration-300">
            <p className="text-xl md:text-2xl">CATERING</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
