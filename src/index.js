const path = require('path')
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express()
const port = 3000

//express.static là dùng để xử lí tài nguyên tĩnh như html, css, img,  
app.use(express.static(path.join(__dirname,'publics')))

app.engine('hbs', handlebars.engine({ 
  defaultLayout: 'main', 
  extname:'hbs' 
}));
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// __dirname là đường đãn tuyệt đối vào thư mục src
console.log(__dirname) 
// tương tự ta sử dụng 
console.log(path.join(__dirname, 'resources/views'))

app.use(morgan('combined'))


app.get('/',(req,res) => {
  return res.render('home')
})

app.get('/news',(req,res) => {
  return res.render('news')
})

app.get('/recruiting-college-students',(req,res) => {
  return res.render('recruiting-college-students')
})

app.get('/recruiting-after-graduate',(req,res) => {
  return res.render('recruiting-after-graduate')
})

app.get('/recruiting-inter-university',(req,res) => {
  return res.render('recruiting-inter-university')
})


 

app.listen( port, async() => {
  console.log(`🚀 Server Started a: http://localhost:${port}`)
})