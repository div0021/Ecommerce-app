import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import morgan from "morgan";
import connectDB from "./config/db.js";
import main from "./seed/seed.js";
import routes from "./routes/productRoutes.js"

dotenv.config();
const app = express()
const port = 3000


app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use("/",routes)

app.get("/", async (req, res) => {
    main();
    res.send("<h1>Welcome to ecommerce app.</h1>")

})

app.listen(port,async ()=>{
    console.log(`Server is running on port ${port}`)
    await connectDB()
})