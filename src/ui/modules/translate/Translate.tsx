import React from "react";
import i18next from "@/data/localization";
import { Button } from "@mantine/core";
const Translate = () => {
  const currentLang = i18next.language;
  const languages = ["en", "az", "ru"].filter((lang) => lang !== currentLang);
  return (
    <div
      className="flex ml-10! mr-10! "
      // className="flex gap-2 border-white border-2 rounded-md p-0 m-0 "
    >
      {/* İki button komponenti */}
      <Button
        className="bg-transparent! text-[0.75rem]! p-1! font-semibold! leading-4! rounded-none! rounded-s-md! border-white!"
        onClick={() => i18next.changeLanguage(languages[0])}
      >
        {languages[0].toUpperCase()}
      </Button>
      <Button
        className="bg-transparent! text-[0.75rem]! p-1! font-semibold! leading-4! rounded-none! rounded-e-md! border-white! border-l-0!"
        onClick={() => i18next.changeLanguage(languages[1])}
      >
        {languages[1].toUpperCase()}
      </Button>
    </div>
  );
};
export default Translate;
