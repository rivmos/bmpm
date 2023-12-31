/* Instanciations */
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

/* Express Application Instance */
const app = express()

/* Model Imports */
const Product = require('./models/product')

/* Config Imports */
const config = require('./utils/config')
const logger = require('./utils/logger')

/* Router Imports */
const productRouter = require('./controllers/product')
const subscriberRouter = require('./controllers/subscriber')
const enquiryRouter = require('./controllers/enquiry')
const usersRouter = require('./controllers/users')

/* Middlewares Imports*/
const { unknownEndpoint, requestLogger } = require('./utils/middleware')


/* Middlewares Usage*/
app.use(cors())
app.use(express.json())
// app.use(requestLogger)
app.use('/api/products', productRouter)
app.use('/api/subscribers', subscriberRouter)
app.use('/api/enquiries', enquiryRouter)
app.use('/api/auth', usersRouter)

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

// let subscribers = [] 


/* Mongoose Connection */
mongoose.connect(config.MONGO_URI).then(() => logger.info('connection successfull')).catch(() => logger.info('connection failed'))


/* API Routes */

/* Root */
app.get('/', (req, res) => {
    res.send('BMPM Server')
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
                                { id: level.slice(-1)[0], title: level[2] }
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
                                id: level.slice(-1)[0],
                                title: level[2],
                            }
                        ]
                    };
                    mainCategoryExists.children.push(node)
                }
                else {
                    subCategoryExists.children.push({ id: level.slice(-1)[0], title: level[2] })
                }
            }
        }

        res.json(multilevelJson);
        res.end()
    }).catch(error => logger.info(error))
})

app.get('/api/maincategories/', (req, res) => {
    const mainCategories = [];

    Product.find({}).then((products) => {

        for (const product of products) {
            const mainCategory = product.mainCategory;
            const mainCategoriesExists = mainCategories.find(item => item === mainCategory)
            if (!mainCategoriesExists) {
                mainCategories.push(mainCategory);
            }
        }

        res.json(mainCategories);
        res.end()
    }).catch(error => logger.info(error))
})

app.get('/api/subcategories/', (req, res) => {
    const subCategories = [];

    Product.find({}).then((products) => {

        for (const product of products) {
            const subCategory = product.subCategory;
            const subCategoryExists = subCategories.find(item => item === subCategory)
            if (!subCategoryExists) {
                subCategories.push(subCategory);
            }
        }

        res.json(subCategories);
        res.end()
    }).catch(error => logger.info(error))
})

/* Unknown EndPoint Route */
app.use(unknownEndpoint)


app.listen(9999, () => {
    logger.info(`The Server Is Running On Port : ${config.PORT}`)
})