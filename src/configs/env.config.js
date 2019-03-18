const env = process.env.MY_ENV || 'dev';
// api host
const apiHost = {
  prod: 'https://api.prod.com',
  rc: 'https://api.rc.com',
  test: 'https://api.test.com',
  dev: 'https://api.dev.com',
};

const wsHost = {
  prod: 'ws://api.prod.com',
  rc: 'ws://api.rc.com',
  test: 'ws://api.test.com',
  dev: 'ws://api.dev.com',
};

class Configs {
  static get DEFAULT() {
    return {
      ENV: env,
      HTTP_API: apiHost[env],
      WS_API: wsHost[env],
    };
  }
}
export default Configs;
