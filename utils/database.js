const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://shubhamverma2250:sDOXjkJHeRjJk6Nc@cluster0.jbkv2di.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let _db;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const run = () => {
  // Connect the client to the server	(optional starting in v4.7)
  return client.connect().then(() => {
    return client
      .db("admin")
      .command({ ping: 1 })
      .then(() => {
        console.log(
          "Pinged your deployment. You successfully connected to MongoDB!"
        );
        _db = client.db();
        return client;
      });
  });
};

const getDb = () => {
  if (_db) return _db;
  else console.log("NO DB Found");
};
exports.mongoConnect = run;
exports.getDb = getDb;
