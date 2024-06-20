const express = require('express')
const morgan = require('morgan')
const path = require('path')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('handlebars', handlebars.engine({extname: '.hbs'}))
app.set('view engine', 'handlebars')

app.set('views', path.join(__dirname, 'resources','views'))
console.log('Path: ', path.join(__dirname, 'resources','views'))

app.get('/ngoc-rong',(req, res) => {
    res.render('home')
})
app.listen(port, () => console.log(`ví dụ này đang chạy ở địa chỉ url http://localhost:${port}`))