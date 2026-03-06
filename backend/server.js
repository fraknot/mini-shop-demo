import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const products = [
  { id: 1, name: "Playera DevOps", price: 20 },
  { id: 2, name: "Taza Docker", price: 15 },
  { id: 3, name: "Sticker Kubernetes", price: 5 }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});