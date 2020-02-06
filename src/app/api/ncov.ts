import Router from '@koa/router';
import { Context, Next } from 'koa';
import fs from 'fs';
import iconv from 'iconv-lite';

const router = new Router();

router.get('/getData', async (ctx: Context, next: Next) => {
  const res = getDataFromJson();
  ctx.body = JSON.parse(res);
});

function getDataFromJson() {
  const file = `${process.cwd()}/data/data.json`;
  const data = fs.readFileSync(file);
  return iconv.decode(data, 'utf-8');
}

export default router;
