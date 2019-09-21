const express = require('express');
const morgan = require('morgan');   // 로그기록 관리 미들웨어
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSesion = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');       // 세션(백엔드)과 쿠키(프런트) 관리

const passportConfig = require('./passport');
const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');

dotenv.config();
const app = express();
db.sequelize.sync();
passportConfig();


app.use(morgan('dev'));
// json 형식에 데이터 처리
app.use(express.json());
// form 형식에 데이터 처리
app.use(express.urlencoded({ extended: true }));    // req.body 처리 부분
app.use(cors());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSesion( {
    resave: false,          // 매번 세션 강제 저장
    saveUninitialized: false,   // 빈 값도 저장
    secret: process.env.COOKIE_SECRET,     // 세션 암호화
    cookie: {
        httpOnly: true,         // 쿠키 접근 차잔
        secure: false,          // https 를 사용할 때 true  
    }
}));
app.use(passport.initialize());     // 위 app.use(expressSesion( 이후 수행
app.use(passport.session());


app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);





app.listen(3065, () => {
    console.log('server is running on http://localhost:3065');
})

