const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    if(ctx.url==='/hakkimda'){
        ctx.status = 200;
        ctx.body= '<h1>Hakkımda Sayfası</h1>'
    }
    else if(ctx.url === '/iletisim'){
        ctx.status=200;
        ctx.body= '<h1>İletişim Sayfası</h1>'
    }
    else if(ctx.url === '/'){
        ctx.status =200;
        ctx.body = '<h1>Index Sayfası</h1>';
    }else{
        ctx.status = 404;
        ctx.body = '<h1>404 Sayfa Bulunamadı</h1>'
    }
});

const port = 3000;

app.listen(port,()=>{
    console.log(`Server listening at port ${port}`);
});