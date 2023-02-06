const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const user = require('../models/User')
const User = require('../models/User')

//Get All users
router.get('/', async (req, res) => {
    try {
        const users = await user.find()
        res.render('users/index', { users: users })   
    } catch (error) {
        res.redirect('/')
    }
})

//user login page
router.get('/login', (req, res) => {
    res.render('users/login', { layout: false })
})

//user login
router.post('/login', async (req, res) => {
    try {

    } catch (error) {

    }
})

//user register Page
router.get('/register', (req, res) => {
    res.render('users/register')
})

//Add New users Form or update existing user
router.get('/new', (req, res) => {
    res.render('users/new', { user: new user() })
})

//Create user
router.post('/register', async (req, res) => {
    try {
        const user = new User()
        const hashPass = await bcrypt.hash(req.body.pass, 10)
        user.name = req.body.name
        user.uname = req.body.uname
        user.pass = hashPass
        const newuser = await user.save()
        //res.redirect(`users/${user.id}`)
        res.redirect(`/users`)
    } catch(error) {
        console.log(error);
        
        res.render('users/register', {
            user: user,
            errorMessage: 'Error Creating User!!'
        })
    }

})

module.exports = router