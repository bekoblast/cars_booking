const express = require('express')
const router = express.Router()
const car = require('../models/Car')

//Get All cars
router.get('/', async (req, res) => {
    try {
        const cars = await Car.find()
        res.render('cars/index', { cars: cars })   
    } catch (error) {
        res.redirect('/')
    }
})

//Add New cars Form or update existing car
router.get('/new', (req, res) => {
    res.render('cars/new', { car: new car() })
})

//Create car
router.post('/', async (req, res) => {
    const car = new car()
    car.name = req.body.car_name

    try {
        const newcar = await car.save()
        //res.redirect(`cars/${car.id}`)
        res.redirect(`cars`)
    } catch {
        res.render('cars/new', {
                car: car,
                errorMessage: 'Error Creating car!!'
        })
    }

})

module.exports = router