import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "yourpassword",
  database: "voa",
});

// app.get("/visitors", (req, res) => {
//   const q = "SELECT * FROM srg_visitors";
//   pool.query(q, (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.json(err);
//     }
//     return res.json(data);
//   });
// });

app.listen(8800, () => {
  console.log("Connected to backend.");
});
