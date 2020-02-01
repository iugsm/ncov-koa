"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("../../utils/http"));
class Spider {
    constructor() {
        this.url = 'https://ncov.dxy.cn/ncovh5/view/pneumonia';
        this.getRawHtml();
    }
    async getRawHtml() {
        const rawHtml = await http_1.default.get(this.url);
        return rawHtml;
    }
    async spiderArea() {
        const rawHtml = await this.getRawHtml();
        const reg = /window.getAreaStat = (.*?)\}catch/;
        return this.analyz(reg, rawHtml);
    }
    async sipderDash() {
        const rawHtml = await this.getRawHtml();
        const reg = /window.getStatisticsService = (.*?)\}catch/;
        return this.analyz(reg, rawHtml);
    }
    analyz(reg, source) {
        const res = source.match(reg);
        let data = {};
        if (res !== null) {
            data = JSON.parse(res[1]);
        }
        return data;
    }
}
exports.default = new Spider();
