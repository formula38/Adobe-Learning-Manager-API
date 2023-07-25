const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
    console.log(req.query.name)
    res.json(users);
});

router.get('/new', (req, res) => {
    res.render('users/new', {firstname: "Enter Name Here."})
});

router.post('/', (req, res) => {
    const isValid = true;
    if (isValid) {
        users.push({
            firstname: req.body.firstname
        });
        res.redirect(`/users/${users.length - 1}`);
    } else {
        console.log('Error');
        res.render('users/new', {firstname: req.body.firstname});
    }

    // console.log(req.body.firstname);
    // res.send('Hi.' + req.body.firstname);
});

router
    .route('/:id')
    .get((req, res) => {
        res.json(req.user);
    })
    .put((req, res) => {
        res.render('user/update', {firstname: req.body.firstname});

    })
    .delete((req, res) => {
        res.render('user/delete', {firstname: req.body.firstname});
        users.slice(req.user);
    });

const users =
    [
        {firstname: "Danny"},
        {firstname: "Kyle"},
        {firstname: "Shelby"},
        {firstname: "Markia"},
        {firstname: "Brandon"}
    ];

router.param('id', (req, res, next, id) => {
    req.user = users[id];
    next();
});

module.exports = router;
