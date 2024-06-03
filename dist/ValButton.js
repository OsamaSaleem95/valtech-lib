"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ValButton = ({ text, color, onClick }) => {
    return (react_1.default.createElement("button", { style: { backgroundColor: color }, onClick: onClick }, text));
};
exports.default = ValButton;
