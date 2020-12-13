const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/welcome'){
        res.writeHead(200, {"Content-Type": "application/json"});

        res.write('Welcome to Dominose!');
        res.end();
    }
    else if(req.url==='/contact'){
        var str='{"phone":18602100000,"email":"guestcaredominos@jublifood.com"}';
        var obj=JSON.parse(str);
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(obj));
        
        res.end();
    }
    else{
        res.writeHead(404, {"Content-Type": "application/json"});

    }
    
});
console.log("listening to client req");
server.listen(8081);
