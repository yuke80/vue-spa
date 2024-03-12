const express = require('express');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');

const app = express();

// Import and Set Nuxt.js options
const config = require('../nuxt.config');

config.dev = process.env.NODE_ENV !== 'production';

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  app.get('/_hc', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Redirect the old index.html that is indexed by search engines
  // into '/' to avoid 404 errors
  app.get('/index.html', (req, res) => {
    res.redirect(301, '/');
  });

  app.get('/shop', (req, res) => {
    res.redirect(301, 'https://zenplaceonline-store.myshopify.com/');
  });

  app.get('/pilates/about', (req, res) => {
    res.redirect(301, '/pilates/apropos');
  });

  app.get('/pilates/about/history', (req, res) => {
    res.redirect(301, '/pilates/apropos');
  });

  app.get('/health', (req, res) => {
    res.redirect(301, '/pilates/page/bodychange');
  });

  app.get('/studios/pilates-kawasaki', (req, res) => {
    res.redirect(301, '/studios/basipilates-kawasaki');
  });

  app.get('/studios/pilates-kamakura', (req, res) => {
    res.redirect(301, '/studios/basipilates-kamakura');
  });

  app.get('/studios/strong-meguro', (req, res) => {
    res.redirect(301, '/studios');
  });
  app.get('/studios/strong-meguro/pricing', (req, res) => {
    res.redirect(301, '/studios');
  });
  app.get('/studios/strong-meguro/schedule', (req, res) => {
    res.redirect(301, '/studios');
  });
  app.get('/studios/pilates-jiyugaoka', (req, res) => {
    res.redirect(301, '/studios/basipilates-jiyugaoka');
  });
  app.get('/studios/pilates-jiyugaoka/pricing', (req, res) => {
    res.redirect(301, '/studios/basipilates-jiyugaoka/pricing');
  });
  app.get('/studios/pilates-jiyugaoka/schedule', (req, res) => {
    res.redirect(301, '/studios/basipilates-jiyugaoka/schedule');
  });

  app.get('/studios/pilates-nihonbashi', (req, res) => {
    res.redirect(301, '/studios/basipilates-yaesu');
  });

  app.get('/studios/pilates-kichijoji1', (req, res) => {
    res.redirect(301, '/studios/pilates-kichijoji');
  });

  app.get('/studios/pilates-kagurazaka', (req, res) => {
    res.redirect(301, '/studios/basipilates-iidabashi');
  });
  app.get('/studios/pilates-kagurazaka/pricing', (req, res) => {
    res.redirect(301, '/studios/basipilates-iidabashi/pricing');
  });
  app.get('/studios/pilates-kagurazaka/schedule', (req, res) => {
    res.redirect(301, '/studios/basipilates-iidabashi/schedule');
  });

  app.get('/studios/yoga-sannomiya', (req, res) => {
    res.redirect(301, '/studios/pilates-sannomiya');
  });
  app.get('/studios/yoga-sannomiya/pricing', (req, res) => {
    res.redirect(301, '/studios/pilates-sannomiya/pricing');
  });
  app.get('/studios/yoga-sannomiya/schedule', (req, res) => {
    res.redirect(301, '/studios/pilates-sannomiya/schedule');
  });

  app.get('/studios/pilates-ikebukuro', (req, res) => {
    res.redirect(301, '/studios/basipilates-ikebukuro');
  });
  app.get('/studios/pilates-ikebukuro/pricing', (req, res) => {
    res.redirect(301, '/studios/basipilates-ikebukuro/pricing');
  });
  app.get('/studios/pilates-ikebukuro/schedule', (req, res) => {
    res.redirect(301, '/studios/basipilates-ikebukuro/schedule');
  });

  app.get('/studios/strong-jiyugaoka', (req, res) => {
    res.redirect(301, '/studios/basipilates-jiyugaoka');
  });
  app.get('/studios/strong-jiyugaoka/pricing', (req, res) => {
    res.redirect(301, '/studios/basipilates-jiyugaoka/pricing');
  });
  app.get('/studios/strong-jiyugaoka/schedule', (req, res) => {
    res.redirect(301, '/studios/basipilates-jiyugaoka/schedule');
  });

  app.get('/welcome', (req, res) => {
    res.redirect(301, '/welcome/schedule.php');
  });

  app.use((req, res, next) => {
    res.removeHeader('X-Powered-By');
    res.header('Cache-Control', 'public, max-age=900'); // 15分に設定
    next();
  });

  app.use((req, res, next) => {
    // Log requests
    const remoteIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    consola.info(`${req.method} ${req.url} (IP: ${remoteIp}, referer: ${req.headers.referer})`);
    next();
  });

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  });

  app.use((err, req, res) => {
    consola.error('ERROR', err);
    res.end(401);
  });

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }
}

start();
