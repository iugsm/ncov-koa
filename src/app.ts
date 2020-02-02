import Koa from "koa";
import cors from "koa2-cors";
import InitApp from "./core/init";

const app = new Koa();
app.use(cors());
InitApp.init(app);

app.listen(9000);
