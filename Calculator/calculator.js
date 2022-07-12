const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000,()=>{console.log("Calculator listening at 3000")});


app.get("/",(req,res)=>{res.sendFile(__dirname+"/index.html")});

app.post("/",(req,res)=>{

    // console.log(req.body);

    let num1=Number(req.body.num1);
    let num2=Number(req.body.num2);
let result=num1+num2;

    res.send("Addition result of numbers is "+ result);

});