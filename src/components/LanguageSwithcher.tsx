import { useState } from "react";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

  const changeLang = (lang: string) => {
    const select = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;

    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }

    setOpen(false);
  };

  return (
    <div className="fixed top-4 right-4">
      <div className="relative">
        
        {/* Button */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-black/80 text-white px-4 py-2 rounded-full backdrop-blur-md shadow-lg hover:bg-black"
        >
          🌐 Language
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-xl rounded-xl overflow-hidden">
            <button
              onClick={() => changeLang("en")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              🇬🇧 English
            </button>

            <button
              onClick={() => changeLang("si")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              🇱🇰 සිංහල
            </button>
          </div>
        )}
      </div>
    </div>
  );
}