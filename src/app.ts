import Koa from 'koa';
import cors from 'koa2-cors';
import InitApp from './core/init';
import { spider } from './app/spider/spider';

const app = new Koa();
app.use(cors());
spider.intervalFunc();

InitApp.init(app);

app.listen(9000);
