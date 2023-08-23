const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

/* Instanciations */
const app = express()
const mongoUrl = process.env.MONGO_URI

/* Static Data */
// const products = [
//     {
//         id: 0,
//         mainCategory: 'Wrapping Machine',
//         subCategory: 'Detergent',
//         productName: 'MDT 16K – 3 Servo Axis',
//         brochureLink: 'https://bmpackingmachines.com/wp-content/uploads/2020/11/MDT-16K-MACHENICAL.pdf',
//         videoLink: 'https://www.youtube.com/watch?v=Onoyk0dtKAU',
//         specifications: {
//             "ProductionRate": "Upto 150 ppm, Depending upon shape size and moisture content",
//             "ElectricalSupply": "3 kW (Max)",
//             "Power": "220VOLTS",
//             "Consumption": "SINGLE PHASE 50/60HZ",
//             "Dimension": "3965(L) X 1220(W) X 1829(H) mm",
//             "Weight": "1300 kg (approx)"
//         },
//         features: [
//             'Machine Suitable for Detergent Cake & Toilet Soap',
//             'SIX station adjustable / turret',
//             'Eight Station extended collator',
//             'New designed in feed, discharge and overhead assemblies',
//             'Next generation variable speed drive',
//             'Auto link up with Stamper Machine',
//             'Speed of machine changes automatically slow when soap is not coming from Stamper, regain its normal speed when soap starts coming',
//             'Easy handling of soft cakes. Soap moves on belts & with chain at ln feed',
//             'Discharge bed plates can move up & down with a single knob with respect to turret pocket',
//             'During up & down movement of discharge bed plates also moves to & from turret pocket to maintain minimum gap between turret pocket and discharge bed plates',
//             'Discharge end belt conveyor/ Collator unit for easy collection of packed soaps',
//             'Three side heaters, Two top heaters and side cooler is provided for better side seal',
//             'Discharge chain conveyor moves 33% slower than any other soap wrapping machine available in India at same output',
//             'Double corrugation rollers for paper and stiffener at cut off, driven by timing belts',
//             'Different paper & stiffener lengths can be made at cut off unit within no time',
//             'Additional Top heater to prevent breakdown during heater element change',
//             'Separate temperature controller for top & side heaters',
//             'Only imported timing belts used',
//             'Al the drive gears we backside of panel for easy maintenance and for quick timing',
//             'Back pressure release mechanism while soap is transferring from in feed belt conveyor to prevent damaging corners of detergent soap',
//             'Centralized lubrication system',
//             'Bidirectional print control system with worm and worm wheel mechanism',
//             'Provision of LHS and RHS belt conveyor',
//             'Tripod stands to provide extra strength to discharge',
//             'Collator for stad the soap,machine speed 150soaps/min',
//         ]
//     },
//     {
//         id: 1,
//         mainCategory: 'Wrapping Machine',
//         subCategory: 'Toilet',
//         productName: 'MDT 16K – 3 Servo Axis',
//         brochureLink: 'https://bmpackingmachines.com/wp-content/uploads/2020/11/MDT-16K-3-SERVO-AXIS-1.pdf',
//         videoLink: 'https://youtu.be/n6wxLujRoIc',
//         specifications: {
//             "Production Rate": "Upto 200 ppm, Depending upon shape size and moisture content",
//             "Electrical Supply": "3 kW (Max)",
//             "Power": "220VOLTS",
//             "Consumption": "SINGLE PHASE 50/60HZ",
//             "Dimension": "3965(L) X 1220(W) X 1829(H) mm",
//             "Weight": "1300 kg (approx)"
//         },
//         features: [
//             `7" colored HMI`,
//             "Mitsubishi 8 AXIS Motion Controller, Servo drives, Servo motors & HMI used",
//             "All Servo's equipped with Absolute Encoders",
//             "All Servo work in closed loop with each other",
//             "Machine works upon High Speed Fibre Optics networks SSC net 200mbps speed",
//             `HMI & PLC communication on Ethernet. 7" inches coloured HMI`,
//             "Wrapper length & print control by HMI",
//             "Stiffener length controlled by HMI",
//             "Smart belt conveyor at In feed driven by servo",
//             "Machine Suitable for Detergent Cake & Toilet Soap",
//             "SIX station adjustable / turret",
//             "Eight Station extended collator",
//             "New designed in feed, discharge and overhead assemblies",
//             "Next generation variable speed drive",
//             "Auto link up with Stamper Machine",
//             "Speed of machine changes automatically slow when soap is not coming from Stamper, regain its normal speed when soap starts coming",
//             "Easy handling of soft cakes. Soap moves on belts & with chain at ln feed",
//             "Discharge bed plates can move up & down with a single knob with respect to turret pocket",
//             "During up & down movement of discharge bed plates also moves to & from turret pocket to maintain minimum gap between turret pocket and discharge bed plates",
//             "Discharge end belt conveyor/ Collator unit for easy collection of packed soaps",
//             "Three side heaters, Two top heaters and side cooler is provided for better side seal",
//             "Discharge chain conveyor moves 33% slower than any other soap wrapping machine available in India at same output",
//             "Double corrugation rollers for paper and stiffener at cut off, driven by timing belts",
//             "Different paper & stiffener lengths can be made at cut off unit within no time from HMI",
//             "Additional Top heater to prevent breakdown during heater element change",
//             "Separate temperature controller for top & side heaters",
//             "Only imported timing belts used",
//             "All the drive gears we backside of panel for easy maintenance and for quick timing",
//             "Back pressure release mechanism while soap is transferring from in feed belt conveyor to prevent damaging corners of detergent soap",
//             "Centralized lubrication system",
//             "Bidirectional print control system with worm and worm wheel mechanism",
//             "Provision of LHS and RHS belt conveyor",
//             "Tripod stands to provide extra strength to discharge"
//         ]
//     },
//     {
//         id: 2,
//         mainCategory: 'Flow Wrap',
//         subCategory: 'Toilet Soap Packing',
//         productName: 'BFW Excel',
//         imageLink: 'https://bmpackingmachines.com/wp-content/uploads/2020/11/MDT16K-2.jpg',
//         brochureLink: 'https://bmpackingmachines.com/wp-content/uploads/2020/11/bfw-excel-1.pdf',
//         videoLink: 'https://www.youtube.com/watch?v=FXxXgBYG5-A',
//         specifications: {
//             "ProductionRate": "Upto 360 ppm, Depending upon shape size and moisture content",
//             "ElectricalSupply": "5.5 kW (Max)",
//             "Power": "220VOLTS",
//             "Consumption": "SINGLE PHASE 50/60HZ",
//             "Dimension": "3965(L) X 0915(W) X 2134(H) mm",
//             "Weight": "1500 kg (approx)"
//         },
//         features: [
//             "Touch Screen controlled HMI for stop, start, speed, temperature control, timing of various servo motors, recipes of different sizes and print control etc.",
//             "Straight feed product transfer system driven by servo motor",
//             "Product is transferred into the in feed pusher conveyor with help of servo controlled smart belt conveyor",
//             "Provision of product overlap machine stop-prevents any damage",
//             "Double set of sealing jaws for high speed operation",
//             "Positive drive to wrapper unwind with the help of timing belt and easy release of pressure roller for new wrapper feeding",
//             "Two stage static heater for long seal",
//             "All heaters are 50 vAC for operator safety and 24 vDc supply for control voltage",
//             "Inbuilt step down 7k VA isolation transfer for rotation of servo Motors & motion controllers",
//             "Four way adjustable forming box",
//             "User friendly HMI with process Diagnostic",
//             "Online print control adjustment through HMI",
//             "Torque limiter through PLC in case of accidental jamming of products",
//             "Product feeder conveyor moved by infinity variable speed drive gear box motor",
//             "Automatic dwell adjustment of cutting knife and sealing jaws as per wrapper pitch",
//             "Changeover with selection of recipes by selecting pre saved product details",
//             "No Product – no pouch arrangement",
//             "Pre installed online UPS for HMI running Parameters",
//             "Changeable cutting knife timing with respect to in feed, even in running machine",
//             "Total stainless steel guards, bed plates and other product touching parts",
//             "Single casted structure",
//             "CE marked electrical components",
//             "Speed will be 300 soaps/min.(speed depend upon size and input)",
//             "Collator for standing the soap"
//         ]
//     },
//     {
//         id: 3,
//         mainCategory: 'Flow Wrap',
//         imageLink: 'https://bmpackingmachines.com/wp-content/uploads/2020/11/MDT16K-2.jpg',
//         brochureLink: 'https://bmpackingmachines.com/wp-content/uploads/2020/11/bfw-excel-1.pdf',
//         videoLink: 'https://www.youtube.com/watch?v=FXxXgBYG5-A',
//         specifications: {
//             "ProductionRate": "Upto 360 ppm, Depending upon shape size and moisture content",
//             "ElectricalSupply": "5.5 kW (Max)",
//             "Power": "220VOLTS",
//             "Consumption": "SINGLE PHASE 50/60HZ",
//             "Dimension": "3965(L) X 0915(W) X 2134(H) mm",
//             "Weight": "1500 kg (approx)"
//         },
//         features: [
//             "Touch Screen controlled HMI for stop, start, speed, temperature control, timing of various servo motors, recipes of different sizes and print control etc.",
//             "Straight feed product transfer system driven by servo motor",
//             "Product is transferred into the in feed pusher conveyor with help of servo controlled smart belt conveyor",
//             "Provision of product overlap machine stop-prevents any damage",
//             "Double set of sealing jaws for high speed operation",
//             "Positive drive to wrapper unwind with the help of timing belt and easy release of pressure roller for new wrapper feeding",
//             "Two stage static heater for long seal",
//             "All heaters are 50 vAC for operator safety and 24 vDc supply for control voltage",
//             "Inbuilt step down 7k VA isolation transfer for rotation of servo Motors & motion controllers",
//             "Four way adjustable forming box",
//             "User friendly HMI with process Diagnostic",
//             "Online print control adjustment through HMI",
//             "Torque limiter through PLC in case of accidental jamming of products",
//             "Product feeder conveyor moved by infinity variable speed drive gear box motor",
//             "Automatic dwell adjustment of cutting knife and sealing jaws as per wrapper pitch",
//             "Changeover with selection of recipes by selecting pre saved product details",
//             "No Product – no pouch arrangement",
//             "Pre installed online UPS for HMI running Parameters",
//             "Changeable cutting knife timing with respect to in feed, even in running machine",
//             "Total stainless steel guards, bed plates and other product touching parts",
//             "Single casted structure",
//             "CE marked electrical components",
//             "Speed will be 300 soaps/min.(speed depend upon size and input)",
//             "Collator for standing the soap"
//         ]
//     },
// ]


