import { useState } from "react";

const HeaderVM = () => {
  const [opened, setOpened] = useState(false);

  const close = () => setOpened(!opened);

  return {
    opened,
    close,
  };
};

export default HeaderVM;
