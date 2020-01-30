"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa2_cors_1 = __importDefault(require("koa2-cors"));
const area_1 = __importDefault(require("./app/api/area"));
const app = new koa_1.default();
app.use(koa2_cors_1.default());
app.use(area_1.default.routes());
app.listen(2020);
