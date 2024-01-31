
const bodyParser = require("body-parser");

const express = require('express');
const path = require('path');
const app = express();
const ejs = require("ejs");

const router = express.Router();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use(express.json());



app.set("view engine", "ejs");
app.set('views','./views');

// const myMiddleware = (req, res, next) => {
    
//     console.log('Middleware executed!');
//     next(); 
// };
// myMiddleware ,

router.get("/", (req, res) => {
   
    res.render('homepage');
    
})


router.post('/submit' ,  (req , res) =>{
    console.log(req.body);
    const formData = req.body;
    console.log(formData);
    res.render('table', { formData });


})

app.use('/' , router);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

app.listen(3000);