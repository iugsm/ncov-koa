"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa2_cors_1 = __importDefault(require("koa2-cors"));
const init_1 = __importDefault(require("./core/init"));
const app = new koa_1.default();
app.use(koa2_cors_1.default());
init_1.default.init(app);
app.listen(9000);
