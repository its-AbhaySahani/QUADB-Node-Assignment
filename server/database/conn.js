const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://abhay12115826:gzLvZLHvPAq52SEo@quadb.v3omskc.mongodb.net/?retryWrites=true&w=majority&appName=QUADB`;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApiVersion: ServerApiVersion.v1,
});

client.connect(err => {
    if (err) {
        console.error('Failed to connect to MongoDB', err);
    } else {
        console.log('Successfully connected to MongoDB');
    }
});

module.exports = client;