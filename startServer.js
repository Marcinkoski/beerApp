const http = require("http");
const hostname = "localhost";
const port = 3000;
const server = http.createServer((req,res) =>{
   res.writeHead(200, {'Const-Type':'text/plain}'});
   res.end('Hello World\n');
});

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://user:user@cluster0.bvtkx.mongodb.net/sample_training?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


server.listen(port, hostname, () => {
    client.connect(err => {
        const collection = client.db("sample_training")
            .collection("grades")
            .find()
            .toArray(function(err, result){
            if(err) throw err;
            console.log(result);
            client.close();
        });
    });
    console.log(`Server śmiga na http://${hostname}:${port}/`);
})

