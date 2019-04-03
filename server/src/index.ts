import Koa, { Context } from "koa";
import Router from "koa-router";

const app = new Koa();
const router = new Router({ prefix: "/api" });

router.get("/hello", async (ctx: Context) => {
  ctx.body = "Hello World!";
});

app.use(router.routes());

app.listen(8080);
