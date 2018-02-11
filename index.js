const fetchPonyfill = require('fetch-ponyfill');
const { fetch } = fetchPonyfill();

class WebAPI {

  constructor(base, timeout = 30) {
    this.base = base;
  }

  getBase() {
    return this.base;
  }

  makeRequest(path, method, body, query = '', headers = {}) {

    let options = {
      headers: Object.assign({}, headers, {
        'Content-Type': 'application/json',
      }),
      method,
    };

    if(body) {
      options = Object.assign({}, options, { body: JSON.stringify(body) });
    }

    let url = `${this.getBase()}/${path}`;
    if(query) {
      query = Object.keys(query)
          .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(query[k]))
          .join('&');
      url = `${this.getBase()}/${path}?${query}`;
    }

    return fetch(url, options)
      .then(response => Promise.all([ response, response.json() ]))
      .then(([ { status }, result ]) => {
        const payload = result;
        if(status >= 400) {
          throw payload;
        }
        return payload;
      });
  }

  get(path, body, query, headers) {
    return this.makeRequest(path, 'GET', body, query, headers);
  }

  post(path, body, query, headers) {
    return this.makeRequest(path, 'POST', body, query, headers);
  }

  put(path, body, query, headers) {
    return this.makeRequest(path, 'PUT', body, query, headers);
  }

  delete(path, body, query, headers) {
    return this.makeRequest(path, 'DELETE', body, query, headers);
  }

}

module.exports = WebAPI;
