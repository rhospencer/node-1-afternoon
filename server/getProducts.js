const products = require('../products.json')

const getProducts = (req, res) => {
    if (req.query.price) {
        const productsAbovePrice = products.filter((el, i) => el.price >= parseInt(req.query.price))
        return res.status(200).send(productsAbovePrice)
    }
    res.status(200).send(products)
}

module.exports = getProducts