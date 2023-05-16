const express = require('express');
const mongoose = require('mongoose');

const app = express()
app.use(express.json());


app.get('/',(req,res) => {
  const a = 6
  const b = 5
  const c = a + b
  console.log("🚀 ~ file: index.js:12 ~ app.get ~ c:", c)
  return res.send('Đây là ban tin mới')
})

 
const PORT =  3000
app.listen( PORT, async() => {
  console.log(`🚀 Server Started a: http://localhost:${PORT}`)
})