const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());


const fetch = require("node-fetch");

 
  app.get('/datos',  function(req, res) {
     fetch("https://randomuser.me/api/?results=10")
    .then(promesaFetch => promesaFetch.json())
    .then(contenido => {
    
      res.json(contenido)
    });
    
  console.log('peticion')
})

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('Frontend/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'Frontend', 'build', 'index.html'));
    })
}

app.listen(port, function() {
    console.log("express is running");
   
   
})