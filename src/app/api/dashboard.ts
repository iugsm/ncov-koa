import Router from "@koa/router";
import { Context, Next } from "koa";
import Spider from "../spider/spider";

const router = new Router();

router.get("/dash", async (ctx: Context, next: Next) => {
  const res = await Spider.sipderDash();
  ctx.body = res;
});

export default router;
