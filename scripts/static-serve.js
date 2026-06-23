const http = require('http');
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, 'out');
const mime = { '.html':'text/html', '.js':'application/javascript', '.css':'text/css', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.svg':'image/svg+xml', '.ico':'image/x-icon', '.json':'application/json', '.woff2':'font/woff2' };
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  if (!path.extname(p)) p = p + '.html';
  const file = path.join(root, p);
  try {
    const data = fs.readFileSync(file);
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'text/plain', 'Cache-Control': 'no-cache' });
    res.end(data);
  } catch {
    res.writeHead(404); res.end('Not found');
  }
}).listen(3002, () => console.log('Static server ready on http://localhost:3002'));
