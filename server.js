const fs = require('fs');
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

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mariasql = require('mariadb');
const connection = mariasql.createPool({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});

app.get('/api/customers', (req, res) => {
    connection.getConnection()
    .then(conn => {
        
        conn.query("SELECT * FROM CUSTOMER")
            .then((rows) => {
                console.log("row = " +rows);
                res.send(rows); 
            })
            .then((res) => {
                console.log("res = " + res);
                conn.end();
            })
            .catch(err => {
                console.log(err);
                conn.end();
            })

        }).catch(err => {
        console.log("err > " + err);
    });
});



// app.get('/api/customers', (req, res) => {
//     connection.query( "select * from customer").then(err, rows, fields) => {
//             res.send(rows);
//         }
//     )
// })

app.listen(port, () => console.log(`Listening on port ${port}`));