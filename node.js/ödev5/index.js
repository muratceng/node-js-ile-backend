const http = require("http");

const server = http.createServer((req,res)=>{
    const url = req.url;

    if(url === '/'){
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        res.write('<h2>Index Sayfası</h2>',"utf-8");
    }

    if(url === '/hakkimda' ){
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        res.write('<h2>Hakkımda Sayfası</h2>',"utf-8");
    }

    if(url === '/iletisim' ){
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        res.write('<h2>İletişim Sayfası</h2>',"utf-8");
    }


    res.end();
})

const port = 5000;

server.listen(port, ()=>{
    console.log(`server was started at port ${port}`);
})