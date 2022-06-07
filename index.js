const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const port = process.env.PORT || 5000;
const app = express();


app.use(cors());
app.use(express.json());



const uri = "mongodb+srv://dbUser1:ME6ulZxDDQAK8Jqy@cluster0.ju65n.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try{
        await client.connect();
        console.log('MongoDB is connected');

    }
    finally {
        
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Server is running');
})
app.listen(port, () => {
    console.log('Server is running');
})

//dbUser1
//ME6ulZxDDQAK8Jqy
