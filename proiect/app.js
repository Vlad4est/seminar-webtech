import express from "express"



import { moviesRouter } from "./routes/moviesRouter.js"

const PORT = 8080;

const app = express()

app.use(express.json())

app.use("/api/movies", moviesRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));