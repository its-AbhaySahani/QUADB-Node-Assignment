// const mongoose = require('mongoose');
// const Ticker = mongoose.model('Ticker');

// exports.fetchTickers = async (req, res) => {
//     try {
//         setInterval(() => {
//             fetch("https://api.wazirx.com/api/v2/tickers")
//                 .then((res) => res.json())
//                 .then((data) => {
//                     console.log(data);
//                     const top10 = Object.values(data)
//                         .sort((a, b) => b.last - a.last)
//                         .slice(0, 10)
//                         .map((item) => ({
//                             name: item.name,
//                             last: item.last,
//                             buy: item.buy,
//                             sell: item.sell,
//                             volume: item.volume,
//                             base_unit: item.base_unit,
//                         }));

//                     Ticker.updateOne(
//                         { _id: "top10" },
//                         { $set: { tickers: top10 } },
//                         { upsert: true },
//                         (err) => {
//                             if (err) {
//                                 console.error(err);
//                             }
//                         }
//                     );
//                 })
//                 .catch((err) => {
//                     console.error('Error fetching data from API:', err);
//                 });
//         }, 10000);
//     } catch (err) {
//         console.error('Error connecting to MongoDB:', err);
//         res.status(500).send('Something went wrong');
//     }
// };