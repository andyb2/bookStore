const router = require("express").Router();
const { Book } = require("../../db/models/");

router.post('/', async (req, res, next) => {
    try {
        console.log(`MY TEST`, req.body)
        const book = await Book.create({
            title: req.body.title,
            category: req.body.category,
            price: req.body.price
        });
        // res.status(201).json({ test: `hi` })
    } catch (error) {
        next(error)
    }
})

module.exports = router;