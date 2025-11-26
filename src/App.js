import { jsx as _jsx } from "react/jsx-runtime";
// import { useTranslation } from "react-i18next";
// import i18next from "@/data/localization";
import Home from "@/ui/modules/home/Home";
var App = function () {
    // const { t } = useTranslation();
    return (_jsx("div", { children: _jsx(Home, {}) }));
};
export default App;
