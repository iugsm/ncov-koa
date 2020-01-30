"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("../utils/http"));
class Area {
    async getList() {
        const url = 'https://3g.dxy.cn/newh5/view/pneumonia';
        const resp = await http_1.default.get(url);
        const reg = /window.getAreaStat = (.*?)}catch/;
        const result = resp.match(reg);
        if (result !== null) {
            return JSON.parse(result[1]);
        }
        return [];
    }
}
exports.default = new Area();
