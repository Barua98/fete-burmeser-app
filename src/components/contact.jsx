import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-16 px-6 bg-[#F5E9E2] flex justify-center w-full">
      
      <div className="relative bg-white shadow-lg p-8 rounded-lg w-full max-w-7xl flex flex-col md:flex-row gap-12">
        
        {/* Left Section */}
        <div className="flex flex-col w-full relative">
          <h2 className="text-4xl font-bold text-[#B05C40] mb-4 text-center md:text-left" style={{ fontFamily: '"Rubik Dirt", cursive' }}>
            FIND US AT VIPPA
          </h2>
          <p className="text-gray-700 mb-2 text-center md:text-left">📞 <strong>+47 1234578</strong></p>
          <p className="text-gray-700 mb-6 text-center md:text-left">📍 Akershusstranda 25, 0150 Oslo</p>

          {/* ✅ Responsive Opening Hours ✅ */}
          <div className="md:absolute md:top-0 md:right-0 bg-[#F5E9E2] p-4 rounded-lg shadow-md w-full md:w-auto mt-6 md:mt-0">
            <h3 className="text-[#8B4533] font-bold text-lg text-center md:text-left">ÅPNINGSTIDER PÅ VIPPA</h3>
            <p className="text-[#4A4A4A] mt-2 text-center md:text-left">
              <strong>Onsdag - Fredag:</strong> 14:00 - 21:00 <br />
              <strong>Lørdag:</strong> 12:00 - 21:00 <br />
              <strong>Søndag:</strong> 12:00 - 18:00
            </p>
          </div>

          {/* Google Map Section */}
          <motion.div
            className="flex-grow rounded-lg py-4 overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              title="Google Maps Location"
              className="w-full h-72 md:h-80 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.8237374931289!2d10.73876307766702!3d59.901875474896656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416f15ed16286d%3A0x99e3ee8ac8957f19!2sDen%20fete%20burmeser!5e0!3m2!1sno!2sno!4v1740420771158!5m2!1sno!2sno"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
