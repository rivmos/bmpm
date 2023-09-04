const productRouter = require('express').Router()
const Product = require('../models/product')
const logger = require('../utils/logger')
const jwt = require('jsonwebtoken')
const getTokenFrom = require('../utils/auth').getTokenFrom
  
/* Get Products */
productRouter.get('/', (req, res) => {
    Product.find({}).then((products) => {
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

// const validateProduct = (body) => {
//     if (!body.mainCategory) {
//         return 'Main Category'
//     }
//     else if (!body.subCategory) {
//         return 'Sub Category'
//     }
//     else if (!body.productName) {
//         return 'Product Name'
//     }
//     else if (!body.product) {
//         return 'Product'
//     }
//     else if (!body.message) {
//         return 'Message'
//     }
//     else {
//         return ''
//     }
// }

productRouter.post('/new', async (req, res) => {
    const decodedToken = jwt.verify(getTokenFrom(req, res), process.env.SECRET)
    if (!decodedToken.id) {
        return response.status(401).json({ error: 'token invalid' })
    }
    const body = req.body;
    // const validationError = validateEnquiry(body)
    // if (validationError) {
    //     res.status(500).json({ message: `${validationError} Required` })
    //     return
    // }
    const newProduct = new Product(body)
    newProduct.save()
        .then((response) => {
            logger.info('Product saved')
            res.json(response)
        })
        .catch((err) => {
            logger.info('Product not saved')
            logger.info(err)
            res.status(500).json(err)
        })
})


module.exports = productRouter 