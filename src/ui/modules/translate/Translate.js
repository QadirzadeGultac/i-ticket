import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import i18next from "@/data/localization";
import { Button } from '@mantine/core';
var Translate = function () {
    return (_jsxs("div", { children: [_jsx(Button, { color: "blue", variant: 'light', onClick: function () { return i18next.changeLanguage("en"); }, children: "EN" }), _jsx(Button, { color: "blue", variant: 'light', onClick: function () { return i18next.changeLanguage("az"); }, children: "AZ" }), _jsx(Button, { color: "blue", variant: 'light', onClick: function () { return i18next.changeLanguage("ru"); }, children: "RU" })] }));
};
export default Translate;
