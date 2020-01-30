import Koa from 'koa';
import cors from 'koa2-cors';
import router from './app/api/area';

const app = new Koa();
app.use(cors());
app.use(router.routes());

app.listen(2020);
