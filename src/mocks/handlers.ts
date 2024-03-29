import { rest } from "msw";

const url = "https://jsonplaceholder.typicode.com/";
export const postsMock = [
  {
    userId: 2,
    id: 11,
    title: "et ea vero quia laudantium autem",
    body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
  },
  {
    userId: 2,
    id: 12,
    title: "in quibusdam tempore odit est dolorem",
    body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
  },
];

export const handlers = [
  rest.get(`${url}posts`, async (req, res, ctx) => {
    return res.once(ctx.status(200), ctx.json(postsMock));
  }),

  rest.get(`${url}posts`, async (req, res, ctx) => {
    return res.once(ctx.status(404));
  }),
];
