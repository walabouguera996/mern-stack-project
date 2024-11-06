require('dotenv').config()

const express = require('express')

// express app
const app = express ()

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.get('/', (req, res)=>{
    res.json({messg: 'welcom to the app'})
})

// listen for request
app.listen(process.env.PORT, () => {
    console.log('listeneing on port', process.env.PORT)
})