import Koa from 'koa';
import cors from 'koa2-cors';
import router from './app/api/area';
import dashboard from './app/api/dashboard';

const app = new Koa();
app.use(cors());
app.use(router.routes());
app.use(dashboard.routes());

app.listen(9000);
