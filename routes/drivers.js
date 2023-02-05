const express = require('express')
const router = express.Router()
const Driver = require('../models/driver')

//Get All Drivers
router.get('/', async (req, res) => {
    let searchOptions = {}
    if(req.query.name != null && req.query.name !== '') {
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const drivers = await Driver.find(searchOptions)
        res.render('drivers/index', {
            drivers: drivers,
            searchOptions: req.query
        })   
    } catch (error) {
        res.redirect('/')
    }
})

//Add New Drivers Form or update existing driver
router.get('/new', (req, res) => {
    res.render('drivers/new', { driver: new Driver() })
})

//Create Driver
router.post('/', async (req, res) => {
    const driver = new Driver()
    driver.name = req.body.driver_name

    try {
        const newDriver = await driver.save()
        //res.redirect(`drivers/${driver.id}`)
        res.redirect(`drivers`)
    } catch {
        res.render('drivers/new', {
                driver: driver,
                errorMessage: 'Error Creating Driver!!'
        })
    }

})

module.exports = router