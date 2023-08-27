const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    mainCategory: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    brochureLink: {
        type: String,
        required: true
    },
    videoLink: {
        type: String,
        required: true
    },
    specifications: {
        type: Object,
        required: true,
        properties: {
            ProductionRate: { type: String },
            ElectricalSupply: { type: String },
            Power: { type: String },
            Consumption: { type: String },
            Dimension: { type: String },
            Weight: { type: String }
        }
    },
    features: {
        type: [String],
        required: true
    }
})

productSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Product', productSchema)
