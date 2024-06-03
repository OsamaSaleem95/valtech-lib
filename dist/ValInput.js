"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ValInput = ({ value, onChange, placeholder }) => {
    return (react_1.default.createElement("input", { value: value, onChange: onChange, placeholder: placeholder }));
};
exports.default = ValInput;
