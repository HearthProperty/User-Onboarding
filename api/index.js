import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({
        status: "ok",
        env: process.env.ENV || "unknown"
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`API running on port ${port}`);
});
