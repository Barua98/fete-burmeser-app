import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-16 px-6 bg-[#F5E9E2] flex justify-center w-full">
      
      {/* 🔥 Single Box Container */}
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-5xl flex flex-col md:flex-row gap-12">
        
        {/* 🟠 Left Side: Contact Info + Map */}
        <div className="flex flex-col w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-[#B05C40] mb-4 text-center md:text-left">📍 FINN OSS</h2>
          <p className="text-gray-700 mb-2 text-center md:text-left">📞 <strong>+47 1234578</strong></p>
          <p className="text-gray-700 mb-6 text-center md:text-left">📍 Akershusstranda 25, 0150 Oslo</p>

          {/* 🔥 Google Maps */}
          <motion.div
            className="flex-grow rounded-lg overflow-hidden shadow-lg"
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

        {/* 🟠 Right Side: Contact Form */}
        <motion.form
          className="flex flex-col w-full md:w-1/2 bg-[#F5E9E2] p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-[#B05C40] mb-6 text-center md:text-left">SEND OSS EN MELDING</h2>

          <label className="block mb-2 text-[#B05C40] font-semibold">Ditt navn</label>
          <input 
            type="text" 
            className="w-full border border-[#B05C40] p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#B05C40]" 
          />

          <label className="block mb-2 text-[#B05C40] font-semibold">Din e-post</label>
          <input 
            type="email" 
            className="w-full border border-[#B05C40] p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#B05C40]" 
          />

          <label className="block mb-2 text-[#B05C40] font-semibold">Melding</label>
          <textarea 
            className="w-full border border-[#B05C40] p-2 rounded mb-4 flex-grow focus:outline-none focus:ring-2 focus:ring-[#B05C40]" 
            rows="5"
          ></textarea>

          <button 
            type="submit"
            className="bg-[#B05C40] text-white px-4 py-2 rounded-md hover:bg-[#8B4533] transition w-full font-semibold"
          >
            Send Melding
          </button>
        </motion.form>

      </div>

    </section>
  );
};

export default ContactSection;
