import axios from 'axios';
import consola from 'consola';

const cache = {};
const useCache = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;

export default async function (req, res/* , next */) {
  // For DEV: 'http://develop-enterprise-api.zen-jp.info:10080/public-api'
  const baseUrl = process.env.API_BASE_URL || 'https://staging-api.zen-jp.info/zenplace/v1';

  const start = new Date().valueOf();

  // TODO: remove this cache after proper staging/production env
  if (useCache && cache[req.url] && cache[req.url].expires > new Date().getTime()) {
    consola.debug('Cache hit');
    res.json(cache[req.url].content);
  } else {
    const result = await axios({
      method: 'get',
      url: baseUrl + req.url,
    });

    let expires = new Date();
    expires = expires.getTime() + (5 * 60 * 1000);

    if (useCache) {
      cache[req.url] = {
        content: result.data,
        expires,
      };
    }
    res.json(result.data);
  }

  const end = new Date().valueOf();

  consola.info(`GET ${req.url} took ${end - start}ms`);
}
