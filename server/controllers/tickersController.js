const client = require('../database/conn');

exports.fetchTickers = async (req, res) => {
    try {
        const collection = client.db("QuadB_Db").collection("tickers");
        setInterval(() => {
            fetch("https://api.wazirx.com/api/v2/tickers")
                .then((res) => res.json())
                .then((data) => {
                    const top10 = Object.values(data)
                        .sort((a, b) => b.last - a.last)
                        .slice(0, 10);
                    // Rest of your logic here...
                });
        }, 10000);
    } catch (err) {
        console.error(err);
    }
};