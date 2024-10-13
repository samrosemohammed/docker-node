import express from "express";
import cors from "cors";

const app = express();
const PORT: number | string = process.env.PORT || 3000;
app.use(cors());
app.get("/", (req: any, res: any) => {
  return res.json([
    {
      id: 1,
      name: "Roshan Thapa Magar",
    },
    {
      id: 2,
      name: "Suman Paudel",
    },
    {
      id: 3,
      name: "Ishaan Pudasainii",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
