const http = require('http');

const port = 8080;
const interval = process.env.interval || 1000;
let timer = process.env.timer || 10000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/html' });

  if (req.method === 'GET') {
    const currentTimer = setInterval(() => {
      if (timer > 0) {
        console.log(`${new Date()}`);
      } else if (timer === 0) {
        console.log(`Stopped at - ${new Date()}`);
        clearInterval(currentTimer);
        res.end();
      }

      timer -= interval;
    }, interval);
  }
}).listen(port, () => console.log(`HTTP server running on port ${port}`));
