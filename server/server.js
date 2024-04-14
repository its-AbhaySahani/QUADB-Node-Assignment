const express = require('express');
const cors = require('cors');
const { fetchTickers } = require('./controllers/tickersController');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.get("/tickers", fetchTickers);

app.listen(port, () => {
    console.log(`Server running boss: ${port}`);
});