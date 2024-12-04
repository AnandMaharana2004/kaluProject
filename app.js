import express from "express"
const app = express()
import path  from "path"
import "ejs"
app.set("view engine", "ejs")
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

app.get('/',(req, res)=>{
    // res.send("hii")
    res.render("index")
})
app.get('/conform-now', (req, res)=>{
    res.render('conform-now')
})
app.get('/earning-disclamer',(req, res)=>{
    res.render('earning-disclamer')
})
app.listen('3000')

export default app