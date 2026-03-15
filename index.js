const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const routes = {
  '/': 'timer.html',
  '/stopwatch': 'timer.html',
  '/timer': 'countdown.html',
};

const server = http.createServer((req, res) => {
  const file = routes[req.url] ?? req.url.slice(1);
  const filePath = path.join(__dirname, file);
  const ext = path.extname(filePath);

  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
  };

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`  Stopwatch → http://localhost:${PORT}/stopwatch`);
  console.log(`  Timer     → http://localhost:${PORT}/timer`);
});
