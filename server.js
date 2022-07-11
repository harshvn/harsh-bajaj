const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();


const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.send("Get Request");
})

app.post("/challenge", (req, res)=> {
    const is_success = true;
    const user_id = "harshvardhan_chandra_02062001";
    const email = "1929088@kiit.ac.in";
    const roll_number = "1929088";

    let alphabets = [];
    let numbers = [];

    let count = 0;

    let data = []; 
    
    data = req.body.data;

    for(let i=0; i<data.length; i++){
        if((data[i] >= 'a' && data[i] <= 'z') || (data[i] >= 'A' && data[i] <= 'Z')){
            alphabets.push(data[i]);
            count++;
        }
            
            
        else if(data[i] >= '0' && data[i] <= '9'){
            numbers.push(data[i]);
            count++;
        }
    }

    console.log("num: ", numbers, "alph: ", alphabets);

    const response = {
        "is_success" : is_success,
        "user_id": user_id,
        "count": count,
        "email": email,
        "roll_number": roll_number,
        "numbers": numbers,
        "alphabets": alphabets
    }
    res.send(response);
});


app.listen(process.env.PORT || 3000, function(){
    console.log("Server is Listening at Port 3000!");
});
