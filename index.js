const express =require("express");
const bodyParser =require("body-parser");
const request =require("request");
const app=express();
const https=require("https");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html")
})

app.post("/",function(req,res){
    var firstName=req.body.fName;
    var lastName=req.body.lName;
    var email=req.body.email;

    var data={
        members:[
            {
            email_address:email,
            status:"subscribed",
            merge_fields:{
                FNAME:firstName,
                LNAME:lastName,
            }
            }
        ]
    };
    const jsonData=JSON.stringify(data);
     const url = "https://us8.api.mailchimp.com/3.0/lists/b409649408"

     const option={
        method:"POST",
        auth:"AnasBaqai:a98df75dacdc4fbb0cd4b69537a61789-us8",
     }
    const request= https.request(url,option,function(response){
        // response.on("data",function(data){
            
        // })
        if(response.statusCode===200)
        {
            res.sendFile(__dirname+"/success.html");
        }
        else{
            res.sendFile(__dirname+"/failure.html");
        }
    })
    request.write(jsonData);
    request.end();

})

app.post("/failure",function(req,res){
    res.redirect("/");
})

app.listen(process.env.PORT || 3000,function(req,res){
    console.log("server is running at port 3000.");
})

// mailchimp api key
// a98df75dacdc4fbb0cd4b69537a61789-us8


// audience Id 
// b409649408