import express, { Request, Response } from "express"
import { config } from "dotenv"
import bodyParser from "body-parser";

const app = express()
config()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/student", async (req: Request, res: Response) => {
    const name = req.params.name;
    res.status(200).send("aue")
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
