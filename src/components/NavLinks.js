import React from "react";

import {links} from "../utils/constant";

function NavLinks({setSelectedCategory}) {
  return (
    <nav className="mt-4 py-2 flex gap-4 font-semibold overflow-y-auto ">
      {links.map((link, index) => (
        <button
          key={index}
          className="p-1 shrink-0 hover:bg-black hover:text-white transition ease-linear duration-300 rounded-lg "
          onClick={() => setSelectedCategory(link.url)}
        >
          <p>{link.name}</p>
        </button>
      ))}
    </nav>
  );
}

export default NavLinks;
