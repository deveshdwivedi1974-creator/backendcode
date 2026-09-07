//equire('dotenv').config({path:'./env'})  //it shows  inconssitency  thats  why  we  dont  prefer  this 
 import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import dotenv from "dotenv"
import connectDB from "./db/index.js"
   
   dotenv.config(
    {path: './env'}
   )

   
 connectDB()
 .then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
    
})















/* const app = express()
  //iffy method 
(async()=>{
   try{ 
  await mongoose.connect(
   `${process.env.MONGODB_URI}/${DB_NAME}`)
   //listionr   
   app.on("error", (error) =>  {console.log("our database is not able to communicate " , error);
    throw error
   })
     app.listen(process.env.PORT,  ()=> {
        console.log(`app is listioning is on PORT ${process.env.PORT}` );
     })
    
   } 
   catch(error){
     console.error(error);
     throw error
   }
  })() */