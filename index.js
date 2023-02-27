const express = require('express');
// route
const route = require('./controller');
// cors
const cors = require('cors');
// port 
const port = parseInt(process.env.PORT) || 4500;
// Express app
const app = express();
// Middleware
const {errorHandling} = require('./middleware/ErrorHandling');
//
const cookieParser = require('cookie-parser');

app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4500')
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next();
});
app.use(route);
app.use(
cors(),
cookieParser(),
express.json,
express.urlencoded({extended: false})
)

// Server is running
app.listen(port, ()=> {
console.log(`Server is running`)
});
// Handling all errors
app.use(errorHandling);







// const express = require("express");

// const cors = require("cors");

// const {errorHandling} = require('./middleware/ErrorHandling');

// // const { application } = require("express");

// const cookieParser = require('cookie-parser');


// const app = express();

// var corsOptions = {
//     origin : "http://localhost:4500"
// };

// app.use(cors(corsOptions));

// app.use(express.json());

// app.use(express.urlencoded({ extended: true}));

// // simple route
// app.get("/", (req,res) => {
//     res.json({ message: "Welcome to Dotify application." });
// });

// // says tutorial.routes i think that might need to change in the future
// // require("./app/routes/tutorial.routes.js")(app);

// // sets port, listen  for requests 
// const PORT = process.env.PORT || 4500;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`)
// });

// // app.use(route);
// // app.use(
// //     cors(),
// //     cookieParser(),
// //     express.json,
// //     express.urlencoded({exteneded:false})
// // );


// // Handling all errors
// app.use(errorHandling);

