const express = require('express')
const app = express()
const port = 3000
app.get('/ngoc-rong',(req, res) => {
    var a = 1;
    var b = 2;
    var c = a + b;
    return res.send('Hello World')
})
app.listen(port, () => console.log(`ví dụ này đang chạy ở địa chỉ url http://localhost:${port}`))