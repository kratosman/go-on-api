const dbConfig = require('../../config/dbConfig');

const games = {
    getAllGames: (callback) => {
        if (typeof callback !== 'function') {
            console.log("Callback needs to be a function");
            return;
        }
        try {
            let sql = "SELECT * FROM tbl_game_data LIMIT 3";
            dbConfig.query(sql, callback);
        } catch (error) {
            console.log("Error executing query:", error);
        }
    },
    getIdGames: (values, callback) => {
        if (typeof callback !== 'function') {
            console.log("Callback needs to be a function");
            return;
        }

        try {
            let sql = "SELECT * FROM tbl_game_data WHERE id = ?";
            dbConfig.query(sql,values, callback);
        } catch (error) {
            console.log("Error executing query:", error);
        }
    },
    newGames: (data, callback) => {
        if (typeof callback !== 'function') {
            console.log("Callback needs to be a function");
            return;
        }
        try {
            let sql = "INSERT INTO tbl_game_data (poster_path, title, overview, average_ratings, total_ratings, genre) VALUES (?,?,?,?,?,?)";
            dbConfig.query(sql, data, callback);
        } catch (error) {
            console.log("Error executing query:", error);
        }
    }
}

module.exports = games;