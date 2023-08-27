const logger = require('../utils/logger')
const subscriberRouter = require('express').Router()
const Subscriber = require('../models/subscriber')

/* Get Subscriptions */
subscriberRouter.get('/', (req, res) => {
    Subscriber.find({}).then((products)=>{
        res.json(products)
    }).catch(error => res.json(error))
})

/* Post Subscription */
subscriberRouter.post('/new', (req, res) => {
    const email = req.body.email;
    const newSubscriber = new Subscriber(email)
    newSubscriber.save()
        .then((response) => {
            logger.info('Subscriber Added')
            res.json(response)
        })
        .catch((err) => {
            logger.info('Subscriber Not Saved')
            logger.info(err)
            res.status(500).json(err)
        })
})

module.exports = subscriberRouter 