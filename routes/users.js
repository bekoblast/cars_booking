const express = require('express')
const router = express.Router()
const user = require('../models/User')


//user login
router.get('/login-page', (req, res) => {
    res.render('users/login', {layout: false})
})

//user register
router.get('/register', (req, res) => {
    res.render('users/register')
})

//Add New users Form or update existing user
router.get('/new', (req, res) => {
    res.render('users/new', { user: new user() })
})

//Create user
router.post('/', async (req, res) => {
    const user = new user()
    user.name = req.body.user_name

    try {
        const newuser = await user.save()
        //res.redirect(`users/${user.id}`)
        res.redirect(`users`)
    } catch {
        res.render('users/new', {
                user: user,
                errorMessage: 'Error Creating user!!'
        })
    }

})

module.exports = router