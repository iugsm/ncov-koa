import Router from '@koa/router';
import Area from '../../models/area';
import { Context, Next } from 'koa';

const router = new Router();

router.get('/area', async (ctx: Context, next: Next) => {
  const res = await Area.getList();
  ctx.body = res;
});

export default router;
