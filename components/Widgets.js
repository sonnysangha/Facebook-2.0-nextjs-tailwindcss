import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import React from "react";
import Contact from "./Contact";

function Widgets() {
  const contacts = [
    { src: "https://links.papareact.com/f0p", name: "Jeff Bezoz" },
    { src: "https://links.papareact.com/kxk", name: "Elon Musk" },
    { src: "https://links.papareact.com/zvy", name: "Bill Gates" },
    { src: "https://links.papareact.com/snf", name: "Mark Zuckerberg" },
    { src: "https://links.papareact.com/d0c", name: "Harry Potter" },
    { src: "https://links.papareact.com/6gg", name: "The Queen" },
    { src: "https://links.papareact.com/r57", name: "James Bond" },
  ];

  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
