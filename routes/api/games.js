
const express = require('express')
const Game = require('../../models/game');
const router = express.Router();

router.post('/', async (req, res) => {
    const { name, coop, teams, user, favorite, imageUrl } = req.body
    const game = new Game({
        name,
        user,
        teams,
        coop,
        favorite,
        imageUrl
    });
    try {
        const newGame = await game.save();
        res.status(201).json(newGame);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

router.get('/', async (req, res) => {
    const user = req.query.user
    try {
        const games = await Game.find({ user });
        res.status(200).json(games);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.patch('/:id', async (req, res) => {
    try {
        await Game.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ state: 'updated' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Game.findByIdAndRemove(req.params.id);
        res.status(200).json({ state: 'deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;