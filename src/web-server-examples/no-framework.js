import { resolve4 } from 'dns';
import http from 'http';

const server = http.createServer((req, res) => {
    const { url } = req;
    res.writeHead(200, {'Content-Type': 'text/html'});
    var page, code = 200;

    if (url === '/') {
        page = 'Home';

    } else if (url === '/about') {
        page = 'About';
    } else {
        page = 'Not found';
        code = 400;
    }


    const subtitle = code == 200 
        ? `This is the ${page.toLowerCase()} page.` 
        : `Page ${page.toLowerCase()}!`;

    res.writeHead(code, {'Content-type': 'text/html'});
    res.write(`<h1>${page}</h1></br><span>${subtitle}</span>`)

    res.write('\n')
    res.end();
});

server.listen(3001, () => console.log('listening on port 3001'));