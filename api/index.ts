import { Elysia } from "elysia"

const app = new Elysia()
  .get("/hello", () => {
    return { message: "Hello Vercel!!!!" }
  })
  .get("/", () => "Hello Elysia")

export default app
