import Koa from "koa";
import Router from "@koa/router";
import requireDirectory from "require-directory";

class InitApp {
  static app: Koa;

  private static loadRouter() {
    const routerDirectory = `${process.cwd()}/dist/app/api`;

    requireDirectory(module, routerDirectory, {
      visit: this.visitor
    });
  }

  private static visitor = function(obj: any) {
    if (obj.default instanceof Router) {
      InitApp.app.use(obj.default.routes());
    }
  };

  static init(app: Koa) {
    this.app = app;
    this.loadRouter();
  }
}

export default InitApp;
