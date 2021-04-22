const express = require("express");
const app = express();
const cors = require("cors");
const insertTransaction = require("./AddTransaction");
const spendPoints = require("./SpendPoints");
const groupItems = require("./GroupItems");
app.use(cors());
app.use(express.json());

// Array to store transactions
global.transactions = [];

// Add transactions
app.post("/transactions", async (req, res) => {
    try {
        insertTransaction(req.body);
        res.json(req.body);
    } catch (error) {
        console.log(error.message);
    }
});

app.put("/spend", async (req, res) => {
    try {
        let response = spendPoints(req.body.points);
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
});

app.get("/balance", async (req, res) => {
try {
    let balances = {};
    let rawBalances = groupItems(transactions);
    for (i = 0; i < rawBalances.length; i++){
        balances[rawBalances[i].payer] = rawBalances[i].points;
    }
    res.json(balances)
} catch (error) {
    console.log(error.message);
}
});

app.listen(5000, () => {
    console.log("Server started on port 5000")
});