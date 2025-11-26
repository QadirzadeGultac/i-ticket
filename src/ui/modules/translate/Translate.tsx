import React from "react";
import i18next from "@/data/localization";
import { Button } from "@mantine/core";
const Translate = () => {
  return (
    <div className="flex justify-between w-full">
      <Button
        color="blue"
        variant="light"
        onClick={() => i18next.changeLanguage("en")}
      >
        EN
      </Button>
      <Button
        color="blue"
        variant="light"
        onClick={() => i18next.changeLanguage("az")}
      >
        AZ
      </Button>
      <Button
        color="blue"
        variant="light"
        onClick={() => i18next.changeLanguage("ru")}
      >
        RU
      </Button>
    </div>
  );
};

export default Translate;
