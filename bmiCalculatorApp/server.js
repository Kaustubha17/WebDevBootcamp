const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.listen(3000,()=>{console.log("App is listening at port 3000")});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})


app.post("/",(req,res)=>{
  let height=  Number(req.body.height);
  let weight=Number(req.body.weight);

  let bmi=Math.round(weight/(Math.pow(height,2)));

  if(bmi<18.5){
      res.send("You are underweight "+bmi);
  }
else if(bmi<=24.9 && bmi>=18.5){
    res.send("You are normal "+bmi);
}
else 
res.send("You are overweight "+bmi);


})