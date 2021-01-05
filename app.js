var express = require('express');
var app = express();

const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async function (req, res) {
    res.render('index');
})

app.use('/user', userRouter);
app.use('/admin', adminRouter);

app.get('/profile', function (req, res) {
    res.render('profile');
})

app.get('/cart', function (req, res) {
    res.render('cart');
})

app.listen(process.env.PORT || 5000, function () {
    console.log('App has started: http://localhost:5000');
});