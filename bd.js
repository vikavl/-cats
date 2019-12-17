const sqlite3 = require('sqlite3').verbose();

const DB_PATH = 'app.db'

const DB = new sqlite3.Database(DB_PATH);

DB.serialize(() => {
    DB.run("CREATE TABLE IF NOT EXISTS Cats (id INTEGER PRIMARY KEY UNIQUE, name TEXT, type TEXT, age TEXT, food TEXT)");
})

module.exports = DB;