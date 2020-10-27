const Express = require('express');
const { createServer } = require('http');
const initSsr = require('svelte-routing-util/ssr');

const application = Express();
const ssr = initSsr();

application.use(ssr.serveBuildDir);
application.get('*', (req, res) =>
  res.send(
    ssr.renderToString({
      url: req.url,
    })
  )
);

const server = createServer(application);

server.listen(12345);
