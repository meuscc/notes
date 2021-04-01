import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { format } from 'https://deno.land/x/date_fns/index.js';
import React from 'https://cdn.skypack.dev/react';
import render from 'https://cdn.skypack.dev/react-dom/server';

console.log(render);

const books = new Map<string, any>();
books.set('1', {
  id: '1',
  title: 'The Hound of the Baskervilles',
  author: 'Conan Doyle, Arthur',
});

const router = new Router();
router
  .get('/', context => {
    try {
      const h = render.renderToString(
        <h1>{format(new Date(2014, 1, 11), 'yyyy-MM-dd', {})}</h1>,
      );
      console.log(h);
      context.response.body = h;
    } catch (e) {
      console.log(e);
    }
  })
  .get('/book', context => {
    context.response.body = Array.from(books.values());
  })
  .get('/book/:id', context => {
    if (context.params && context.params.id && books.has(context.params.id)) {
      context.response.body = books.get(context.params.id);
    }
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
