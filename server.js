const express = require("express");
const { add, divide } = require("./src/math");
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
    res.send(`Ola ${req.query.name}`);
})

app.get("/", (req, res) => {
    res.send("Welcome to the main page");
})

app.get("/calculator", (req, res) => {
    const operation = req.query.operation;
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    let result;
    switch(operation) {
        case 'add': // TODO
            result = add(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        default:
            result = 'Invalid operation';
    } 

    res.send(`Result: ${result}`);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}...`);
});