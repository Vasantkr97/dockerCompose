import { PrismaClient } from "@prisma/client";
import express  from "express";

const app = express();

const prisma = new PrismaClient();

app.get('/', async (req, res) => {
    const data = await prisma.user.findMany();

    res.json({
        data
    })
});

app.post("/", async (req, res) => {
    const data = await prisma.user.create({
        data: {
            userName: Math.random().toString(),
            password: Math.random().toString(),
        }
    })

    res.json({
        msg: "Post Endpint"
    })
}
)

app.listen(3000);
