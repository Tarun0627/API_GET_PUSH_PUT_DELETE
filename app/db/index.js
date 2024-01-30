const mongoose = require('mongoose');

class DbConnection {
    constructor() {
        this.initialize();
    }

    initialize() {

        const connectionString = process.env.MONGO_URI;
       console.log('conection str',connectionString);
        mongoose.connect(connectionString, {
            useUnifiedTopology: true
        })
        .then(()=>{
            console.log('connected to mongoDB')
        })
        .catch(err => console.log("Error connecting to mongoDB: ",err?.message));



    }
}


module.exports = DbConnection;

