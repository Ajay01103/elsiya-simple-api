import { Elysia } from "elysia"

export default new Elysia()
  .get("/hello", () => {
    return { message: "Hello Vercel!!!!" }
  })
  .get("/", () => "Hello Elysia")
  .listen(3000)

// console.log(
//   `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
// );
