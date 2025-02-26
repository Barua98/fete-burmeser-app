import React from "react";

const ContactSection = () => {
  return (
    <section className="py-12 px-4 flex justify-center w-full">
      
      {/* Single Box Container */}
      <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-5xl flex flex-col md:flex-row gap-8">
        
        {/* Left Side: Contact Info + Map */}
        <div className="flex flex-col w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-center md:text-left">FINN OSS</h2>
          <p className="text-gray-600 mt-2">📞 <strong>+47 1234578</strong></p>
          <p className="text-gray-600 mb-4">📍 Akershusstranda 25, 0150 Oslo</p>

          {/* Google Maps */}
          <div className="flex-grow">
            <iframe
              title="Google Maps Location"
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.8237374931289!2d10.73876307766702!3d59.901875474896656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416f15ed16286d%3A0x99e3ee8ac8957f19!2sDen%20fete%20burmeser!5e0!3m2!1sno!2sno!4v1740420771158!5m2!1sno!2sno"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form className="flex flex-col w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-center md:text-left mb-4">SEND OSS EN MELDING</h2>

          <label className="block mb-2">Ditt navn</label>
          <input type="text" className="w-full border p-2 rounded mb-4"/>

          <label className="block mb-2">Melding</label>
          <textarea className="w-full border p-2 rounded mb-4 flex-grow"></textarea>

          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full">
            Send
          </button>
        </form>

      </div>

    </section>
  );
};

export default ContactSection;
