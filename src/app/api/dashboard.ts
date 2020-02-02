import Router from "@koa/router";
import { Context, Next } from "koa";
import { spider, Condition } from "../spider/spider";

const router = new Router();

router.get("/dash", async (ctx: Context, next: Next) => {
  const res = await spider.spiderByCondition(Condition.DASH);
  ctx.body = res;
});

export default router;
