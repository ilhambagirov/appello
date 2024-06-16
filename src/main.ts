import express, { Request, Response } from "express"

const app = express()

app.get("/student", async (req: Request, res: Response) => {
    const name = req.params.name;
    res.status(200).send("aue")
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
