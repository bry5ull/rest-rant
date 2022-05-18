const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: `Paulie's Pizza`,
        city: 'Chicago',
        state: 'IL',
        cuisines: `Buttercrust Pizza, that's it`,
        pic: '/images/pizza.jpg'
      }, {
        name: 'Sodium Expensive',
        city: 'Austin',
        state: 'TX',
        cuisines: 'Luxury Salted Meats, Pickled Hipster Garnishes',
        pic: '/images/salt.jpg'
      }]
      
    res.render('places/index', {places})
})

module.exports = router
