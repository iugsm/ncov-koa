"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const spider_1 = __importDefault(require("../spider/spider"));
const router = new router_1.default();
router.get("/dash", async (ctx, next) => {
    const res = await spider_1.default.sipderDash();
    ctx.body = res;
});
exports.default = router;
