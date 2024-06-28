const h = require('http')
//console.log(h)
h.createServer(
    function(req,res){
        res.write("welcome node js")
        res.end()
    }
)
.listen(3000,()=>console.log('server is running localhost:3000'))