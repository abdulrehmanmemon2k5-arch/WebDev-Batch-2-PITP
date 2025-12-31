//1.important Express
const express=require('express');

//2. create an express application
const app=express();

//3. define the port
const port=3000

//4.create our first "route"
//this handles GET requests to the homepage("/")
app.get('/',(req,res)=>{res.send('hello,world! this is my first exprsss Server.');});

//5. start the server and listen for connections
app.listen(port,()=>{console.log(`server is running at http://locahost:${port}`);});
