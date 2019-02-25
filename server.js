const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


// app.get('/api/hello', (req, res) => {
//     res.send({message: 'Hello Express!'});
// });

app.get('/api/customers', (req, res) => {
    res.send(
        [
            {
            'id':1,
            'image': 'http://placeimg.com/64/64/1',
            'name': '최낙준',
            'birthday': '910914',
            'gender': '남자',
            'job': '사원'
        },
        {
            'id':2,
            'image': 'http://placeimg.com/64/64/2',
            'name': '홍길동',
            'birthday': '961222',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id':3,
            'image': 'http://placeimg.com/64/64/3',
            'name': '이순신',
            'birthday': '912392',
            'gender': '여자',
            'job': '중학생'
        }
        ]
    );
})

app.listen(port, () => console.log(`Listening on port ${port}`));