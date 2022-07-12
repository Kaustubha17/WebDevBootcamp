const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const https=require("https");
app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000,()=>{console.log("Server is running at port 3000")});

app.get("/",(req,res)=>{
res.sendFile(__dirname+"/index.html");

    // const query="London";
    // const apiKey="1237c07377afb5d354981cbb7724d32d";
    // const units="metric";
    // const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+units;
    // https.get(url,function(response){
    //     console.log(response.statusCode)
        
    //     response.on("data",function(data){
    //         const weatherData=JSON.parse(data);
    //         const temp=weatherData.main.temp;
    //         const weatherDesc=weatherData.weather[0].description;
    //         const weatherIcon=weatherData.weather[0].icon;
    //         const urlIcon="http://openweathermap.org/img/wn/"+weatherIcon+"@2x.png";
           

    //         console.log(weatherData);
    //         res.write("<p>The weather is currently "+weatherDesc+"</p>");
    //         res.write("<h1>The temperature is "+temp+" degree Celcius</h1>");
    //         res.write("<img src="+urlIcon+">");
    //         res.send();
    //     })
    // });
    // res.send("Hello");
})

app.post("/",function(req,res){
let cityName=req.body.cityName;
// res.send(cityName);
 const query=cityName;//getting this from cityName form textbox
    const apiKey="1237c07377afb5d354981cbb7724d32d";
    const units="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+units;
    https.get(url,function(response){
        console.log(response.statusCode)
        
        response.on("data",function(data){
            const weatherData=JSON.parse(data);
            const temp=weatherData.main.temp;
            const weatherDesc=weatherData.weather[0].description;
            const weatherIcon=weatherData.weather[0].icon;
            const urlIcon="http://openweathermap.org/img/wn/"+weatherIcon+"@2x.png";
           

            console.log(weatherData);
            res.write("<p>The weather is currently "+weatherDesc+"</p>");
            res.write("<h1>The temperature is "+temp+" degree Celcius</h1>");
            res.write("<img src="+urlIcon+">");
            res.send();
        })
    });
    // res.send("Hello");
})
