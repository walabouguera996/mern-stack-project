require('dotenv').config()

const express = require('express')

// express app
const app = express ()

//routes
app.get('/', (req, res)=>{
    res.json({messg: 'welcom to the app'})
})

// listen for request
app.listen(process.env.PORT, () => {
    console.log('listeneing on port', process.env.PORT)
})