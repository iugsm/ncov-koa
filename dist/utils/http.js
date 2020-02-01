"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Httper {
    constructor() {
        if (!Httper.http) {
            Httper.http = axios_1.default;
        }
    }
    static getInstance() {
        if (!Httper.instance) {
            Httper.instance = new Httper();
        }
        return Httper.instance;
    }
    async get(url) {
        try {
            const resp = await Httper.http.get(url);
            return resp.data;
        }
        catch (err) {
            // console.log(err);
            return 'request error';
        }
    }
}
exports.default = Httper.getInstance();
