const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

// router.get('/', (req, res) => {
//     let places = [{
//         name: `Paulie's Pizza`,
//         city: 'Chicago',
//         state: 'IL',
//         cuisines: `Buttercrust Pizza, that's it`,
//         pic: '/images/pizza.jpg'
//       }, {
//         name: 'Sodium Expensive',
//         city: 'Austin',
//         state: 'TX',
//         cuisines: 'Luxury Salted Meats, Pickled Hipster Garnishes',
//         pic: '/images/salt.jpg'
//       }]
      
//     res.render('places/index', {places})
// })

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})



module.exports = router
