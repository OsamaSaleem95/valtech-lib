"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ValCard = ({ title, content, isHidden, input, button }) => {
    if (!isHidden)
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("h1", null, title),
            react_1.default.createElement("h2", null, content),
            input,
            button));
    else
        return null;
};
exports.default = ValCard;
