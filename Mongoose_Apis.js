const express = require("express");
// require('./Mongoose_config');

const mongoose=require('mongoose');
// Use the MONGO_URI from environment variables
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

const path = require('path');  // Import the 'path' module

const products = require('./Mongoose_collection');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

app.get("/",(req,resp)=>{
    resp.sendFile(path.join(__dirname,'index.html'));
})
app.get("/create.html",(req,resp)=>{
    resp.sendFile(path.join(__dirname,'create.html'));
})


app.post("/create", async (req, resp) => {
    let data = new products(req.body);
    let res = await data.save();
    console.log(res);
    resp.sendFile(path.join(__dirname,'create.html'));
});


app.post("/search",async (req,resp)=>{
 
    const { email, password } = req.body;

    let user=await products.findOne(
            {"email":email}
    );

    if(user){  //Not null

        if(user.password===password){
        resp.render("welcome", { name: user.name }); // Pass the user's name to the template
    }else{
        resp.send("Inccorect Password");
    }
    }else{
        resp.send("Inccorect Id Please Create Account");
    }
});




module.exports = app;



// app.get("/list", async (req, resp) => {
//     let data = await products.find();
//     resp.send(data);
//     console.log(data);
// });

// app.delete("/delete/:_id", async (req, resp) => {
//     let data=await products.deleteOne(req.params);
//     //or We Can Also Do
//     //let data=await products.deleteOne({name:req.params.name});
//     resp.send(data);
// });

// app.put("/update/:_id", async (req, resp) => {
//     console.log(req.params);

//     let data = await products.updateOne(
//          req.params,
//          {
//             $set:req.body
//          }

//     );

//     resp.send(data);
// });

// app.listen(5000);
