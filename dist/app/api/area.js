"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const area_1 = __importDefault(require("../../models/area"));
const router = new router_1.default();
router.get('/area', async (ctx, next) => {
    const res = await area_1.default.getList();
    ctx.body = res;
});
exports.default = router;
