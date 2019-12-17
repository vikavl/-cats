var express = require('express');
var router = express.Router();

const db = require('../bd.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
db.all("SELECT * FROM Cats", (err, rows)=>(res.send(rows)))
});

router.post('/', (req, res) => {
    const {name,type,age,food} = req.body;
    db.run(`INSERT INTO Cats VALUES (NULL, '${name}','${type}','${age}','${food}')`);
    res.sendStatus(200);
})
module.exports = router;