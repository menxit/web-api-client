# WebAPI

## How to install?
```
npm i -S menxapi
```

## How to make an http GET request?
```js
const WebAPI = require('menxapi');

const webAPI = new WebAPI("https://api.coindesk.com/v1/bpi");

webAPI.get("currentprice/btcusd.json")
	.then(result => console.log(result))
	.catch(error => console.error(error));
```

## How to make an http POST request with parameters?
```js
const body = {
	username: "peppa",
	password: "pig",
};

webAPI.post("signup", body)
	.then(result => console.log(result))
	.catch(error => console.error(error));
```

## Methods

### get
```js
WebAPI.get(path, body, query, headers)
```

### post
```js
WebAPI.post(path, body, query, headers)
```

### delete
```js
WebAPI.delete(path, body, query, headers)
```

### put
```js
WebAPI.put(path, body, query, headers)
```
