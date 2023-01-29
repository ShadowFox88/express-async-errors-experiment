import express from "express";

const PORT = process.env.PORT ?? 3000;
const app = express();

const index = async (req, res) => {
    await this.doesnt.exist();
};

app.get("/", index);

app.listen(3000, () => {
    console.log(`[localhost:${PORT}] Playground is up!`);
});
