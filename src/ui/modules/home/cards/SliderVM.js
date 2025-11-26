var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { useState, useEffect } from "react";
import { fetchPromotionById } from "@/app/api/slider-card.api";
var SliderVM = function (_a) {
    var _b = _a.intervalMs, intervalMs = _b === void 0 ? 3000 : _b;
    var _c = useState([]), imgs = _c[0], setImgs = _c[1];
    var _d = useState(0), currentIndex = _d[0], setCurrentIndex = _d[1];
    useEffect(function () {
        var loadImgs = function () { return __awaiter(void 0, void 0, void 0, function () {
            var arr, i, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        arr = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 7)) return [3 /*break*/, 4];
                        return [4 /*yield*/, fetchPromotionById(0, i)];
                    case 2:
                        data = _a.sent();
                        console.log("API DATA", data); // BURDA URL-lər görünür
                        // data birbaşa url-dirsə:
                        arr.push(data);
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        setImgs(arr);
                        return [2 /*return*/];
                }
            });
        }); };
        loadImgs();
    }, []);
    // avtomatik dəyişmə
    useEffect(function () {
        if (imgs.length === 0)
            return;
        var timer = setInterval(function () {
            setCurrentIndex(function (prev) { return (prev + 1) % imgs.length; });
        }, intervalMs);
        return function () { return clearInterval(timer); };
    }, [imgs, intervalMs]);
    var next = function () {
        setCurrentIndex(function (prev) { return (prev + 1) % imgs.length; });
    };
    var prev = function () {
        setCurrentIndex(function (prev) {
            return prev === 0 ? imgs.length - 1 : prev - 1;
        });
    };
    console.log("ACTIVE IMG:", imgs[currentIndex]);
    return {
        img: imgs[currentIndex],
        prev: prev,
        next: next,
    };
};
export default SliderVM;
