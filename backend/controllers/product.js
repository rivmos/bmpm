const productRouter = require('express').Router()
const Product = require('../models/product')

/* Get Products */
productRouter.get('/', (req, res) => {
    Product.find({}).then((products)=>{
        res.json(products)
    }).catch(error => res.json(error))
})

/* Get Single Product */
productRouter.get('/:id', (req, res) => {
    const id = req.params.id
    Product.findById(id).then(product => {
        res.json(product)
    }).catch(error => {
        res.json({
            message: `The Product Doesn't Exist`
        })
    })
})

module.exports = productRouter 