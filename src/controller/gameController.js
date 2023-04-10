const gameModels = require('../models/gameModels');

const getGamesController = {
    getAllGames: (req, res, next) => {
        gameModels.getAllGames((err, games) => {
            if (err) {
                return next(err)
            };

            res.json(games);
        });
    },
    getIdGames: (req, res, next) => {
        const game_id = req.params.id;
        gameModels.getIdGames([game_id],(err, games) => {
            if (err) {
                return next(err)
            } 

            res.json(games);
        })
    },
    newGames: (req, res, next) => {
        const {
            poster_path,
            title,
            overview,
            average_ratings,
            total_ratings,
            genre
        } = req.body;

        gameModels.newGames([
            poster_path, 
            title, 
            overview, 
            average_ratings, 
            total_ratings,
            genre
        ],
        (err, gameResults) => {
            if (err) {
                return next()
            } 

            res.json(gameResults);
        })
        
    }
} 

module.exports = getGamesController;