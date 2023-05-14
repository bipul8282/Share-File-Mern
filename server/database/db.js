import mongoose from "mongoose";



const DBConnection = async () => {
    const MONODB_URL = `mongodb://kb84101:bipul123@ac-ghfewaj-shard-00-00.twaddrp.mongodb.net:27017,ac-ghfewaj-shard-00-01.twaddrp.mongodb.net:27017,ac-ghfewaj-shard-00-02.twaddrp.mongodb.net:27017/?ssl=true&replicaSet=atlas-14jdeo-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(MONODB_URL,{useNewUrlParser: true});
       console.log('Database connected successfully');
    }catch(error){
        console.error('Error while connecting with the database',error.message);
    }
}

export default DBConnection;