const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')

const app = express()


//middlewares
app.use(fileUpload())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('public'))


app.get('/',(req,res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post('/api/fileanalyse', (req,res) => {
    console.log(req.files)
    res.json({
        name:req.files.file.name,
        type:req.files.file.mimetype,
        size:req.files.file.size
    })
})



app.listen(3000,() => {
    console.log("Server is listening at port 3000")
})
