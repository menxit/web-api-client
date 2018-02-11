# WebAPI

## How to install?
```
npm i -S web-api-client
```

## How to make an http GET request?
```
const WebAPI = require('./index.js');

const webAPI = new WebAPI("https://api.coindesk.com/v1/bpi");

webAPI.get("currentprice/btcusd.json")
	.then(result => console.log(result))
	.catch(error => console.error(error));
```

## How to make an http POST request with parameters?
```
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
```
WebAPI.get(path, body, query, headers)
```

### post
```
WebAPI.post(path, body, query, headers)
```

### delete
```
WebAPI.delete(path, body, query, headers)
```

### put
```
WebAPI.put(path, body, query, headers)
```
