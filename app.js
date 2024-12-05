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
app.get('/otp-in-page',(req, res)=>{
    res.render('otp-in-page')
})
app.get('/privacy-policy', (req, res)=>{
    res.render('privacy-policy')
})
app.get('/terms-services', (req, res)=>{
    res.render('terms-services')
})
app.listen('3000')

export default app