const http = require('http');
const request = require('request');

const port = 8080;
const interval = 1000;
let timer = 10000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/html' });

  if (req.method === 'GET') {
    const currentTimer = setInterval(() => {
      const data = new Date();
      timer -= interval;
      console.log(`${data}`);
      res.write(`<div>${data}`);

      if (timer <= 0) {
        clearInterval(currentTimer);
        console.log(`Server stopped at - ${data}`);
        res.write(`<div>Server stopped at - ${data}`);
        res.end();
      }
    }, interval);
  } else {
    res.write('Hello world');
    res.end();
  }
}).listen(port, () => console.log(`HTTP server running on port ${port}`));

request('http://localhost:8080/', () => {});