// let enquiries = [
// ]

let subscribers = []

/* Middlewares */
app.use(express.json())
app.use(cors())


/* Mongoose Connection */
mongoose.connect(mongoUrl).then(() => console.log('connection successfull')).catch(() => console.log('connection failed'))
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

const enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
})

enquirySchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const subscriberSchema = new mongoose.Schema({
    email: {
        type: [String],
        required: true
    }
})



const Enquiry = new mongoose.model('Enquiry', enquirySchema)
const Product = new mongoose.model('Product', productSchema)
const Subscriber = new mongoose.model('Subscriber', subscriberSchema)


/* API Routes */

/* Root */
app.get('/', (req, res) => {
    res.send('BMPM Server')
})

/* Get Products */
app.get('/api/products', (req, res) => {
    Product.find({}).then((products)=>{
        res.json(products)
    }).catch(error => res.json(error))
})

/* Get Enquiries */
app.get('/api/enquiries', (req, res) => {
    Enquiry.find({}).then((products)=>{
        res.json(products)
    }).catch(error => res.json(error))
})

/* Get Subscriptions */
app.get('/api/subscribers', (req, res) => {
    Subscriber.find({}).then((products)=>{
        res.json(products)
    }).catch(error => res.json(error))
})

/* Get Single Product */
app.get('/api/products/:id', (req, res) => {
    const id = req.params.id
    Product.findById(id).then(product => {
        res.json(product)
    }).catch(error => {
        res.json({
            message: `The Product Doesn't Exist`
        })
    })
})

