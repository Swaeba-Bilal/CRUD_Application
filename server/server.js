const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();

mongoose.connect(process.env.MONGODB_URI.replace("<DB_PASSWORD>", 
    process.env.DATABASE_PASSWORD))
    .then(()=>console.log("MongoDB COnnected")
    ).catch((error) =>{
        console.log("MongoDb Connection error", error);
        
    })
const port = process.env.PORT || 5001;
app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
    
});