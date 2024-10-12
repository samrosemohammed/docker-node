import express from "express";
const app = express();
const PORT: number | string = process.env.PORT || 3000;

app.get("/", (req: any, res: any) => {
  return res.json({ message: "Hey, I am nodejs in container" });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