/* Get DropDown Data */
app.get('/api/dropdowndata/', (req, res) => {
    const multilevelDropdownData = [];

    Product.find({}).then((products) => {
        for (const product of products) {
            const mainCategory = product.mainCategory;
            const subCategory = product.subCategory;
            const productName = product.productName;
            const productId = product.id
    
            multilevelDropdownData.push([mainCategory, subCategory, productName, productId]);
        }
    
        const multilevelJson = [];
    
        for (const level of multilevelDropdownData) {
            const mainCategoryExists = multilevelJson.find(item => item.title === level[0])
            if (!mainCategoryExists) {
                const node = {
                    title: level[0],
                    children: [
                        {
                            title: level[1],
                            children: [
                                { id: level.at(-1), title: level[2] }
                            ]
                        }
                    ]
                };
                multilevelJson.push(node);
            }
            else {
                const subCategoryExists = mainCategoryExists.children.find(item => item.title === level[1])
                if (!subCategoryExists) {
                    const node = {
                        title: level[1],
                        children: [
                            {
                                id: level.at(-1),
                                title: level[2],
                            }
                        ]
                    };
                    mainCategoryExists.children.push(node)
                }
                else {
                    subCategoryExists.children.push({ id: level.at(-1), title: level[2] })
                }
            }
        }
    
        res.json(multilevelJson);
        res.end()
    }).catch(error => console.log(error))
})

const validateEnquiry = (body) => {
    if (!body.name) {
        return 'Name'
    }
    else if (!body.email) {
        return 'Email'
    }
    else if (!body.mobile) {
        return 'Mobile'
    }
    else if (!body.product) {
        return 'Product'
    }
    else if (!body.message) {
        return 'Message'
    }
    else {
        return ''
    }
}

/* Post Enquiry */
app.post('/api/contact', (req, res) => {
    const body = req.body;
    // enquiries = enquiries.concat(body)
    const validationError = validateEnquiry(body)
    if (validationError) {
        res.status(500).json({ message: `${validationError} Required` })
        return
    }
    const newEnquiry = new Enquiry(body)
    newEnquiry.save()
        .then((response) => {
            console.log('enquiry saved')
            res.json(response)
        })
        .catch((err) => {
            console.log('enquiry not saved')
            console.log(err)
            res.status(500).json(err)
        })
})

/* Post Subscription */
app.post('/api/subscribe', (req, res) => {
    const email = req.body.email;
    const newSubscriber = new Subscriber(email)
    newSubscriber.save()
        .then((response) => {
            console.log('Subscriber Added')
            res.json(response)
        })
        .catch((err) => {
            console.log('Subscriber Not Saved')
            console.log(err)
            res.status(500).json(err)
        })
})

/* PORT Assignment */
const PORT = 9999;

app.listen(PORT, () => {
    console.log(`The Server Is Running On Port : ${PORT}`)
})