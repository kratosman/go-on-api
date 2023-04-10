const express = require("express");
const router = express.Router();
const gameController = require('../controller/gameController');

router.get('/game', gameController.getAllGames);
router.get('/game/:id', gameController.getIdGames);
router.get('/', (req, res) => {
    res.redirect('/index.html')
})

router.post('/game/new', gameController.newGames);


module.exports = router;