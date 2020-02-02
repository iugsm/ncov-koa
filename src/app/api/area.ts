import Router from "@koa/router";
import { Context, Next } from "koa";
import { spider, Condition } from "../spider/spider";

const router = new Router();

router.get("/area", async (ctx: Context, next: Next) => {
  const res = await spider.spiderByCondition(Condition.AREA);
  ctx.body = res;
});

export default router;
