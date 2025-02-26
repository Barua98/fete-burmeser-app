



const Menu = () => {

    const menuItems = [
        { name: "SHAN KHAO SWE", description: "Risnudler med kjøtt eller tofu i en ​spenstig tomatsaus. Toppet med  ​sennepsblader og peanøtter." },
        { name: "LAPHET THOKE", description: "En umami smaksbombe av en ​salat. Fermenterte teblader med ​hvitløk, kål, tomater og nøtter." },
        { name: "OHN NO KHAO SWE", description: "En kremet kokossuppe med kyllin​g eller sopp. Serveres med nudler​, koriander, rødløk og lime" },
        { name: "MOHINGHA", description: "En smakfull fiskesuppe, kokt med​ sitrongress og hvitløk. Serveres​ med nudler, rødløk og koriander." },
        { name: "NAH GYI THOKE", description: "Udon-nudler med kylling/tofu i ​kremet curry, toppet med ​koriander, rødløk, chilli og lime." },
        { name: "SAMOSA", description: "Deilig frityrstekte samosas fylt ​med en smakfull blanding av potete​r, løk og kr​ydder." },
      ];

    return (
        <section className="py-12 px-x w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Vår Meny</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      );
    };
    
    export default Menu;