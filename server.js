const http = require('http');

const port = 8080;
const interval = 1000;
let timer = 10000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/html' });

  if (req.method === 'GET') {
    const currentTimer = setInterval(() => {
      const data = new Date();

      timer -= interval;

      if (timer <= 0) {
        if (timer === 0) {
          res.end(`<div>Server stopped at - ${data}`);
          console.log(`Server stopped at - ${data}`);
        }
        return clearInterval(currentTimer);
      } else {
        console.log(`${data}`);
        res.write(`<div>${data}`);
      }
    }, interval);
  }
}).listen(port, () => console.log(`HTTP server running on port ${port}`));
