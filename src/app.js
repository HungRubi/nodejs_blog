const express = require('express')
const morgan = require('morgan')
const path = require('path')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000


//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('.hbs', handlebars.engine({extname: '.hbs'}))
app.set('view engine', '.hbs')

app.set('views', path.join(__dirname, 'resources','views'))

//Static file
app.use(express.static(path.join(__dirname, 'public')))
console.log(path.join(__dirname,'public')) 

app.get('/',(req, res) => {
    res.render('home')
})
app.listen(port, () => console.log(`ví dụ này đang chạy ở địa chỉ url http://localhost:${port}`))